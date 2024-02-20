import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Lista de países utilizando next13 e api RestCountries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <header className="bg-white shadow-2xl">
          <div className="max-w-[1200px] w-full mx-auto px-6 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Image width={48} height={48} src="/logo.svg" alt="Logo" />
              <h1 className="text-2xl font-bold">Lista de países</h1>
            </div>
          </div>
        </header>
        <main className="bg-gray-100 min-h-screen">
          
          {children}
          
        </main>
      </body>
    </html>
  );
}
