# Sineratics - Web Corporativa

Web corporativa oficial de Sineratics, consultora IT especializada en desarrollo web, integraciones empresariales, workflows automatizados e inteligencia artificial aplicada a negocio.

## 🎨 Diseño

Estilo minimalista técnico inspirado en Scandinavian Web Design y brutalismo suave:
- Paleta de colores: blanco (#FFFFFF), negro (#000000) y grises (#F5F5F5, #DADADA, #EAEAEA)
- Tipografía: Inter (weights: 300, 400, 500, 600, 700)
- Diseño limpio, profesional y premium
- Referencias: Vercel, Linear, Raycast

### Microinteracciones Premium

- **Tarjetas**: elevación suave (-3px) con sombra premium al hover
- **Botones**: inversión de color (blanco ↔ negro) con transiciones de 0.15s
- **Chips de tecnología**: hover con escala 1.02, borde negro y fondo #FAFAFA
- **Animaciones fade-up**: entrada suave de elementos al hacer scroll
- **Scroll progress**: indicador minimalista (2px) en la parte superior

### Separadores y Espaciado

- Líneas divisoras sutiles (1px, #EAEAEA) entre secciones
- Espaciado vertical optimizado (py-24 para secciones)
- Line-height mejorado para mejor legibilidad
- Sombra estándar: `0 4px 12px rgba(0, 0, 0, 0.04)`

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Fuentes**: Google Fonts (Inter)
- **Deploy**: Vercel (recomendado)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## ✉️ Formulario de contacto (envío por email)

El formulario de `Contacto` envía los datos a `POST /api/contact` y desde ahí se manda un email usando Resend.

Variables de entorno necesarias:

- `RESEND_API_KEY`: API key de Resend
- `CONTACT_TO_EMAIL`: (opcional) destino, por defecto `info@sineratics.com`
- `CONTACT_FROM_EMAIL`: (opcional) remitente, por defecto `Sineratics <onboarding@resend.dev>`

## 📁 Estructura del Proyecto

```
sineratics/
├── app/
│   ├── page.tsx                 # Home
│   ├── servicios/page.tsx       # Servicios
│   ├── portfolio/page.tsx       # Portfolio
│   ├── sobre-nosotros/page.tsx  # Sobre Nosotros
│   ├── contacto/page.tsx        # Contacto
│   ├── privacidad/page.tsx      # Política de Privacidad
│   ├── terminos/page.tsx        # Términos de Uso
│   ├── layout.tsx               # Layout principal
│   ├── globals.css              # Estilos globales
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Sitemap.xml
├── components/
│   ├── Header.tsx               # Navegación
│   ├── Footer.tsx               # Footer
│   ├── Button.tsx               # Componente botón
│   └── Card.tsx                 # Componente tarjeta
├── public/                      # Assets estáticos
└── README.md
```

## 🌐 Páginas

### 1. Home (/)
- Hero principal con título impactante
- Bloque de servicios (6 tarjetas)
- Tecnologías (logos en B/N)
- Casos reales destacados
- CTA final

### 2. Servicios (/servicios)
Dividido en 5 verticales:
- A. Desarrollo Web
- B. Integraciones Empresariales (software a medida, control de accesos, IoT Industrial)
- C. Automatización Empresarial con Workflows
- D. Inteligencia Artificial Aplicada
- E. Arquitectura de Aplicaciones

### 3. Portfolio (/portfolio)
Casos reales de proyectos:
- KH Lloreda (destacado)
- Desarrollo de software a medida e integraciones
- Control de accesos y fichaje
- Integraciones con sistemas industriales e IoT
- Automatización empresarial con workflows
- IA en Headless CMS
- Infraestructura Docker

### 4. Sobre Nosotros (/sobre-nosotros)
- Qué somos
- Visión
- Misión
- Valores
- Metodología de trabajo
- Especialización

### 5. Contacto (/contacto)
- Formulario de contacto (nombre, email, empresa, mensaje)
- Información de contacto
- FAQ
- Alternativas de contacto directo

## 🎯 SEO

- Metadatos configurados en cada página
- Sitemap.xml automático
- Robots.txt configurado
- Títulos y descripciones optimizados
- Estructura semántica HTML5

## 🔧 Configuración

### Variables de entorno
Crea un archivo `.env.local` para configuraciones:

```env
NEXT_PUBLIC_SITE_URL=https://sineratics.com
# Añadir variables para integración de formulario de contacto
```

### Formulario de Contacto
Actualmente el formulario simula el envío. Para conectarlo con un backend real:

1. Integrar con servicio de email (SendGrid, Resend, etc.)
2. Crear API endpoint en `/app/api/contact/route.ts`
3. Actualizar la lógica en `/app/contacto/page.tsx`

## 🚀 Deploy en Vercel

1. Push del código a GitHub
2. Conectar repositorio en Vercel
3. Configurar variables de entorno
4. Deploy automático

## ## ✨ Características Premium

### Animaciones y Microinteracciones

- **ScrollProgress**: Indicador de progreso de scroll en la parte superior (2px, negro)
- **FadeIn**: Componente de animación para entrada suave de elementos
- **Card hover**: Elevación y sombra premium al pasar el ratón
- **Button hover**: Inversión de colores (negro/blanco) con transición suave
- **Tech chips**: Hover con escala y cambio de borde
- **Smooth scroll**: Scroll suave entre secciones

### Modo Oscuro (Ready)

La web incluye clases CSS preparadas para modo oscuro:
- Inversión de colores: fondo negro, texto blanco
- Bordes en #222222
- Manteniendo el minimalismo

Para activarlo, añade la clase `dark-mode` al elemento `<body>`.

## 📝 Próximos Pasos

- [ ] Integrar formulario de contacto con backend real (SendGrid/Resend)
- [ ] Añadir analytics (Google Analytics / Plausible)
- [ ] Implementar blog técnico (opcional)
- [ ] Añadir casos de éxito con métricas reales del cliente
- [ ] Integrar calendario para agendar llamadas (Calendly)
- [ ] Añadir logos reales de tecnologías (SVGs optimizados)
- [ ] Implementar toggle de modo oscuro (opcional)
- [ ] Optimizar imágenes y añadir favicon personalizado

## 📄 Licencia

© 2025 Sineratics. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: info@sineratics.com
- **Web**: [sineratics.com](https://sineratics.com)

---

Desarrollado con ❤️ y código limpio por Sineratics
