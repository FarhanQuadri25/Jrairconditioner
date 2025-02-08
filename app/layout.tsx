import type { Metadata } from "next";
import { Inter, Poppins, Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Sidebar from "./(section)/_components/header/sidebar/Sidebar";
import Contact from "./(section)/_components/contact/Contact";
import Header from "./(section)/_components/header/navbar/Header";
import Navbar from "./(section)/_components/header/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-manrope",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Jr Air Conditioner",
  description: "jr air conditioner repair services",
  icons: "/images/logo.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${poppins.variable} ${manrope.variable} ${fraunces.variable}  antialiased`}
      >
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden fixed top-0 left-0 z-50 w-full">
          <Sidebar />
        </div>
        {children}
        <Contact />
      </body>
    </html>
  );
}
