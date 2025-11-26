import Button from "@/components/Button";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="sineratics-grid-bg"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight hero-title">
                Consultoría IT y<br />Automatización<br /><span className="highlight-blue">Inteligente</span>
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light">
                Desarrollo, integraciones corporativas, n8n e inteligencia artificial aplicada a negocio.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Button href="/contacto">
                Contactar
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Servicios
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Soluciones tecnológicas integrales para empresas que buscan innovación y eficiencia.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <FadeIn key={service.title} delay={index * 50}>
                <Card
                  title={service.title}
                  description={service.description}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 text-center">
              <Button href="/servicios" variant="secondary">
                Ver todos los servicios
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 lg:px-8 section-divider tech-section">
        {/* Technical Microgrid */}
        <div className="tech-microgrid"></div>
        
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4" align="center">
              Tecnologías
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
              Stack tecnológico moderno y probado en producción.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <FadeIn key={tech} delay={index * 20}>
                <div className="flex items-center justify-center p-6 border border-[#e5e5e5] bg-white tech-chip">
                  <span className="text-sm font-medium text-center">{tech}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f5] section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Casos Reales
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Proyectos destacados que demuestran nuestra experiencia técnica.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0}>
              <Card
                title="KH Lloreda"
                description="Web corporativa + integraciones complejas + IA conversacional. Stack completo: Angular + Strapi + MySQL + Docker + n8n."
                className="md:col-span-2"
              />
            </FadeIn>
            <FadeIn delay={100}>
              <Card
                title="Integración SAP"
                description="Conexión vía SOAP para sincronización de datos empresariales en tiempo real. Automatización de procesos de negocio."
              />
            </FadeIn>
            <FadeIn delay={150}>
              <Card
                title="Hikvision - Control de Accesos"
                description="Sistema de fichajes y control de accesos integrado con plataforma corporativa. API REST + WebSockets."
              />
            </FadeIn>
            <FadeIn delay={200}>
              <Card
                title="MOVVO - Tracking Industrial"
                description="Seguimiento de personas y maquinaria en tiempo real. Dashboard de analítica y alertas automatizadas."
              />
            </FadeIn>
            <FadeIn delay={250}>
              <Card
                title="Automatización n8n"
                description="Workflows complejos para sincronización multi-sistema. Agentes inteligentes para procesamiento de datos."
              />
            </FadeIn>
            <FadeIn delay={300}>
              <Card
                title="IA en Strapi"
                description="Integración de GPT-5 en CMS. Búsqueda semántica, generación de contenido y asistente conversacional."
              />
            </FadeIn>
            <FadeIn delay={350}>
              <Card
                title="Infraestructura Docker"
                description="Arquitectura dockerizada completa con Portainer. CI/CD, escalabilidad y alta disponibilidad."
              />
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="mt-12 text-center">
              <Button href="/portfolio" variant="secondary">
                Ver portfolio completo
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cómo Trabajamos Section */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4" align="center">
              Cómo trabajamos
            </SectionTitle>
            <p className="text-lg text-gray-600 mb-20 text-center max-w-2xl mx-auto">
              Metodología clara, eficiente y sin complejidades innecesarias.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0}>
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black opacity-10">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Análisis técnico</h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluación exhaustiva del caso y arquitectura actual. Identificamos problemas 
                  reales, no síntomas. Documentamos todo.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black opacity-10">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Diseño de solución</h3>
                <p className="text-gray-600 leading-relaxed">
                  Propuesta clara, escalable y sin complejidad innecesaria. Stack adecuado al problema. 
                  Estimaciones realistas de tiempo y coste.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black opacity-10">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Implementación y automatización</h3>
                <p className="text-gray-600 leading-relaxed">
                  Desarrollo iterativo con entregas parciales. Conexión de sistemas, 
                  automatización de procesos y puesta en producción controlada.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 section-divider">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="border border-[#e5e5e5] p-12 md:p-20 text-center transition-premium hover:shadow-premium">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Solicita una llamada gratuita de valoración tecnológica. Analizamos tu caso y te proponemos soluciones concretas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contacto">
                  Solicitar consulta gratuita
                </Button>
                <Button href="/sobre-nosotros" variant="secondary">
                  Conocer más sobre nosotros
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      </main>
  );
}

const servicesData = [
  {
    title: "Desarrollo Web",
    description: "Aplicaciones web fullstack con Angular, React, Vue. Backend con Strapi y Node.js. Soluciones corporativas a medida."
  },
  {
    title: "Integraciones Empresariales",
    description: "Conectamos tus sistemas: SAP (SOAP), Hikvision, MOVVO, APIs custom. Sincronización de datos en tiempo real."
  },
  {
    title: "Automatización n8n",
    description: "Workflows inteligentes, agentes autónomos y conexiones multi-sistema. Optimiza procesos sin código."
  },
  {
    title: "Inteligencia Artificial",
    description: "IA conversacional, integración GPT-5/Sonnet/Qwen, buscadores naturales, chatbots corporativos y procesamiento de documentos."
  },
  {
    title: "Arquitectura de Aplicaciones",
    description: "Diseño escalable, microservicios, dockerización con Portainer. Stack completo: Angular + Strapi + MySQL + Docker."
  },
  {
    title: "Consultoría Tecnológica",
    description: "Asesoramiento estratégico, auditorías técnicas, modernización de infraestructura y transformación digital."
  },
];

const technologies = [
  "Angular",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Strapi",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Portainer",
  "n8n",
  "GPT-5",
  "Claude",
  "TypeScript",
  "JavaScript",
  "Python",
  "SAP",
  "REST API",
];
