// En: src/app/layout.tsx

import type { Metadata } from "next";
// 1. Importamos solo las fuentes que necesitas
import { Inter, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// 2. Configuramos las fuentes con todos sus pesos disponibles
const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400", // Esta fuente solo tiene el peso 400
  display: 'swap',
  variable: '--font-dm-serif-display',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-dm-sans',
});

// 3. Metadata (puedes personalizarla)
export const metadata: Metadata = {
  title: "Isa Belcan",
  description: "Enlace araña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}