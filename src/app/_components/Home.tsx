"use client";

import { useEffect, useState } from "react";

import NoSSRWrapper from "../_components/NoSSRWrapper";

import { useRouter } from "next/navigation";
import Bg_Video from "../_p5/Bg_Video";



export default function Home() {


  const [randomSymbol,setRandomSymbol] = useState("");
  const [bcRect,setBcRect] = useState<{x: Number | null, y: Number | null}>({x: null, y: null});
  const [element,setElement] = useState<string>('bc');
  const spinny = () => {
    const array = ["*","!","`","^","°","'"];
    const newArray = array[Math.floor(Math.random() * array.length)];
    setRandomSymbol(newArray);
    
  }


  const handleMouseOver = (e) => {

    switch (e.target.id) {
        default:
          setElement(e.target.id);
          break
        case null:
          
          setElement('root')
          break
  }
  }
    useEffect(() => {  
      //const resultF =  setInterval(spinny,100);
      //resultF;

      return () => {
        //clearInterval(resultF);
      }
      },[]);

      const setPos = () => {
        let el = document.getElementById(element);
        setBcRect({x: el!.offsetLeft + el!.clientWidth + 50, y: el!.offsetTop + el!.clientHeight * 0.5});

  }


      
      
    const router = useRouter();
    const gotoSite = (site : string) => {
      router.push(site);
    } 
  return (
    <NoSSRWrapper>
      <main className="h-[100lvh] w-full">
        <Bg_Video className="absolute top-0 left-0 -z-10 h-[100lvh] " />
        <div className="h-full p-6 md:p-12 pl-6 md:pl-8 w-full mt-12 mb-0 flex flex-col">
          <div className="h-1/2 flex flex-col justify-end md:h-[100lvh] w-max text-4xl">
            <div className=" font-Epkaisho mb-8 w-full hover:titleHover  " id="bc" onMouseOver={handleMouseOver}>blindcinema{randomSymbol}</div>
            <ul className="font-Epkaisho text-3xl ml-1 w-full" id="list" onMouseOver={handleMouseOver}>
              <li id="li1" onClick={() => {gotoSite("music")}} className="hover:titleHover ">music</li>
              <li id="li2" onClick={() => {gotoSite("sounddesign")}} className="hover:titleHover ">sound design</li>
              <li id="li3" onClick={() => {gotoSite("contact")}} className="hover:titleHover ">contact</li>
            </ul>
          </div>
        </div>
      </main>
    </NoSSRWrapper>
  );
}
