"use client";
import { useEffect, useState, useRef } from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { memo } from "react";


export default function Header() {

    const [xpos, setX] = useState(0);
    const [ypos, setY] = useState(0);
    //const [mouseAngle, setMouseAngle] = useState(0);
    const ref = useRef(null);
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


    const sketch: Sketch = (p5) => {
        
        let particles: any = [];
        const num = 15;
        let settings: any = [];
        const noiseScale = 0.01;
        let mousePos = [];
        
        
         p5.setup = () =>  {
          p5.canvas = p5.createCanvas(200, 50);
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
          p5.background(0,10);
          for (let i = 0 ; i < num; i++){
            let p = particles[i];
        
            let n = p5.noise(p.x * noiseScale , p.y * noiseScale);
            let a = p5.TAU * n - (getMouseAngle(p5.width* 0.5,p5.height * 0.5,p5.mouseX,p5.mouseY) ) ;
            p.x += p5.cos(a);
            p.y += p5.sin(a);    
            p5.point(p.x, p.y);
            p5.stroke(settings[i].r,settings[i].g,settings[i].b,p5.random(0,255));
            p5.strokeWeight(settings[i].weight);
            if (!onScreen(p)) {
              p.x = p5.random(p5.width);
             // p.x = random(width);
              p.y = p5.random(p5.height);
            };    
            
          }
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

    



        
        /* useEffect(() =>{
            function getAngle (x1: number, y1: number, x2: number, y2: number) {

                var distY = Math.abs(y2-y1); //opposite
                var distX = Math.abs(x2-x1); //adjacent
                var dist = Math.sqrt((distY*distY)+(distX*distX)); //hypotenuse, 
                   //don't know if there is a built in JS function to do the square of a number
                var val = distY/dist;
                var aSine = (Math.asin(val) * (180/Math.PI));
                return aSine;
            }
            const updatePos = (e: any) => {
                setX(e.clientX);
                setY(e.clientY);
            }

            const revealPos = () => {
                setMouseAngle(getAngle(0,0,xpos,ypos));
                console.log(mouseAngle);
                
            }
            window.addEventListener("mousemove", updatePos);
            window.addEventListener("mousedown", revealPos);
            return () => {
                window.removeEventListener("mousemove", updatePos);
                window.removeEventListener("mousedown", revealPos);

            }


        },[xpos,ypos]); */

        

    return(
        
        <nav className="navbar border-b mb-10 mt-0 pt-0 overflow-clip">
            
            {/* <div className='cursorbubble w-5 h-5 ' ref={ref} style={{position: "absolute", "top": ypos - 2, "left": xpos - 5, }}></div> */}
            <div className="navbar-start">
                <a className=" font-Epkaisho titleNoHover text-4xl ml-2 mb-1 mt-1 cursor-pointer z-10 hover:titleHover transition-all  ">blindcinema</a>
                <div className="pt-0 scale-y-110 absolute "><NextReactP5Wrapper sketch={sketch} ></NextReactP5Wrapper></div>
                
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end flex gap-2 mr-12 ">
            <a className="header-btn cursor-pointer hover:underline border-r pr-1 shadow-2xl hover:drop-shadow-white" href="#">Music</a>
            <a className="header-btn cursor-pointer hover:underline border-r pr-1 hover:drop-shadow-white" href="#">Samples</a>
            <a className="header-btn cursor-pointer hover:underline hover:drop-shadow-white"  href="#">About</a>
            
            </div>
            
        </nav>
        
    )
}