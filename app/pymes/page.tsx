import { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Soluciones para PYMES - Sineratics",
  description: "Automatización, webs rápidas, chatbots y herramientas que facilitan tu día a día. Soluciones digitales para hacer crecer tu negocio.",
};

export default function PymesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* 1. HERO */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Soluciones digitales que hacen crecer tu negocio.
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light mb-10">
              Automatización, webs rápidas, chatbots y herramientas que facilitan tu día a día.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Button href="/contacto">
              Solicitar presupuesto
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

      {/* 3. PACKS CON PRECIO CERRADO */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-16" align="center">
              Packs con precio cerrado
            </SectionTitle>
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
                Consultar disponibilidad
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
                ¿Quieres digitalizar tu negocio?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Te propongo una solución clara, rápida y sin compromiso.
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
    title: "Automatización de WhatsApp",
    description: "Respuestas instantáneas, reservas automáticas y recordatorios sin complicaciones."
  },
  {
    title: "Chatbots Inteligentes",
    description: "Atención 24/7 para tus clientes. Personalizados para tu negocio."
  },
  {
    title: "Web Profesional en 5–7 días",
    description: "Página moderna, rápida y optimizada, con WhatsApp y SEO básico."
  },
  {
    title: "Gestión del negocio",
    description: "Citas, stock y empleados. Todo en un panel sencillo y práctico."
  }
];

// DATOS: Packs con precio cerrado
const packs = [
  {
    title: "Web Express",
    price: "300€",
    description: "Web profesional lista en 5 días. Diseño moderno, contacto, WhatsApp y SEO básico incluidos."
  },
  {
    title: "WhatsApp Automatizado",
    price: "150€",
    description: "Respuestas automáticas, sistema de reservas y mensajes programados sin esfuerzo."
  },
  {
    title: "Chatbot IA",
    price: "250€",
    description: "Asistente inteligente que responde preguntas, atiende a clientes 24/7 y gestiona consultas."
  },
  {
    title: "Gestión del Negocio",
    price: "400€",
    description: "Citas, stock, empleados o clientes. Todo organizado en un panel sencillo y personalizado."
  }
];

// DATOS: Casos reales de PYMES
const casosReales = [
  {
    title: "Peluquería",
    description: "Reservas automáticas por WhatsApp. Menos llamadas y más tiempo para atender."
  },
  {
    title: "Restaurante",
    description: "Menú digital y reservas automáticas. Gestión fácil y sin errores."
  },
  {
    title: "Tienda de ropa",
    description: "Web profesional + chatbot de dudas. Más ventas y atención inmediata."
  },
  {
    title: "Gimnasio",
    description: "Recordatorios automáticos de renovaciones. Clientes informados y menos incidencias."
  }
];

