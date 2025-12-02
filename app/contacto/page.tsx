"use client";

import { useState } from "react";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/FadeIn";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Aquí iría la lógica de envío real (ej: fetch a API endpoint)
    // Por ahora simularemos un envío exitoso
    setTimeout(() => {
      console.log("Formulario enviado:", formData);
      setStatus("success");
      setFormData({
        nombre: "",
        email: "",
        empresa: "",
        telefono: "",
        mensaje: "",
      });
      
      // Resetear estado después de 3 segundos
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contacto</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-gray-600 max-w-3xl font-light mb-8">
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a 
                href="https://wa.me/34636059477"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-sm font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) bg-black text-white hover:bg-blue-primary hover:text-white hover:border-blue-primary border border-black hover:shadow-lg"
              >
                Hablar por WhatsApp
              </a>
              <a 
                href="tel:+34636059477"
                className="inline-block px-8 py-3 text-sm font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) bg-transparent text-black border border-[#e5e5e5] hover:border-blue-primary hover:text-blue-primary hover:bg-blue-primary/5"
              >
                Llamar por teléfono
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div>
              <SectionTitle className="text-3xl font-bold mb-8">
                Solicita una consulta gratuita
              </SectionTitle>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-black focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-black focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-black focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold mb-2">
                    Teléfono <span className="font-normal text-gray-500">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-black focus:outline-none transition-colors"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#e5e5e5] focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto: qué necesitas, qué problema quieres resolver, plazos estimados..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-4 bg-black text-white text-sm">
                    ✓ Mensaje enviado correctamente. Nos pondremos en contacto en menos de 24h.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                    ✗ Error al enviar el mensaje. Por favor, intenta de nuevo o escríbenos a info@sineratics.com
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </Button>

                <p className="text-xs text-gray-500">
                  * Campos obligatorios. Tus datos serán tratados con total confidencialidad 
                  según nuestra política de privacidad.
                </p>
              </form>
            </div>

            {/* Info de Contacto */}
            <div>
              <div className="bg-[#f5f5f5] p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Email</h4>
                    <a href="mailto:info@sineratics.com" className="text-lg hover:opacity-70 transition-opacity">
                      info@sineratics.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Teléfono</h4>
                    <a href="tel:+34XXXXXXXXX" className="text-lg hover:opacity-70 transition-opacity">
                      +34 XXX XXX XXX
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Horario</h4>
                    <p className="text-sm text-gray-600">
                      Lunes a Viernes<br />
                      9:00 - 18:00 (CET)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#e5e5e5] p-8">
                <h3 className="text-xl font-bold mb-4">¿Qué puedes esperar?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Respuesta en 24h</p>
                      <p className="text-sm text-gray-600">
                        Analizamos tu mensaje y te respondemos con una primera valoración.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Llamada de descubrimiento</p>
                      <p className="text-sm text-gray-600">
                        30-45 minutos para entender tu proyecto en profundidad.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Propuesta técnica</p>
                      <p className="text-sm text-gray-600">
                        Documentación detallada con solución, stack, plazos y presupuesto.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-black text-white">
                <h3 className="text-lg font-bold mb-3 text-white">¿Prefieres hablar directamente?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Agenda una videollamada de 30 minutos para hablar de tu proyecto sin compromiso.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-white text-black px-6 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Agendar llamada →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 px-6 lg:px-8 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle className="text-3xl font-bold mb-12">
            Preguntas frecuentes
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Cuánto cuesta un proyecto?</h3>
              <p className="text-sm text-gray-600">
                Depende del alcance y complejidad. Proyectos desde 5.000€ hasta 50.000€+. 
                Te damos una estimación precisa después de la llamada de descubrimiento.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Cuánto tarda un desarrollo?</h3>
              <p className="text-sm text-gray-600">
                Proyectos pequeños: 4-8 semanas. Proyectos medios: 2-4 meses. 
                Proyectos complejos: 4-6 meses. Siempre con entregas parciales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Trabajáis con startups?</h3>
              <p className="text-sm text-gray-600">
                Sí, pero principalmente con startups que ya tienen tracción o financiación. 
                Buscamos proyectos serios con viabilidad técnica clara.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Ofrecéis mantenimiento?</h3>
              <p className="text-sm text-gray-600">
                Sí, contratos de mantenimiento desde 500€/mes. Incluye: 
                actualizaciones, soporte técnico, monitorización y backup.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Qué incluye la consulta gratuita?</h3>
              <p className="text-sm text-gray-600">
                Análisis inicial de viabilidad, valoración técnica, propuesta de stack 
                recomendado, estimación de plazos y presupuesto orientativo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">¿Formáis a nuestro equipo?</h3>
              <p className="text-sm text-gray-600">
                Sí, incluido en todos los proyectos. Documentación completa, 
                sesiones de formación y transferencia de conocimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Otras formas de contacto */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle className="text-3xl font-bold mb-6" align="center">
            ¿No te gusta rellenar formularios?
          </SectionTitle>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lo entendemos. Escríbenos directamente por email o LinkedIn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@sineratics.com" 
              className="bg-black text-white px-8 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              info@sineratics.com
            </a>
            <a 
              href="#" 
              className="bg-white text-black border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


