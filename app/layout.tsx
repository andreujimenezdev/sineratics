import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sineratics - Consultoría IT y Automatización Inteligente",
  description: "Desarrollo, integraciones corporativas, workflows automatizados e inteligencia artificial aplicada a negocio.",
  keywords: ["consultoría IT", "desarrollo web", "automatización", "workflows", "inteligencia artificial", "software a medida", "Angular", "Headless CMS", "Node.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
