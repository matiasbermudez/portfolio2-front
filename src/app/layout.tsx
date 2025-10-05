import "./globals.css";
import type { Metadata } from "next";
import { Cinzel , Cormorant_Garamond , Inter } from "next/font/google";
import { HeaderComp } from "./components/headerComp";
import { FooterComp } from "./components/footerComp";


export const metadata: Metadata = {
  title: "MAB Portfolio",
  description: "Matias Alejandro Bermudez Portfolio",
  icons: {
    icon: "/favicon.ico", // también puede ser .png o .svg
  }
};

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-background text-foreground ${cinzel.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
        <HeaderComp/>
        {children}
        <FooterComp/>
      </body>
    </html>
  );
}
