import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAEAEA] bg-white mt-32 section-divider relative overflow-hidden">
      {/* Technical Pattern Background */}
      <div className="footer-tech-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image 
              src="/sineratics_logo.png" 
              alt="Sineratics" 
              width={220} 
              height={48}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Consultoría IT especializada en desarrollo web, integraciones empresariales, 
              workflows automatizados e inteligencia artificial aplicada a negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-500">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/pymes" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Soluciones PYMES
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-gray-600 hover:text-black transition-colors duration-150">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-500">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@sineratics.com" 
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-150"
                >
                  info@sineratics.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34XXXXXXXXX" 
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-150"
                >
                  +34 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EAEAEA] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sineratics. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8">
            <Link href="/aviso-legal" className="text-xs text-gray-500 hover:text-black transition-colors duration-150">
              Aviso Legal
            </Link>
            <Link href="/politica-privacidad" className="text-xs text-gray-500 hover:text-black transition-colors duration-150">
              Política de Privacidad
            </Link>
            <Link href="/politica-cookies" className="text-xs text-gray-500 hover:text-black transition-colors duration-150">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

