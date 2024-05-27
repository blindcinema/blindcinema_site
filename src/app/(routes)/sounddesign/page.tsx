"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Spotify } from "react-spotify-embed";
const DynamicBg = dynamic(() => import("../../_p5/background"), {
  ssr: false,
})

export default function Home() {
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);
  const [isClicked,setClicked] = useState(false);


  const revealBg = () => {
    setClicked(!isClicked);
  }
  return (
    <>


      <main className="" onClick={revealBg}>
        <div className="flex justify-center flex-col gap-16 mt-12 mr-8 ">
            <div className="bg-black flex flex-reverse justify-start">

        </div>
        

        </div>
        <div className="bightingplaceholder  grid grid-cols-3 mr-4 ml-4 mt-12 grid-flow-col-dense">          
        </div>
        
        <div className="absolute top-0 pointer-events-none">
        {isClicked ? <DynamicBg/> : null}
        
        </div>
      </main>
     </> 

  );
}
