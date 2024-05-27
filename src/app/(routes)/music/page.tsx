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
        <div className="w-[50%]">asdf</div>
          <Spotify link="https://open.spotify.com/artist/5lAnNu9650JC4EoD3166lZ?si=QxZQmj5hT-CYTOkdO_fG8g" allow="encrypted-media" height="80" width="50%" frameBorder="0" style={{borderRadius: 12}}></Spotify>
          
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
