import { Metadata } from "next";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Servicios - Sineratics",
  description: "Desarrollo web, integraciones empresariales, automatización n8n, inteligencia artificial y arquitectura de aplicaciones.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Servicios</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light">
              Soluciones tecnológicas integrales para empresas que buscan innovación, 
              eficiencia y transformación digital.
            </p>
          </FadeIn>
        </div>
      </section>

      {/*  Desarrollo Web */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Desarrollo Web
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Creamos aplicaciones web robustas, escalables y modernas que impulsan tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card
              title="Angular / React / Vue"
              description="Frameworks modernos para interfaces de usuario reactivas, rápidas y mantenibles. Componentes reutilizables y arquitectura escalable."
            />
            <Card
              title="Fullstack con Strapi"
              description="Backend headless CMS con Strapi. API REST/GraphQL, gestión de contenido, autenticación y permisos personalizados."
            />
            <Card
              title="Apps Corporativas"
              description="Soluciones a medida para gestión interna: CRMs, ERPs ligeros, dashboards analíticos, portales de empleados."
            />
          </div>

          <div className="border-t border-[#e5e5e5] pt-8">
            <h3 className="text-xl font-semibold mb-4">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3">
              {["Angular", "React", "Vue", "Next.js", "Nuxt", "Strapi", "Node.js", "Express", "NestJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"].map((tech) => (
                <span key={tech} className="px-4 py-2 border border-[#e5e5e5] text-sm bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B. Integraciones Empresariales */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Integraciones Empresariales
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Conectamos tus sistemas críticos para un flujo de datos unificado y eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              title="SAP (SOAP)"
              description="Integración con SAP vía protocolo SOAP. Sincronización bidireccional de datos: clientes, pedidos, inventario, facturación."
            />
            <Card
              title="Hikvision"
              description="Control de accesos, sistemas de fichaje, cámaras IP. API REST para eventos en tiempo real y gestión de dispositivos."
            />
            <Card
              title="MOVVO"
              description="Tracking de personas y maquinaria industrial. Geolocalización, alertas, analítica de movimientos y optimización de rutas."
            />
            <Card
              title="APIs Custom"
              description="Desarrollo de conectores personalizados para cualquier sistema: REST, GraphQL, SOAP, WebSockets, webhooks."
            />
          </div>

          <div className="bg-[#f5f5f5] p-8 border border-[#e5e5e5]">
            <h3 className="text-xl font-semibold mb-3">Casos de Uso</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sincronización automática de datos entre ERP y e-commerce</li>
              <li>• Integración de sistemas de fichaje con nómina</li>
              <li>• Dashboards unificados con datos de múltiples fuentes</li>
              <li>• Automatización de procesos inter-sistemas</li>
              <li>• Consolidación de datos para Business Intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* C. Automatización n8n */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Automatización con n8n
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Workflows inteligentes que automatizan procesos repetitivos y conectan tus herramientas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card
              title="Workflows"
              description="Automatización visual de procesos: sincronización de datos, notificaciones, procesamiento de archivos, scraping."
            />
            <Card
              title="Agentes Inteligentes"
              description="Bots autónomos que ejecutan tareas complejas: análisis de datos, toma de decisiones, respuestas automáticas."
            />
            <Card
              title="Conexiones Multi-Sistema"
              description="Integra más de 400 aplicaciones: Google Workspace, Slack, Notion, CRMs, bases de datos, APIs personalizadas."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#e5e5e5] p-6 bg-white">
              <h3 className="text-lg font-semibold mb-3">Ejemplos de Automatización</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lead capture de formularios web → CRM</li>
                <li>• Generación automática de informes PDF</li>
                <li>• Monitorización de precios competencia</li>
                <li>• Backup automático de datos críticos</li>
                <li>• Notificaciones inteligentes por Slack/Email</li>
              </ul>
            </div>
            <div className="border border-[#e5e5e5] p-6 bg-white">
              <h3 className="text-lg font-semibold mb-3">Beneficios</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ahorro de tiempo en tareas repetitivas</li>
                <li>• Reducción de errores humanos</li>
                <li>• Escalabilidad sin aumentar plantilla</li>
                <li>• ROI inmediato y medible</li>
                <li>• Flexibilidad total con low-code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* D. Inteligencia Artificial Aplicada */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Inteligencia Artificial Aplicada
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              IA que resuelve problemas reales de negocio. Desde chatbots hasta análisis documental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              title="IA Conversacional"
              description="Chatbots inteligentes con comprensión de contexto. Atención al cliente 24/7, soporte técnico automatizado."
            />
            <Card
              title="GPT-5 / Claude / Qwen"
              description="Integración de LLMs de última generación. Generación de contenido, análisis de texto, asistentes virtuales."
            />
            <Card
              title="Buscadores Naturales"
              description="Búsqueda semántica en bases de datos. Encuentra información por significado, no por palabras exactas."
            />
            <Card
              title="Chatbots Corporativos"
              description="Asistentes personalizados para tu empresa. Consulta de documentación, datos internos, procesos."
            />
            <Card
              title="Procesamiento de Documentos"
              description="Extracción automática de datos de PDFs, facturas, contratos. OCR + NLP para digitalización inteligente."
            />
            <Card
              title="Análisis Predictivo"
              description="Machine Learning para predicciones de negocio: demanda, churn, mantenimiento preventivo."
            />
          </div>

          <div className="bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Casos de Éxito con IA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Chatbot para E-commerce</h4>
                <p className="text-sm text-gray-300">
                  Reducción del 40% en tickets de soporte. Atención inmediata en 12 idiomas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Búsqueda Semántica en Documentación</h4>
                <p className="text-sm text-gray-300">
                  Empleados encuentran información 5x más rápido. Integrado en Strapi + MySQL.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Procesamiento de Facturas</h4>
                <p className="text-sm text-gray-300">
                  Automatización del 90% del proceso contable. Extracción automática de datos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Asistente Virtual Interno</h4>
                <p className="text-sm text-gray-300">
                  Consulta de políticas, procedimientos y FAQ. Disponible 24/7 sin intervención humana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. Arquitectura de Aplicaciones */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Arquitectura de Aplicaciones
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Diseñamos sistemas robustos, escalables y preparados para crecer con tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              title="Diseño de Plataformas"
              description="Arquitectura completa desde cero: frontend, backend, base de datos, infraestructura. Diagramas, especificaciones técnicas."
            />
            <Card
              title="Escalabilidad"
              description="Aplicaciones preparadas para crecer: balanceo de carga, caché, CDN, optimización de consultas, arquitectura distribuida."
            />
            <Card
              title="Microservicios"
              description="Descomposición de monolitos en servicios independientes. Comunicación vía API Gateway, eventos, message queues."
            />
            <Card
              title="Dockerización"
              description="Contenerización con Docker + Docker Compose. Gestión con Portainer. CI/CD, despliegues automáticos, rollback."
            />
          </div>

          <div className="border border-[#e5e5e5] p-8 bg-white">
            <h3 className="text-2xl font-bold mb-6">Stack Recomendado</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">FRONTEND</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Angular 18+</li>
                  <li>• React 19+</li>
                  <li>• Next.js 15+</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">BACKEND</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Strapi 5+</li>
                  <li>• Node.js</li>
                  <li>• NestJS</li>
                  <li>• Express</li>
                  <li>• REST / GraphQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">BASE DE DATOS</h4>
                <ul className="space-y-1 text-sm">
                  <li>• MySQL</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis (caché)</li>
                  <li>• Elasticsearch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">INFRAESTRUCTURA</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Docker</li>
                  <li>• Portainer</li>
                  <li>• Nginx</li>
                  <li>• GitHub Actions</li>
                  <li>• AWS / DigitalOcean</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border border-[#e5e5e5] p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Necesitas una solución específica?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Cuéntanos tu caso. Analizamos tus necesidades y te proponemos la mejor solución técnica.
            </p>
            <Button href="/contacto">
              Solicitar consulta gratuita
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


