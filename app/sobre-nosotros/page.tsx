import { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import Counter from "@/components/Counter";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Sineratics",
  description: "Consultoría IT especializada con visión estratégica y excelencia técnica.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Sobre Sineratics</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light">
              Consultoría IT que combina experiencia técnica con visión estratégica 
              para impulsar la transformación digital de tu empresa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Qué Somos */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle className="text-4xl md:text-5xl font-bold mb-6">
                Qué somos
              </SectionTitle>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sineratics es una <strong className="text-black font-semibold">consultoría IT especializada</strong> en 
                  desarrollo web fullstack, integraciones empresariales complejas, automatización 
                  de procesos y aplicación de inteligencia artificial a problemas reales de negocio.
                </p>
                <p>
                  Trabajamos con empresas que buscan <strong className="text-black font-semibold">soluciones técnicas sólidas</strong>, 
                  escalables y alineadas con sus objetivos estratégicos. No vendemos tecnología 
                  por venderla: analizamos, diseñamos e implementamos.
                </p>
                <p>
                  Nuestro enfoque es <strong className="text-black font-semibold">pragmático y orientado a resultados</strong>. 
                  Usamos el stack tecnológico que mejor se adapta a cada proyecto, sin dogmas ni modas pasajeras.
                </p>
              </div>
            </div>
            <div className="border border-[#e5e5e5] bg-white p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-6xl font-bold mb-2">
                    <Counter end={5} suffix="+" />
                  </h3>
                  <p className="text-sm text-gray-600">Años de experiencia</p>
                </div>
                <div>
                  <h3 className="text-6xl font-bold mb-2">
                    <Counter end={50} suffix="+" />
                  </h3>
                  <p className="text-sm text-gray-600">Proyectos completados</p>
                </div>
                <div>
                  <h3 className="text-6xl font-bold mb-2">
                    <Counter end={100} suffix="%" />
                  </h3>
                  <p className="text-sm text-gray-600">Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-gray-500 mb-2 block">VISIÓN</span>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-6">
              Ser el socio tecnológico de referencia
            </SectionTitle>
            <p className="text-xl text-gray-600 leading-relaxed">
              Aspiramos a ser reconocidos como <strong className="text-black font-semibold">el partner tecnológico de confianza</strong> para 
              empresas que necesitan integrar sistemas complejos, automatizar procesos críticos 
              y aplicar inteligencia artificial de forma práctica y medible.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mt-4">
              Queremos ser parte activa de la <strong className="text-black font-semibold">transformación digital industrial</strong>, 
              conectando el mundo físico con el digital mediante integraciones robustas, 
              IoT y analítica en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-gray-500 mb-2 block">MISIÓN</span>
            <SectionTitle className="text-4xl md:text-5xl font-bold mb-6">
              Resolver problemas complejos con tecnología simple
            </SectionTitle>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nuestra misión es <strong className="text-black font-semibold">simplificar lo complejo</strong>. Tomamos retos técnicos 
              difíciles y los convertimos en soluciones claras, mantenibles y escalables.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#e5e5e5] p-6">
                <h3 className="font-semibold mb-3">Para nuestros clientes</h3>
                <p className="text-sm text-gray-600">
                  Ofrecemos soluciones que realmente resuelven problemas de negocio, 
                  con ROI claro y métricas medibles.
                </p>
              </div>
              <div className="bg-white border border-[#e5e5e5] p-6">
                <h3 className="font-semibold mb-3">Para sus equipos</h3>
                <p className="text-sm text-gray-600">
                  Entregamos código limpio, documentado y transferible. 
                  Formamos, no generamos dependencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-gray-500 mb-2 block">VALORES</span>
            <h2 className="text-4xl md:text-5xl font-bold">Lo que nos define</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Excelencia Técnica"
              description="Código limpio, arquitecturas sólidas, mejores prácticas. No hacemos chapuzas. Cada proyecto es una obra bien hecha."
              hover={false}
            />
            <Card
              title="Transparencia Total"
              description="Sin letra pequeña, sin sorpresas. Presupuestos claros, comunicación constante, expectativas alineadas."
              hover={false}
            />
            <Card
              title="Pragmatismo"
              description="Usamos la tecnología que resuelve el problema, no la más de moda. Resultados antes que hype."
              hover={false}
            />
            <Card
              title="Compromiso"
              description="Cuando aceptamos un proyecto, nos comprometemos al 100%. Cumplimos plazos, presupuestos y requisitos."
              hover={false}
            />
            <Card
              title="Aprendizaje Continuo"
              description="El sector cambia rápido. Nos formamos constantemente para ofrecer siempre soluciones actuales."
              hover={false}
            />
            <Card
              title="Colaboración"
              description="Trabajamos codo con codo con tus equipos. Compartimos conocimiento y construimos juntos."
              hover={false}
            />
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-4xl md:text-5xl font-bold mb-12" align="center">
            Cómo trabajamos
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border-l-4 border-black p-6">
              <span className="text-sm font-semibold text-gray-500 mb-2 block">01</span>
              <h3 className="text-xl font-bold mb-3">Análisis</h3>
              <p className="text-sm text-gray-600">
                Entendemos tu negocio, tus procesos y tus objetivos. Identificamos el problema real.
              </p>
            </div>
            <div className="bg-white border-l-4 border-black p-6">
              <span className="text-sm font-semibold text-gray-500 mb-2 block">02</span>
              <h3 className="text-xl font-bold mb-3">Diseño</h3>
              <p className="text-sm text-gray-600">
                Arquitectura técnica, stack tecnológico, estimación realista. Sin promesas imposibles.
              </p>
            </div>
            <div className="bg-white border-l-4 border-black p-6">
              <span className="text-sm font-semibold text-gray-500 mb-2 block">03</span>
              <h3 className="text-xl font-bold mb-3">Desarrollo</h3>
              <p className="text-sm text-gray-600">
                Iteraciones cortas, demos frecuentes, feedback continuo. Vas viendo el progreso real.
              </p>
            </div>
            <div className="bg-white border-l-4 border-black p-6">
              <span className="text-sm font-semibold text-gray-500 mb-2 block">04</span>
              <h3 className="text-xl font-bold mb-3">Entrega</h3>
              <p className="text-sm text-gray-600">
                Documentación completa, formación al equipo, soporte post-lanzamiento. Todo cerrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Especialización */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra especialización
          </SectionTitle>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            No hacemos de todo. Nos especializamos en áreas donde podemos aportar máximo valor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Integraciones complejas</h3>
                  <p className="text-sm text-gray-600">
                    SAP, ERPs legacy, protocolos antiguos (SOAP), APIs con autenticación compleja.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">IoT industrial</h3>
                  <p className="text-sm text-gray-600">
                    Hikvision, MOVVO, sensores, maquinaria. Dashboards en tiempo real.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Automatización empresarial</h3>
                  <p className="text-sm text-gray-600">
                    n8n para workflows complejos. Agentes que toman decisiones autónomas.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">IA aplicada a negocio</h3>
                  <p className="text-sm text-gray-600">
                    LLMs integrados en aplicaciones. RAG sobre documentación corporativa.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Arquitecturas escalables</h3>
                  <p className="text-sm text-gray-600">
                    Docker, microservicios, CI/CD. Aplicaciones preparadas para crecer.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Fullstack moderno</h3>
                  <p className="text-sm text-gray-600">
                    Angular, React, Strapi, MySQL. Stack probado en producción.
                  </p>
                </div>
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
              ¿Quieres conocernos mejor?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Hablemos de tu proyecto. Sin compromiso, sin comerciales insistentes. 
              Solo una conversación técnica honesta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto">
                Agendar llamada
              </Button>
              <Button href="/portfolio" variant="secondary">
                Ver portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


