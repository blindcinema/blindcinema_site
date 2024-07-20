"use client";


import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper, SketchProps } from "@p5-wrapper/react";



function sketch(p5: P5CanvasInstance) { 
let xLoc = 0;
let yLoc = 0;
let numOfDots = 12;
let dotArray = [];
let previous = [];
let noiseScale = 0.05;

p5.updateWithProps = props => {
  if (props.loc) {
    xLoc = props.loc.x;
    yLoc = props.loc.y;
  }
  }

p5.setup = () => {
  p5.frameRate(12);
  p5.windowResized = () => { 
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight); 
} 
  p5.background(0,2);
  let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);  
  
  canvas.style("position", "absolute");
  canvas.style("z-index","-1")
  
  for (let i = 0; i < numOfDots; i++) {
    let v1 = p5.createVector(p5.random() * p5.windowWidth * 2, p5.random() * p5.windowHeight * 2);
    dotArray.push(v1);
    if (i > 0) {
          previous.push(dotArray[i -1]);
    } 
  }
};



p5.draw = () => {

  p5.background(0,100);

  p5.strokeWeight(12);
  p5.stroke("white");
  p5.point(xLoc,yLoc);
  p5.strokeWeight(2);
  p5.line(xLoc,yLoc,p5.windowWidth / 2, p5.windowHeight / 2);

  for (let i = 0; i < numOfDots; i++) {
    let noiz = p5.noise(0.0005 * p5.frameCount + i);

      let p = dotArray[i];
      let oldP = previous[i];
      let x =  p.x;
      let y = p.y  ;
      //y = Math.floor(p.y + (frameCount* 10 % height));
      let customX = p5.sin(noiz) * p5.width + p5.lerp(xLoc, p5.mouseX, 0.005);
  let customY = p5.cos(noiz) * p5.height + yLoc;

    p5.strokeWeight(3);
    p5.point(x,y);
    p5.strokeWeight(2);
    p5.line(x,y,x ,y );

    //p5.line();
  }

}
}


export default function Square({loc}) {
  return <ReactP5Wrapper className="asdf" sketch={sketch} loc={loc}  />;
}