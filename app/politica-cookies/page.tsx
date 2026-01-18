import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - Sineratics",
  description: "Política de cookies de Sineratics - Información sobre el uso de cookies en el sitio web.",
};

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Este sitio web utiliza únicamente cookies técnicas esenciales, necesarias para su funcionamiento. No se emplean cookies analíticas, publicitarias o de terceros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Archivos pequeños almacenados en el navegador para permitir funcionalidades básicas. Las cookies técnicas no requieren consentimiento.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies utilizadas</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Cookie técnica de sesión (se elimina al cerrar el navegador).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                El usuario puede configurar su navegador para bloquear o eliminar cookies, aunque esto puede afectar al funcionamiento normal de la web.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






