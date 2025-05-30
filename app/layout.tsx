import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Escolha os pesos necessários
  variable: '--font-family-Lato', // Define a variável CSS
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={lato.className}
      >
          {children}
      </body>
    </html>
  );
}
