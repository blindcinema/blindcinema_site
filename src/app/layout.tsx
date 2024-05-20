import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const evaFont = localFont({
   src: '../../public/fonts/epkaisho.woff2',
   weight: "400",
  }) 
/*   const evaFont = localFont({
    src: "./fonts/epkaisho.ttf",
    weight: "400",
  }) */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blindcinema",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-y-hidden">{children}</body>
    </html>
  );
}
