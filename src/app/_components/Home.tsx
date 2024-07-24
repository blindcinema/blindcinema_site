"use client";

import { useEffect, useState } from "react";
import Square from "../_p5/square";
import NoSSRWrapper from "../_components/NoSSRWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";


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

      useEffect(()=> {
        let elem = document.getElementById(element);
      
      //console.log(element)
        

      if (elem !== null) {
        setPos();
      }
      else {
        setBcRect({x: window.innerWidth / 2, y: window.innerHeight / 2});
      }
        return () => {

        };

      },[element]);
      
      
    const router = useRouter();
    const gotoSite = (site : string) => {
      router.push(site);
    } 
  return (
    <NoSSRWrapper>
    
    {/* <Header></Header> */}
    
      <main className="h-screen flex w-full">  
      <div><Square loc={bcRect}/></div>
        <div className="p-12 pl-8 w-screen mt-12 mb-0 coolborder flex flex-col">
        
          <div className="flex flex-col justify-end h-full w-max text-4xl">
            <div className=" font-Epkaisho mb-8 w-full hover:titleHover cursor-default " id="bc" onMouseOver={handleMouseOver}>blindcinema{randomSymbol}</div>
            <ul className=" text-3xl ml-1 w-full" id="list" onMouseOver={handleMouseOver}>
              <li id="li1" onClick={() => {gotoSite("music")}} className="hover:titleHover cursor-pointer">music</li>
              <li id="li2" onClick={() => {gotoSite("sounddesign")}} className="hover:titleHover cursor-pointer">sound design</li>
              <li id="li3" onClick={() => {gotoSite("stuff")}} className="hover:titleHover cursor-pointer">p5js stuff</li>
            </ul>
          </div>
        </div>
        
      </main>
      
    </NoSSRWrapper>
      

  );
}
