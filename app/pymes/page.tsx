import { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Soluciones para PYMES - Sineratics",
  description: "Soluciones para PYMES sin tecnicismos: web, correo, dominios, formularios y automatizaciones simples para ahorrar tiempo y mejorar la atención.",
};

export default function PymesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* 1. HERO */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Soluciones para PYMES, sin tecnicismos.
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light mb-10">
              Nos encargamos de lo técnico para que el negocio funcione mejor: web, correo, dominio, formularios y organización.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Button href="/contacto">
              Cuéntanos tu caso
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 2. BLOQUES DE SOLUCIONES */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soluciones.map((solucion, index) => (
              <FadeIn key={solucion.title} delay={index * 50}>
                <div className="bg-white border border-[#e5e5e5] p-10 transition-premium card-hover">
                  <h2 className="text-2xl font-bold mb-4">{solucion.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solucion.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PACKS */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-16" align="center">
              Empezar es más fácil con un pack
            </SectionTitle>
            <p className="text-lg text-gray-600 -mt-10 mb-16 max-w-3xl mx-auto text-center">
              Packs estándar para resolver lo más común. Si el caso requiere algo especial, lo proponemos por fases.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packs.map((pack, index) => (
              <FadeIn key={pack.title} delay={index * 50}>
                <div className="border border-[#e5e5e5] bg-white p-8 transition-premium card-hover">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{pack.title}</h3>
                    <div className="text-4xl font-bold text-black">{pack.price}</div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pack.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={250}>
            <div className="mt-12 text-center">
              <Button href="/contacto">
                Ver qué pack encaja
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. CASOS REALES */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-16">
              Casos reales que funcionan
            </SectionTitle>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {casosReales.map((caso, index) => (
              <FadeIn key={caso.title} delay={index * 50}>
                <div className="bg-white border border-[#e5e5e5] p-8">
                  <h3 className="text-xl font-bold mb-3">{caso.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caso.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="border border-[#e5e5e5] p-12 md:p-20 text-center transition-premium hover:shadow-premium">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Tienes un problema concreto y quieres una solución simple?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Cuéntanos el caso y proponemos el primer paso con impacto.
              </p>
              <Button href="/contacto">
                Hablar ahora
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

// DATOS: Bloques de soluciones
const soluciones = [
  {
    title: "Presencia online que trae contactos",
    description: "Web clara, mensaje directo y botones de contacto. Menos ‘visitas’ y más ‘mensajes’."
  },
  {
    title: "Correo y dominio bien configurados",
    description: "Revisamos DNS, cuentas y configuración para evitar spam, errores y problemas recurrentes."
  },
  {
    title: "Captación y organización",
    description: "Formularios que funcionan, avisos internos y organización básica para responder más rápido."
  },
  {
    title: "Automatizaciones útiles (sin humo)",
    description: "Recordatorios, respuestas tipo y tareas repetitivas conectando herramientas comunes."
  }
];

// DATOS: Packs (orientativos)
const packs = [
  {
    title: "Web Express",
    price: "Desde 490€",
    description: "Landing clara orientada a contacto. WhatsApp + llamada + formulario. SEO básico."
  },
  {
    title: "Correo y dominio",
    price: "Desde 190€",
    description: "Revisión y configuración para dejarlo estable (DNS, cuentas, dispositivos, spam)."
  },
  {
    title: "Captación y formularios",
    price: "Desde 290€",
    description: "Formularios fiables, avisos y organización básica de solicitudes."
  },
  {
    title: "Automatización simple",
    price: "Desde 390€",
    description: "Automatizamos tareas repetitivas con un flujo simple y mantenible."
  }
];

// DATOS: Casos reales de PYMES
const casosReales = [
  {
    title: "Peluquería",
    description: "Menos llamadas y agenda más ordenada con un flujo claro de contacto y confirmación."
  },
  {
    title: "Restaurante",
    description: "Reservas y consultas más fáciles para clientes, y menos confusión en el día a día."
  },
  {
    title: "Tienda de ropa",
    description: "Web clara + WhatsApp visible. Más solicitudes y mejor imagen del negocio."
  },
  {
    title: "Gimnasio",
    description: "Recordatorios y seguimiento simple para reducir incidencias y no depender de la memoria."
  }
];

