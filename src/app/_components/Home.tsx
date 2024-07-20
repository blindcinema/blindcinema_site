"use client";

import { useEffect, useState } from "react";
import Square from "../_p5/square";
import NoSSRWrapper from "../_components/NoSSRWrapper";


export default function Home() {


  const [randomSymbol,setRandomSymbol] = useState("");
  const [bcRect,setBcRect] = useState<{x: Number | null, y: Number | null}>({x: null, y: null});
  const [element,setElement] = useState<string>('root');
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
      const resultF =  setInterval(spinny,100);
      resultF;

      return () => {
        clearInterval(resultF);
      }
      },[]);

      const setPos = () => {
        let el = document.getElementById(element);
        setBcRect({x: el!.offsetLeft + el!.clientWidth + 50, y: el!.offsetTop + el!.clientHeight * 0.5});

  }

      useEffect(()=> {
        let elem = document.getElementById(element);
      
      console.log(element)
        

      if (elem !== null) {
        setPos();
      }
      else {
        setBcRect({x: window.innerWidth / 2, y: window.innerHeight / 2});
      }
        return () => {

        };

      },[element]);
      
      
      
  return (
    <NoSSRWrapper>
    
    {/* <Header></Header> */}
    
      <main className="h-screen flex w-full">  
      <div><Square loc={bcRect}/></div>
        <div className="p-12 pl-8 w-screen mt-12 mb-0 coolborder flex flex-col">
        
          <div className="flex flex-col justify-end h-full text-4xl">
            <div className=" font-Epkaisho mb-12 w-max hover:titleHover " id="bc" onMouseOver={handleMouseOver}>blindcinema{randomSymbol}</div>
            <ul className="font-Epkaisho ml-4 w-max " id="list" onMouseOver={handleMouseOver}>
              <li id="li1" className="hover:titleHover">LINK</li>
              <li id="li2" className="hover:titleHover">LINK</li>
              <li id="li3" className="hover:titleHover">LINK</li>
              <li id="li4" className="hover:titleHover">LINK</li>
            </ul>
          </div>
        </div>
        
      </main>
      
    </NoSSRWrapper>
      

  );
}
