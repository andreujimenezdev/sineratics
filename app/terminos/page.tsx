import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso - Sineratics",
  description: "Términos y condiciones de uso de los servicios de Sineratics.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Términos de Uso</h1>
          <p className="text-sm text-gray-500 mb-12">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-600 mb-4">
                Al acceder y utilizar el sitio web de Sineratics, aceptas estar sujeto a estos 
                términos de uso y a todas las leyes y regulaciones aplicables.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Servicios</h2>
              <p className="text-gray-600 mb-4">
                Sineratics ofrece servicios de consultoría IT, desarrollo web, integraciones empresariales, 
                automatización de procesos e inteligencia artificial aplicada a negocio.
              </p>
              <p className="text-gray-600 mb-4">
                Los términos específicos de cada proyecto se establecerán mediante contrato individual.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Uso del Sitio Web</h2>
              <p className="text-gray-600 mb-4">Te comprometes a:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Usar el sitio web de manera legal y apropiada</li>
                <li>No intentar acceder a áreas restringidas del sitio</li>
                <li>No transmitir contenido malicioso o dañino</li>
                <li>No usar el sitio para actividades fraudulentas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-600 mb-4">
                Todo el contenido de este sitio web (textos, imágenes, logotipos, código) es propiedad 
                de Sineratics y está protegido por leyes de propiedad intelectual.
              </p>
              <p className="text-gray-600 mb-4">
                No está permitida la reproducción, distribución o modificación sin autorización expresa.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-600 mb-4">
                Sineratics no será responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Interrupciones temporales del servicio web</li>
                <li>Errores u omisiones en el contenido del sitio</li>
                <li>Daños indirectos derivados del uso del sitio</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Enlaces a Terceros</h2>
              <p className="text-gray-600 mb-4">
                Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables 
                del contenido o políticas de privacidad de dichos sitios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Modificaciones</h2>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Ley Aplicable</h2>
              <p className="text-gray-600 mb-4">
                Estos términos se rigen por la legislación española. Cualquier disputa se someterá 
                a los tribunales de España.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Para cualquier pregunta sobre estos términos, contáctanos:
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





