import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// AJUSTE AQUI: Título e Descrição profissionais
export const metadata: Metadata = {
  title: "Lacrei Saúde | Conectando a comunidade LGBTQIAPN+",
  description: "Encontre atendimento médico humanizado e seguro para a comunidade LGBTQIAPN+.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // AJUSTE AQUI: Mudei lang="en" para lang="pt-BR"
    <html
      lang="pt-BR" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
