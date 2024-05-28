"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { P5CanvasInstance, ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";


export default function Header(props: any | undefined) {


    const [xpos, setX] = useState(0);
    const [ypos, setY] = useState(0);
    const [mAngle,setMAngle] = useState(0);
    //const [mouseAngle, setMouseAngle] = useState(0);
    const canvasRef = useRef();
    // useEffect(() => {

    //     const updatePos = (e: any) => {
    //         setX(e.clientX);
    //         setY(e.clientY);
             
    //     }
    //     const setTarget = (e: any) => {  
    //     }
    //     window.addEventListener("mousemove", updatePos);
    //     window.addEventListener("mousedown", setTarget);
    //     return () => {
    //         window.removeEventListener("mousemove", updatePos);
    //         window.removeEventListener("mousedown", setTarget);

    //     }
    // },[setX,ypos,ref])


    const sketch: Sketch = (p5: P5CanvasInstance) => {
        
        let particles: any = [];
        const num = 15;
        let settings: any = [];
        const noiseScale = 0.01;
        let mousePos = [];
        
        
         p5.setup = () =>  {
          p5.canvas = p5.createCanvas(containerSize.width, containerSize.height ).parent(canvasRef.current);
          for (let i = 0; i < num; i++) {
            particles.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)));
            settings.push({r:p5.random(200,255),g:p5.random(200,255),b:p5.random(200,255),weight:p5.random(1,3)});;
          }
        }
        
        function getMouseAngle(x1: number,y1: number,x2: number,y2: number) {


            let v1 = p5.createVector(x1,y1);
            let v2 = p5.createVector(x2,y2);
            const angle = v1.angleBetween(v2);
            return angle;
            

          }

        
        
        p5.draw = () => {
          p5.background(0,15);
          for (let i = 0 ; i < num; i++){
            let p = particles[i];
        
            let n = p5.noise(p.x * noiseScale , p.y * noiseScale);
            
            let a = p5.TAU * n - getMouseAngle(p5.width* 0.5,p5.height * 0.5,p5.mouseX,p5.mouseY);
            
            p.x += p5.constrain(p5.mouseX ,0,p5.width) / p5.width - 0.5;
            p.y += -p5.cos(a) ;   
            p5.point(p.x, p.y);
            p5.stroke(settings[i].r,settings[i].g,settings[i].b,p5.random(0,255));
            p5.strokeWeight(settings[i].weight);
            if (!onScreen(p)) {
              p.x = p5.random(p5.width);
             // p.x = random(width);
              p.y = p5.random(p5.height);
            };    
            
          }
          //p5.drawingContext.filter = "blur(1px)";
        }

        p5.mouseReleased = () => {
            //p5.print(p5.degrees(getMouseAngle(1,1,p5.winMouseX,p5.winMouseY)));
            //setX(p5.winMouseX);
            //p5.noiseSeed(p5.millis());
          }
        
        function onScreen(v: any) {
          return v.x >= 0 && v.x <= p5.width && v.y >= 0 && v.y <= p5.height;  
        } 

        }
        
        const [containerSize,setContainerSize] = useState({width: 100, height: 100});
        useEffect(() => {
          const  particleContainer =  document.getElementById("particle-container")?.getBoundingClientRect();
          setContainerSize({width: particleContainer?.width ?? 100,  height:particleContainer?.height ?? 100});
        },[])
      
    return(
          

        <nav className="navbar border-b mt-0 pt-0 overflow-clip pb-0 justify-between ">
            
            {/* <div className='cursorbubble w-5 h-5 ' ref={ref} style={{position: "absolute", "top": ypos - 2, "left": xpos - 5, }}></div> */}
            <div className="navbar-start flex w-12 sm:w-full mr-8 ">
                <a className="font-Epkaisho titleNoHover text-2xl sm:text-4xl ml-2 mt-1 cursor-pointer z-10 hover:titleHover transition-all h-10 " href="/">{`${props.title}`}</a>
                <div className="absolute top-1 left-2 hidden sm:inline sm:w-52 ml-0 h-14" id="particle-container" ><NextReactP5Wrapper sketch={sketch}/></div>
                
            </div>
            <div className="navbar-center w-24 sm:w-0">
            </div>
            <div className="navbar-end flex gap-2 ml-1 mr-1 sm:mr-12 flex-shrink text-sm  sm:text-base ">
            <a className="header-btn cursor-pointer hover:underline border-r pr-1 shadow-2xl hover:drop-shadow-white" href="/music">Music</a>
            <a className="header-btn cursor-pointer hover:underline border-r pr-1 hover:drop-shadow-white" href="/samples">Samples</a>
            <a className="header-btn cursor-pointer hover:underline border-r pr-1 hover:drop-shadow-white" href="/sounddesign">Sound Design</a>
            <a className="header-btn cursor-pointer hover:underline hover:drop-shadow-white" href="/about">About</a>
            
            </div>
            
        </nav>
        
    )
}