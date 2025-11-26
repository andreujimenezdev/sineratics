import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Sineratics",
  description: "Política de privacidad y protección de datos de Sineratics.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Política de Privacidad</h1>
          <p className="text-sm text-gray-500 mb-12">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Información General</h2>
              <p className="text-gray-600 mb-4">
                En Sineratics, nos tomamos muy en serio la privacidad y protección de tus datos personales. 
                Esta política explica cómo recopilamos, usamos y protegemos tu información.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Datos que Recopilamos</h2>
              <p className="text-gray-600 mb-4">Recopilamos la siguiente información:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de empresa</li>
                <li>Teléfono (opcional)</li>
                <li>Mensaje y consultas que nos envíes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Cómo Usamos tus Datos</h2>
              <p className="text-gray-600 mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Proporcionarte información sobre nuestros servicios</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Base Legal</h2>
              <p className="text-gray-600 mb-4">
                Procesamos tus datos personales basándonos en:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Tu consentimiento explícito al enviar el formulario</li>
                <li>Interés legítimo en gestionar consultas comerciales</li>
                <li>Cumplimiento de obligaciones contractuales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Compartir Información</h2>
              <p className="text-gray-600 mb-4">
                No vendemos, alquilamos ni compartimos tu información personal con terceros 
                excepto cuando sea necesario para prestar nuestros servicios o cuando la ley lo requiera.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Tus Derechos</h2>
              <p className="text-gray-600 mb-4">Según el RGPD, tienes derecho a:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar datos incorrectos o incompletos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:info@sineratics.com" className="underline">info@sineratics.com</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Seguridad</h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos 
                contra acceso no autorizado, pérdida o destrucción.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Nuestra web utiliza cookies técnicas necesarias para su funcionamiento. 
                No utilizamos cookies de seguimiento o publicidad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Cambios en esta Política</h2>
              <p className="text-gray-600 mb-4">
                Podemos actualizar esta política ocasionalmente. Te notificaremos de cualquier 
                cambio significativo publicando la nueva política en esta página.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Para cualquier pregunta sobre esta política de privacidad, contáctanos:
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:info@sineratics.com" className="underline">info@sineratics.com</a><br />
                Web: <a href="/" className="underline">sineratics.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}





