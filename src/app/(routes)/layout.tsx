
import "../_styles/globals.css";
import NoSSRWrapper from "../_components/NoSSRWrapper";
import Trail from "../_p5/trail";
import { Metadata } from "next";
import type { Viewport } from 'next';


export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
}
 export const metadata: Metadata = {
  title: "blindcinema",
  description: "blindcinema",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="text-white overflow-y-hidden">
        <NoSSRWrapper>
          
          {/* <Header title={"blindcinema" }/>  */}
      {/* <Header title={pathname != "/" ?  "blindcinema" + "|"  + pathname.replace("/",""): "blindcinema"}></Header> */}
        {children}
        <Trail></Trail>
        </NoSSRWrapper></body>
      
    </html>
  );
}
