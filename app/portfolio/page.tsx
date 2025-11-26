import { Metadata } from "next";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Portfolio - Sineratics",
  description: "Casos reales de éxito: integraciones, automatizaciones e IA aplicada a negocio.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Portfolio</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light">
              Proyectos reales que demuestran nuestra capacidad técnica y 
              experiencia en integraciones complejas, automatización e IA.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Proyecto Destacado: KH Lloreda */}
      <section className="py-16 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-gray-400 mb-2 block">PROYECTO DESTACADO</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">KH Lloreda</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Plataforma corporativa completa con integraciones múltiples, 
                automatización de procesos e inteligencia artificial conversacional.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Alcance</h3>
                  <p className="text-sm text-gray-400">
                    Web corporativa responsive, panel de administración, integraciones 
                    con sistemas legacy, chatbot IA, automatizaciones n8n.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stack Tecnológico</h3>
                  <p className="text-sm text-gray-400">
                    Angular 18 + Strapi 5 + MySQL + Docker + n8n + GPT-5
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Resultados</h3>
                  <p className="text-sm text-gray-400">
                    • Reducción del 60% en tiempo de gestión administrativa<br/>
                    • Automatización de 15 procesos críticos<br/>
                    • Atención al cliente 24/7 con IA<br/>
                    • 100% de disponibilidad desde el lanzamiento
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-black p-8 border border-white">
              <h3 className="text-2xl font-bold mb-6">Tecnologías utilizadas</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Angular", "TypeScript", "Strapi", "Node.js", "MySQL", "Docker", "Portainer", "n8n", "GPT-5", "Nginx", "REST API", "WebSockets"].map((tech) => (
                  <div key={tech} className="text-center p-3 border border-[#e5e5e5] text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-4xl font-bold mb-12">
            Integraciones Empresariales
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SAP */}
            <div className="border border-[#e5e5e5] p-8 hover:border-black transition-colors">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">INTEGRACIÓN</span>
              <h3 className="text-2xl font-bold mb-4">SAP (SOAP)</h3>
              <p className="text-gray-600 mb-6">
                Integración bidireccional con SAP ERP para sincronización automática 
                de clientes, pedidos, facturas e inventario.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Desafío</h4>
                  <p className="text-sm text-gray-600">
                    Conectar e-commerce moderno con SAP legacy vía protocolo SOAP. 
                    Manejo de autenticación compleja y transformación de datos.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Solución</h4>
                  <p className="text-sm text-gray-600">
                    Middleware en Node.js con manejo de colas (Bull/Redis). 
                    Sincronización cada 5 minutos con reintentos automáticos.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Resultado</h4>
                  <p className="text-sm text-gray-600">
                    99.9% de éxito en sincronización. Reducción de errores manuales 
                    del 95%. Dashboards de monitorización en tiempo real.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Node.js</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">SOAP</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Redis</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Bull</span>
              </div>
            </div>

            {/* Hikvision */}
            <div className="border border-[#e5e5e5] p-8 hover:border-black transition-colors">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">INTEGRACIÓN</span>
              <h3 className="text-2xl font-bold mb-4">Hikvision - Control de Accesos</h3>
              <p className="text-gray-600 mb-6">
                Sistema completo de fichajes y control de accesos integrado 
                con plataforma de gestión de RRHH.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Desafío</h4>
                  <p className="text-sm text-gray-600">
                    Capturar eventos de dispositivos Hikvision en tiempo real y 
                    sincronizar con sistema de nómina. Gestión de 50+ dispositivos.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Solución</h4>
                  <p className="text-sm text-gray-600">
                    API REST + WebSockets para eventos en tiempo real. 
                    Dashboard Angular con visualización de accesos en vivo.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Resultado</h4>
                  <p className="text-sm text-gray-600">
                    Automatización completa de fichajes. Alertas de anomalías. 
                    Informes mensuales automáticos para nómina.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Angular</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">WebSockets</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">REST API</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">MySQL</span>
              </div>
            </div>

            {/* MOVVO */}
            <div className="border border-[#e5e5e5] p-8 hover:border-black transition-colors">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">INTEGRACIÓN</span>
              <h3 className="text-2xl font-bold mb-4">MOVVO - Tracking Industrial</h3>
              <p className="text-gray-600 mb-6">
                Seguimiento en tiempo real de personas y maquinaria en entorno 
                industrial con alertas inteligentes.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Desafío</h4>
                  <p className="text-sm text-gray-600">
                    Procesar miles de posiciones por minuto. Detectar patrones 
                    anómalos. Generar alertas contextuales.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Solución</h4>
                  <p className="text-sm text-gray-600">
                    Backend con procesamiento de streams. Algoritmos de detección 
                    de anomalías. Dashboard con mapas en tiempo real.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Resultado</h4>
                  <p className="text-sm text-gray-600">
                    Reducción de incidentes del 30%. Optimización de rutas. 
                    Analítica histórica para mejora de procesos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Node.js</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">PostgreSQL</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Maps API</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">React</span>
              </div>
            </div>

            {/* APIs Custom */}
            <div className="border border-[#e5e5e5] p-8 hover:border-black transition-colors">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">INTEGRACIÓN</span>
              <h3 className="text-2xl font-bold mb-4">APIs Custom Multi-Sistema</h3>
              <p className="text-gray-600 mb-6">
                Desarrollo de conectores personalizados para unificar datos 
                de múltiples fuentes heterogéneas.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Desafío</h4>
                  <p className="text-sm text-gray-600">
                    Cliente con 8 sistemas diferentes (CRM, ERP, BBDD legacy, Excel, etc). 
                    Necesidad de dashboard unificado.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Solución</h4>
                  <p className="text-sm text-gray-600">
                    API Gateway centralizada. Conectores específicos por sistema. 
                    Caché inteligente. Sincronización programada con n8n.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Resultado</h4>
                  <p className="text-sm text-gray-600">
                    Vista única de cliente 360º. Informes automáticos. 
                    Ahorro de 20h/semana en gestión manual de datos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Node.js</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">n8n</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Redis</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automatización n8n */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-4xl font-bold mb-12">
            Automatización con n8n
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Workflows Multi-Sistema"
              description="Automatización de 50+ workflows complejos: desde lead capture hasta facturación. Sincronización CRM ↔ ERP ↔ Facturación ↔ Correo."
            />
            <Card
              title="Agentes Inteligentes"
              description="Bots que procesan emails, extraen información, toman decisiones y actualizan sistemas. Procesamiento de 1000+ documentos/día."
            />
            <Card
              title="Monitorización Activa"
              description="Alertas automáticas de caídas de sistemas, anomalías en datos, umbrales superados. Notificaciones vía Slack/Email/SMS."
            />
            <Card
              title="Backup Automático"
              description="Respaldo diario de bases de datos críticas a múltiples ubicaciones. Verificación de integridad. Notificaciones de estado."
            />
            <Card
              title="Generación de Informes"
              description="Informes PDF automáticos con datos de múltiples fuentes. Envío programado a stakeholders. Dashboards actualizados en vivo."
            />
            <Card
              title="Scraping & Análisis"
              description="Monitorización de competencia, precios, disponibilidad. Análisis de tendencias. Alertas de cambios relevantes."
            />
          </div>

          <div className="mt-12 p-8 bg-white border border-[#e5e5e5]">
            <h3 className="text-2xl font-bold mb-4">Caso Real: Automatización Completa de Ventas</h3>
            <p className="text-gray-600 mb-6">
              Cliente con proceso manual de ventas: lead en web → email manual → CRM → Excel → Factura → Correo cliente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">ANTES</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2-3 horas por pedido procesado</li>
                  <li>• Errores de transcripción frecuentes</li>
                  <li>• Clientes esperando 24-48h respuesta</li>
                  <li>• Datos dispersos en 5 sistemas</li>
                  <li>• Informes manuales cada semana</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-500">DESPUÉS</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 5 minutos automático end-to-end</li>
                  <li>• 0 errores de transcripción</li>
                  <li>• Respuesta inmediata al cliente</li>
                  <li>• Datos unificados en tiempo real</li>
                  <li>• Informes automáticos diarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos IA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-4xl font-bold mb-12">
            Inteligencia Artificial Aplicada
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#e5e5e5] p-8">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">IA</span>
              <h3 className="text-2xl font-bold mb-4">Chatbot GPT-5 en Strapi</h3>
              <p className="text-gray-600 mb-4">
                Asistente conversacional integrado en CMS corporativo. Consulta de 
                documentación, procedimientos internos y FAQ.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Búsqueda semántica en 10.000+ documentos</li>
                <li>• Respuestas contextuales en lenguaje natural</li>
                <li>• Reducción del 60% en tickets de soporte</li>
                <li>• Disponible 24/7 sin intervención humana</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">GPT-5</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Strapi</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">RAG</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Vector DB</span>
              </div>
            </div>

            <div className="border border-[#e5e5e5] p-8">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">IA</span>
              <h3 className="text-2xl font-bold mb-4">Procesamiento de Facturas con IA</h3>
              <p className="text-gray-600 mb-4">
                Extracción automática de datos de facturas en PDF. OCR + NLP 
                para digitalización y clasificación inteligente.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Procesamiento de 500+ facturas/mes</li>
                <li>• 95% de precisión en extracción</li>
                <li>• Validación automática contra pedidos</li>
                <li>• Integración directa con contabilidad</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Claude</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">OCR</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Python</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">n8n</span>
              </div>
            </div>

            <div className="border border-[#e5e5e5] p-8">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">IA</span>
              <h3 className="text-2xl font-bold mb-4">Buscador Semántico Corporativo</h3>
              <p className="text-gray-600 mb-4">
                Motor de búsqueda que entiende preguntas en lenguaje natural 
                sobre bases de datos corporativas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• "¿Cuántos pedidos en Q1 2024?" → SQL automático</li>
                <li>• Búsqueda por significado, no keywords</li>
                <li>• Acceso segmentado por permisos de usuario</li>
                <li>• 10x más rápido que búsqueda manual</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">OpenAI</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">MySQL</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Embeddings</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Strapi</span>
              </div>
            </div>

            <div className="border border-[#e5e5e5] p-8">
              <span className="text-xs font-semibold text-gray-500 mb-2 block">IA</span>
              <h3 className="text-2xl font-bold mb-4">Análisis Predictivo de Mantenimiento</h3>
              <p className="text-gray-600 mb-4">
                Machine Learning para predecir fallos en maquinaria industrial 
                antes de que ocurran.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Análisis de sensores IoT en tiempo real</li>
                <li>• Predicción de fallos con 7 días de antelación</li>
                <li>• Reducción del 40% en paradas no planificadas</li>
                <li>• Optimización de rutas de mantenimiento</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">Python</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">ML</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">IoT</span>
                <span className="text-xs px-3 py-1 border border-[#e5e5e5] bg-[#f5f5f5]">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Arquitectura e Infraestructura</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Dockerización Completa"
              description="Migración de aplicaciones monolíticas a arquitectura dockerizada. 20+ contenedores orquestados con Docker Compose. Gestión con Portainer."
            />
            <Card
              title="CI/CD Automatizado"
              description="Pipelines completos con GitHub Actions. Deploy automático a staging/production. Tests automáticos, rollback inmediato si fallo."
            />
            <Card
              title="Alta Disponibilidad"
              description="Arquitectura con balanceo de carga, failover automático, backups incrementales cada 6 horas. SLA 99.9% de uptime."
            />
            <Card
              title="Monitorización 24/7"
              description="Stack de observabilidad: logs centralizados, métricas en tiempo real, alertas inteligentes. Dashboards Grafana + Prometheus."
            />
          </div>

          <div className="mt-12 bg-white border border-[#e5e5e5] p-8">
            <h3 className="text-2xl font-bold mb-6">Stack de Infraestructura</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Docker", "Portainer", "Nginx", "GitHub Actions", "Let's Encrypt", "Grafana", "Prometheus", "Redis", "PostgreSQL", "MySQL", "MongoDB", "ElasticSearch"].map((tech) => (
                <div key={tech} className="text-center p-4 border border-[#e5e5e5]">
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border border-[#e5e5e5] p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Tienes un proyecto similar?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Cuéntanos tu caso. Analizamos viabilidad técnica, estimamos plazos 
              y te proponemos una solución realista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto">
                Consulta gratuita
              </Button>
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


