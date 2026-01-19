import { Metadata } from "next";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Servicios - Sineratics",
  description: "Servicios para PYMES (web, correo, formularios, automatización simple) y empresas (integraciones ERP, IoT industrial, automatización, IA, Headless CMS, arquitectura, Docker).",
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
              Soluciones adaptadas a cada tipo de empresa. Desde automatizaciones simples hasta integraciones complejas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== SERVICIOS PARA PYMES ========== */}
      
      {/* Separador visual */}
      <section className="py-12 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Servicios para PYMES</h2>
          <p className="text-gray-300 mt-2">Soluciones simples, efectivas y asequibles</p>
        </div>
      </section>

      {/* Frase introductoria PYMES */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Ideal para peluquerías, restaurantes, tiendas y gimnasios que quieren ahorrar tiempo y ofrecer una mejor atención a sus clientes.
          </p>
        </div>
      </section>

      {/* 1. Automatización de WhatsApp */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Automatización de WhatsApp
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Respuestas automáticas, reservas y comunicación eficiente sin complicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Respuestas Automáticas"
              description="Configura respuestas automáticas para preguntas frecuentes. Atiende 24/7 sin esfuerzo."
            />
            <Card
              title="Sistema de Reservas"
              description="Gestiona citas y reservas directamente desde WhatsApp. Sin apps externas."
            />
            <Card
              title="Recordatorios"
              description="Envío automático de recordatorios de citas, pagos o renovaciones."
            />
          </div>
        </div>
      </section>

      {/* 2. Chatbots Inteligentes */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Chatbots Inteligentes
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Asistentes virtuales personalizados que resuelven dudas y atienden a tus clientes 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Atención al Cliente"
              description="Responde preguntas frecuentes, ayuda con pedidos y resuelve dudas comunes."
            />
            <Card
              title="Gestión de Reservas"
              description="Permite a tus clientes reservar, cancelar o modificar citas automáticamente."
            />
            <Card
              title="Personalizado"
              description="Adaptado a tu negocio: restaurante, peluquería, gimnasio, tienda, etc."
            />
          </div>
        </div>
      </section>

      {/* 3. Web Profesional */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Web Profesional
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Página web moderna, rápida y optimizada. Lista en 5–7 días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Diseño Moderno"
              description="Estética profesional, limpia y adaptada a tu sector. Responsive en todos los dispositivos."
            />
            <Card
              title="WhatsApp Incluido"
              description="Botón de contacto directo a WhatsApp. Tus clientes te escriben con un clic."
            />
            <Card
              title="SEO Básico"
              description="Optimización para aparecer en Google. Velocidad de carga rápida."
            />
          </div>
        </div>
      </section>

      {/* 4. Gestión del Negocio */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Gestión del Negocio
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Paneles sencillos para gestionar citas, stock, empleados o clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Gestión de Citas"
              description="Calendario digital, recordatorios automáticos, control de disponibilidad."
            />
            <Card
              title="Control de Stock"
              description="Inventario actualizado, alertas de stock bajo, control de entradas y salidas."
            />
            <Card
              title="Gestión de Empleados"
              description="Fichajes, turnos, vacaciones. Todo en un panel simple."
            />
          </div>
        </div>
      </section>

      {/* ========== SERVICIOS AVANZADOS ========== */}
      
      {/* Separador visual */}
      <section className="py-12 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Servicios Avanzados</h2>
          <p className="text-gray-300 mt-2">Para empresas medianas con necesidades técnicas complejas</p>
        </div>
      </section>

      {/* 5. Integraciones con ERPs */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Integraciones con ERPs y Sistemas Corporativos
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Conectamos tus aplicaciones con sistemas de gestión empresarial (ERPs, CRMs) mediante APIs, servicios web o conectores personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Sincronización de Datos"
              description="Clientes, pedidos, inventario, facturación. Sincronización bidireccional en tiempo real con tu sistema de gestión."
            />
            <Card
              title="Conectores Personalizados"
              description="Desarrollo de middleware y conectores a medida para integrar aplicaciones con tu ERP o sistema corporativo."
            />
          </div>
        </div>
      </section>

      {/* 6. Control de Accesos y Fichaje */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Sistemas de Control de Accesos y Fichaje
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Soluciones de control de presencia, gestión de accesos y fichaje integrados con tus sistemas de gestión y nómina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Control de Accesos"
              description="Gestión de permisos, registro de entradas/salidas, eventos en tiempo real y alertas automáticas."
            />
            <Card
              title="Sistema de Fichaje"
              description="Integración con nómina, dashboards de asistencia, reportes automáticos y control de turnos."
            />
          </div>
        </div>
      </section>

      {/* 7. Integraciones con sistemas industriales e IoT */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Integraciones con sistemas industriales e IoT
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Implementación de soluciones conectadas con sensores, cámaras, dispositivos IoT y sistemas industriales para mejorar procesos operativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Conectividad IoT"
              description="Integración con sensores, dispositivos IoT y sistemas industriales. Captura de datos en tiempo real."
            />
            <Card
              title="Monitorización y Control"
              description="Dashboards en tiempo real, alertas automatizadas y control remoto de dispositivos industriales."
            />
          </div>
        </div>
      </section>

      {/* 8. Automatización empresarial */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Automatización empresarial con workflows inteligentes
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Diseño e implementación de workflows y agentes automatizados que conectan sistemas, ejecutan tareas y optimizan procesos empresariales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card
              title="Workflows Complejos"
              description="Automatización visual de procesos: sincronización de datos, notificaciones, procesamiento entre sistemas."
            />
            <Card
              title="Agentes Inteligentes"
              description="Bots autónomos que ejecutan tareas: análisis de datos, toma de decisiones, procesamiento de información."
            />
            <Card
              title="Conexiones Multi-Sistema"
              description="Integración entre múltiples aplicaciones: Google Workspace, Slack, CRMs, ERPs y APIs personalizadas."
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
                <li>• Flexibilidad y adaptación a procesos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. IA aplicada a negocio */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              IA aplicada a negocio
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Inteligencia artificial que resuelve problemas reales: chatbots, análisis documental, predicciones.
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
            <h3 className="text-2xl font-bold mb-4 text-white">Casos de Éxito con IA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">Chatbot para E-commerce</h4>
                <p className="text-sm text-gray-300">
                  Reducción del 40% en tickets de soporte. Atención inmediata en 12 idiomas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Búsqueda Semántica en Documentación</h4>
                <p className="text-sm text-gray-300">
                  Empleados encuentran información 5x más rápido. Integrado en Headless CMS + MySQL.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Procesamiento de Facturas</h4>
                <p className="text-sm text-gray-300">
                  Automatización del 90% del proceso contable. Extracción automática de datos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Asistente Virtual Interno</h4>
                <p className="text-sm text-gray-300">
                  Consulta de políticas, procedimientos y FAQ. Disponible 24/7 sin intervención humana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Aplicaciones Fullstack con Headless CMS */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Aplicaciones Fullstack con Headless CMS
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Desarrollo completo de aplicaciones web con backend (headless CMS o APIs) y frontend moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card
              title="Angular / React / Vue"
              description="Frameworks modernos para interfaces reactivas, rápidas y mantenibles. Componentes reutilizables."
            />
            <Card
              title="Headless CMS / Backend"
              description="Backend con API REST/GraphQL, gestión de contenido y permisos. Adaptado al negocio."
            />
            <Card
              title="Apps Corporativas"
              description="Soluciones a medida: CRMs, ERPs ligeros, dashboards analíticos, portales de empleados."
            />
          </div>

          <div className="border-t border-[#e5e5e5] pt-8">
            <h3 className="text-xl font-semibold mb-4">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3">
              {["Angular", "React", "Vue", "Next.js", "Nuxt", "Headless CMS", "Node.js", "Express", "NestJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"].map((tech) => (
                <span key={tech} className="px-4 py-2 border border-[#e5e5e5] text-sm bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Arquitectura de Aplicaciones */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Arquitectura de Aplicaciones
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Diseño de sistemas robustos, escalables y preparados para crecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Diseño de Plataformas"
              description="Arquitectura completa desde cero: frontend, backend, base de datos, infraestructura. Diagramas y especificaciones técnicas."
            />
            <Card
              title="Escalabilidad"
              description="Aplicaciones preparadas para crecer: balanceo de carga, caché, CDN, optimización de consultas."
            />
            <Card
              title="Microservicios"
              description="Descomposición de monolitos en servicios independientes. Comunicación vía API Gateway, eventos."
            />
            <Card
              title="Auditoría Técnica"
              description="Análisis de arquitectura existente. Identificación de cuellos de botella y recomendaciones de mejora."
            />
          </div>
        </div>
      </section>

      {/* 12. Docker / Portainer */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-4">
              Docker, Portainer e Infraestructura
            </SectionTitle>
            <p className="text-lg text-gray-600 max-w-3xl">
              Contenerización, orquestación y gestión de infraestructura con Docker y Portainer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              title="Dockerización"
              description="Contenerización de aplicaciones con Docker + Docker Compose. Entornos reproducibles y portables."
            />
            <Card
              title="Gestión con Portainer"
              description="Panel de control visual para gestionar contenedores, redes, volúmenes. Deploy simplificado."
            />
            <Card
              title="CI/CD"
              description="Despliegues automáticos con GitHub Actions, GitLab CI. Rollback instantáneo en caso de error."
            />
            <Card
              title="Alta Disponibilidad"
              description="Configuración de balanceo de carga, replicación, backups automáticos. Monitorización 24/7."
            />
          </div>

          <div className="border border-[#e5e5e5] p-8 bg-white">
            <h3 className="text-2xl font-bold mb-6">Stack de Infraestructura</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">CONTENEDORES</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Docker</li>
                  <li>• Docker Compose</li>
                  <li>• Portainer</li>
                  <li>• Watchtower</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">SERVIDORES</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Nginx</li>
                  <li>• Traefik</li>
                  <li>• Apache</li>
                  <li>• Caddy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">CI/CD</h4>
                <ul className="space-y-1 text-sm">
                  <li>• GitHub Actions</li>
                  <li>• GitLab CI</li>
                  <li>• Jenkins</li>
                  <li>• Webhooks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">CLOUD</h4>
                <ul className="space-y-1 text-sm">
                  <li>• AWS</li>
                  <li>• DigitalOcean</li>
                  <li>• Hetzner</li>
                  <li>• On-premise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border border-[#e5e5e5] p-12 md:p-16 bg-white">
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

