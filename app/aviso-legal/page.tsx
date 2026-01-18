import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal - Sineratics",
  description: "Aviso legal de Sineratics - Información legal y condiciones de uso del sitio web.",
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">Aviso Legal</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                En cumplimiento con lo dispuesto por la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se pone a disposición de los usuarios la siguiente información:
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Titular del sitio web:</h2>
              <p className="text-gray-600 leading-relaxed">
                Andreu Jimenez Arcos<br />
                (Sineratics)<br />
                Correo electrónico: info@sineratics.com
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Domicilio: Maresme, Barcelona<br />
                Actividad: Consultoría IT, desarrollo de software e integración de sistemas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Objeto</h2>
              <p className="text-gray-600 leading-relaxed">
                El presente sitio web ha sido creado por Sineratics con carácter informativo y para ofrecer servicios relacionados con desarrollo web, integración de sistemas y automatización tecnológica.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Condiciones de uso</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El usuario se compromete a utilizar este sitio web de forma adecuada y a no realizar actividades ilícitas o que atenten contra los derechos del titular o de terceros. Queda prohibido:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Difundir contenido ilícito, violento, pornográfico o discriminatorio.</li>
                <li>Dañar sistemas informáticos.</li>
                <li>Introducir virus o software malicioso.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Propiedad intelectual e industrial</h2>
              <p className="text-gray-600 leading-relaxed">
                Todos los contenidos de este sitio web son propiedad de Sineratics o se utilizan con licencia. No se permite la reproducción sin autorización previa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Enlaces externos</h2>
              <p className="text-gray-600 leading-relaxed">
                Este sitio web puede contener enlaces a sitios de terceros. Sineratics no se hace responsable del contenido de dichos sitios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Responsabilidad</h2>
              <p className="text-gray-600 leading-relaxed">
                Sineratics no se hace responsable de fallos de acceso, daños por virus, ataques informáticos o mal uso de la información.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Legislación aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                La relación entre usuario y titular se rige por la normativa española y los tribunales de Barcelona.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






