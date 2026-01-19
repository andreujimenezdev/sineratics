import { NextResponse } from "next/server";

type ContactPayload = {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
  // Honeypot (si viene lleno, ignoramos silenciosamente)
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 5; // 5 envíos/minuto por IP
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getIp(request: Request): string {
  // Vercel / proxies: x-forwarded-for suele venir con "client, proxy1, proxy2"
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

function validatePayload(payload: ContactPayload): string | null {
  const nombre = payload.nombre?.trim();
  const email = payload.email?.trim();
  const empresa = payload.empresa?.trim();
  const mensaje = payload.mensaje?.trim();

  if (!nombre || nombre.length < 2) return "Nombre inválido.";
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return "Email inválido.";
  if (!empresa || empresa.length < 2) return "Empresa inválida.";
  if (!mensaje || mensaje.length < 10) return "Mensaje demasiado corto.";

  return null;
}

async function sendEmailWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Falta RESEND_API_KEY en variables de entorno.");
  }

  // Destino por defecto (si no se configura CONTACT_TO_EMAIL)
  const to = process.env.CONTACT_TO_EMAIL || "info@sineratics.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Sineratics <web@sineratics.com>";

  const subject = `Nuevo contacto: ${payload.nombre} (${payload.empresa})`;
  const text = [
    `Nombre: ${payload.nombre}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.empresa}`,
    "",
    "Mensaje:",
    payload.mensaje,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      reply_to: payload.email,
    }),
  });

  if (!res.ok) {
    const raw = await res.text().catch(() => "");
    throw new Error(`Resend error (${res.status}): ${raw || res.statusText}`);
  }
}

export async function POST(request: Request) {
  const ip = getIp(request);

  // Rate limit simple (mejor que nada)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Inténtalo en un minuto." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot: si viene relleno, respondemos OK pero no hacemos nada
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  try {
    await sendEmailWithResend(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

