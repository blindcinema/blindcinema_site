"use client"
import "../_styles/globals.css";

import NoSSRWrapper from "../_components/NoSSRWrapper";
import Header from "../_components/header";
import {  useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/* export const metadata: Metadata = {
  title: "blindcinema",
  description: "",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [randomSymbol,setRandomSymbol] = useState("");
  const spinny = () => {
    const array = ["*","!","`","^","°","'"];
    const newArray = array[Math.floor(Math.random() * array.length)];
    setRandomSymbol(newArray);
    
  }
  //const resultF =  setInterval(spinny,500);
  useEffect(() => {
  //resultF;
  },[])
  return (
    <html lang="en">
      
      <body className="text-white overflow-y-hidden">
        <NoSSRWrapper>
          <Header title={"blindcinema" }/> 
      {/* <Header title={pathname != "/" ?  "blindcinema" + "|"  + pathname.replace("/",""): "blindcinema"}></Header> */}
        {children}
        </NoSSRWrapper></body>
      
    </html>
  );
}
