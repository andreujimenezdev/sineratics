import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Sineratics",
  description: "Política de privacidad de Sineratics - Información sobre el tratamiento de datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios sobre el tratamiento de los datos personales recogidos en sineratics.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Responsable del tratamiento</h2>
              <p className="text-gray-600 leading-relaxed">
                Andreu Jimenez Arcos<br />
                Correo: info@sineratics.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Datos que se recogen</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Nombre y correo electrónico enviados por el usuario.</li>
                <li>Cookies técnicas esenciales.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                (No se usan cookies de terceros ni datos sensibles.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Finalidad del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Gestionar consultas recibidas.</li>
                <li>Comunicaciones necesarias para servicios solicitados.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Base legal</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Consentimiento del usuario.</li>
                <li>Relación contractual o precontractual.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Conservación de datos</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Durante la relación comercial.</li>
                <li>12 meses tras la última comunicación si no hay contratación.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cesión de datos</h2>
              <p className="text-gray-600 leading-relaxed">
                No se ceden datos a terceros salvo obligación legal. No hay transferencias internacionales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Derechos del usuario</h2>
              <p className="text-gray-600 leading-relaxed">
                Acceso, rectificación, supresión, limitación o portabilidad mediante email a info@sineratics.com.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Reclamaciones ante la AEPD: www.aepd.es
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Seguridad</h2>
              <p className="text-gray-600 leading-relaxed">
                Se aplican medidas técnicas y organizativas adecuadas para la protección de datos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






