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
                Hablar con un experto
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SOLUCIONES PARA PYMES */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Soluciones para pequeñas empresas
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Digitalizamos tu negocio sin complicaciones. Resultados reales desde el primer día.
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

      {/* 3. PACKS RÁPIDOS Y ASEQUIBLES */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4" align="center">
              Packs con precio cerrado
            </SectionTitle>
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
                Consultar disponibilidad
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. CASOS REALES DE PYMES */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
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

      {/* 5. POR QUÉ SINERATICS */}
      <section className="py-24 px-6 lg:px-8 section-divider">
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

      {/* 6. INTEGRACIONES AVANZADAS (EMPRESAS MEDIANAS) */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider tech-section">
        {/* Technical Microgrid */}
        <div className="tech-microgrid"></div>
        
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Integraciones avanzadas y proyectos técnicos
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl">
              También trabajamos con empresas que necesitan soluciones técnicas más completas.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCapabilities.map((capability, index) => (
              <FadeIn key={capability.title} delay={index * 30}>
                <div className="bg-white border border-[#e5e5e5] p-6">
                  <h3 className="font-semibold mb-2 text-base">{capability.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12">
              <Button href="/servicios" variant="secondary">
                Ver capacidades técnicas completas
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA SIGUIENTE NIVEL */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="border border-[#e5e5e5] p-12 md:p-20 text-center transition-premium hover:shadow-premium">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Quieres llevar tu negocio al siguiente nivel?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Cuéntame tu caso y te propongo una solución clara, rápida y sin compromiso.
              </p>
              <Button href="/contacto">
                Solicitar consulta rápida
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      </main>
  );
}

// DATOS: Soluciones para PYMES
const pymeSolutions = [
  {
    title: "Automatización de WhatsApp",
    description: "Respuestas automáticas · Confirmaciones y recordatorios · Sistema de reservas · Atención 24/7 sin esfuerzo"
  },
  {
    title: "Chatbots Inteligentes",
    description: "Resuelven dudas frecuentes · Gestionan reservas · Ayudan a tus clientes 24/7 · Personalizados para tu negocio"
  },
  {
    title: "Web Profesional en 5–7 días",
    description: "Rápida, moderna y optimizada · Botón de WhatsApp incluido · Contenido claro y profesional · SEO básico de visibilidad"
  },
  {
    title: "Gestión de negocio",
    description: "Calendarios y citas · Control de stock · Gestión sencilla de empleados · Paneles adaptados a tu día a día"
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

// DATOS: Por qué trabajar con nosotros
const reasons = [
  "Trato directo, claro y sin tecnicismos innecesarios.",
  "Soluciones simples que realmente ayudan en el día a día.",
  "Resultados rápidos, medibles y asequibles.",
  "Tecnología profesional hecha fácil.",
  "Si tu negocio crece, nosotros crecemos contigo."
];

// DATOS: Integraciones avanzadas (empresas medianas)
const advancedCapabilities = [
  {
    title: "Integración SAP (SOAP)",
    description: "Conexión bidireccional con sistemas SAP. Sincronización de clientes, pedidos, inventario y facturación en tiempo real."
  },
  {
    title: "Integración Hikvision / control de accesos",
    description: "Sistemas de fichajes y control de accesos integrados. API REST, WebSockets y gestión de eventos."
  },
  {
    title: "Integración MOVVO / tracking industrial",
    description: "Seguimiento de personas y maquinaria en tiempo real. Dashboard de analítica y alertas automatizadas."
  },
  {
    title: "APIs multi-sistema",
    description: "Integraciones REST/SOAP con sistemas legacy y modernos. Middleware personalizado y orquestación de datos."
  },
  {
    title: "Automatización avanzada con n8n",
    description: "Workflows complejos, agentes autónomos, sincronización multi-sistema y procesamiento de datos masivos."
  },
  {
    title: "IA aplicada a negocio",
    description: "GPT-5, Claude Sonnet, Qwen. Chatbots corporativos, búsqueda semántica, procesamiento de documentos y asistentes IA."
  },
  {
    title: "Aplicaciones fullstack con Strapi",
    description: "Backend headless CMS con Strapi. API REST/GraphQL, autenticación, permisos y gestión de contenido avanzada."
  },
  {
    title: "Arquitectura de aplicaciones",
    description: "Diseño de arquitecturas escalables. Microservicios, APIs robustas, patrones de diseño y documentación técnica."
  },
  {
    title: "Docker, Portainer e infraestructura",
    description: "Dockerización completa, Portainer, CI/CD, orquestación de contenedores, escalabilidad y alta disponibilidad."
  }
];
