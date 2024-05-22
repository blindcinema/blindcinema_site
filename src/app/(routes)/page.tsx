"use client";
import Header from "../_components/header";

import Background from "../_p5/background";
import { useState } from "react";



export default function Home() {
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);

  return (
    <>
    <Header></Header>
    
      <main className="">
        <div className="flex justify-center flex-col gap-16 ">
        </div>
        <div className="bightingplaceholder   grid grid-cols-3 mr-4 ml-4 mt-12 grid-flow-col-dense">
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          
        </div>
        
        <div className="absolute top-0 pointer-events-none"><Background>
        </Background></div>
      </main>
      
    </>
  );
}
