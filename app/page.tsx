import Button from "@/components/Button";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO PRINCIPAL (PYMES) */}
      <section className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="sineratics-grid-bg"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Tecnología útil para tu negocio. <span className="highlight-blue">Simple</span>. Rápida. Que funciona.
          </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light">
                Digitalizamos tu empresa con soluciones prácticas que ahorran tiempo, automatizan tareas y atraen más clientes.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Button href="/contacto">
                Cuéntanos tu caso
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. COSAS QUE RESOLVEMOS (PYMES) */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Esto es lo que nos traen muchas PYMES (y lo solucionamos)
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl">
              Problemas cotidianos que se pueden ordenar, arreglar y dejar estables sin meterse en líos técnicos.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonProblems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 50}>
                <Card title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS PARA PYMES */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Servicios para pequeñas empresas
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Soluciones prácticas para el día a día. Lo importante: que funcione y que te quite trabajo.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pymeSolutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 50}>
                <Card
                  title={solution.title}
                  description={solution.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PACKS */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4" align="center">
              Empezar es más fácil con un pack
            </SectionTitle>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto text-center">
              Packs estándar para resolver lo más habitual. Si tu caso es especial, lo planteamos por fases.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {packs.map((pack, index) => (
              <FadeIn key={pack.title} delay={index * 50}>
                <div className="border border-[#e5e5e5] bg-white p-8 transition-premium card-hover">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{pack.title}</h3>
                    <div className="text-4xl font-bold text-black mb-1">{pack.price}</div>
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

      {/* 5. CASOS REALES DE PYMES */}
      <section className="py-24 px-6 lg:px-8 section-divider">
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

      {/* 6. POR QUÉ SINERATICS */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-16" align="center">
              Por qué trabajar con nosotros
            </SectionTitle>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={100}>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 mr-4"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. CTA SIGUIENTE NIVEL */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="border border-[#e5e5e5] p-12 md:p-20 text-center transition-premium hover:shadow-premium">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Tienes un problema concreto y no sabes por dónde empezar?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Cuéntanos tu caso y proponemos el camino más simple para resolverlo.
              </p>
              <Button href="/contacto">
                Pedir una propuesta clara
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      </main>
  );
}

// DATOS: Problemas comunes (PYMES)
const commonProblems = [
  {
    title: "Correo que no llega / va a spam",
    description: "Revisamos dominio y configuración del correo para dejarlo estable y profesional."
  },
  {
    title: "Web que existe pero no genera contactos",
    description: "Mejoramos mensaje, estructura y llamadas a la acción para que el cliente te escriba."
  },
  {
    title: "Formularios que fallan o se pierden",
    description: "Configuramos formularios fiables y avisos para que no se escape ninguna solicitud."
  },
  {
    title: "Demasiada tarea repetitiva",
    description: "Automatizaciones simples (sin humo) para ahorrar tiempo en el día a día."
  }
];

// DATOS: Soluciones para PYMES
const pymeSolutions = [
  {
    title: "Web que convierte",
    description: "Web clara, rápida y enfocada a contacto · WhatsApp, llamada y formulario visibles · Mensaje directo"
  },
  {
    title: "Correo y dominios",
    description: "Configuración correcta · Evitar spam · Cuentas y dispositivos bien conectados · Soporte y estabilidad"
  },
  {
    title: "Formularios y captación",
    description: "Solicitudes que llegan · Organización básica de leads · Avisos y seguimiento · Menos pérdidas"
  },
  {
    title: "Automatizaciones simples",
    description: "Recordatorios y avisos · Respuestas tipo · Tareas repetitivas · Integración ligera entre herramientas"
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
    description: "Revisión y configuración de dominio/correo para evitar problemas típicos (spam, DNS, cuentas)."
  },
  {
    title: "Captación y formularios",
    price: "Desde 290€",
    description: "Formularios fiables, avisos internos y organización básica para responder más rápido."
  },
  {
    title: "Automatización simple",
    price: "Desde 390€",
    description: "Automatizamos tareas repetitivas con un flujo simple y mantenible (según herramientas)."
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

// DATOS: Por qué trabajar con nosotros
const reasons = [
  "Trato directo, claro y sin tecnicismos innecesarios.",
  "Soluciones simples que realmente ayudan en el día a día.",
  "Resultados rápidos, medibles y asequibles.",
  "Tecnología profesional hecha fácil.",
  "Si tu negocio crece, nosotros crecemos contigo."
];
