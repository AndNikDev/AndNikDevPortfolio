import BackgroundBlobs from "@/components/BackgroundBlobs";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AndNikDev Portfolio",
  description: "Portafolio de Andrew Nikolayk Muñoz Álvarez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased text-white bg-black relative min-h-screen">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
