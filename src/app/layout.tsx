import type { Metadata } from "next";
/*import { Geist, Geist_Mono } from "next/font/google";*/
import "./globals.css";
import NavBar from "@/components/NavBar";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GOT Assist",
  description: "Assist application for Game of Thrones board game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          {/* NavBar будет отображаться на всех страницах */}
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
