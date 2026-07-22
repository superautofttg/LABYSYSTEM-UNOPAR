import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEACLab - Sistema Web e Documentação",
  description: "Plataforma Oficial do Laboratório Escola UNOPAR (LEACLab)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
