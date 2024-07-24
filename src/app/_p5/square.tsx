"use client";


import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper, SketchProps } from "@p5-wrapper/react";



function sketch(p5: P5CanvasInstance) { 
let xLoc = 0;
let yLoc = 0;
let numOfDots = 12;
let dotArray: Array<object> = [];
let previous: Array<any> = [];
let noiseScale = 0.05;

p5.updateWithProps = props => {
  if (props.loc) {
    xLoc = props.loc.x;
    yLoc = props.loc.y;
  }
  }

p5.setup = () => {
  p5.frameRate(60);
  p5.windowResized = () => { 
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight); 
} 
  p5.background(0,2);
  let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);  
  
  canvas.style("position", "absolute");
  canvas.style("z-index","-1")
  
  for (let i = 0; i < numOfDots; i++) {
    let v1 : object = p5.createVector(p5.random() * p5.windowWidth * 2, p5.random() * p5.windowHeight * 2);
    
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
  p5.noStroke();
  p5.fill("white");
  p5.text("Site is heavily under construction",p5.random(p5.width/2,p5.width/2 + 2),p5.random(p5.height/2,p5.height/2 + 2));
  p5.noFill();
  p5.strokeWeight(2);
  p5.push();
  //p5.line(xLoc,yLoc,xLoc,0);
  //p5.noStroke();

  p5.beginShape();
  p5.noStroke();
  //p5.vertex(xLoc,yLoc);

   for (let y = 0; y < yLoc; y++) {

    let randomX = p5.sin(y * p5.frameCount * 0.0005) + xLoc;
    //p5.vertex(randomX,y);
    
    //let mC = p5.map(y,0,p5.height,255,0);
    let m = p5.sin(p5.frameCount * 0.05);
    let mC = p5.map(y,0,p5.height,0,255)
    p5.stroke(255,255,255,mC); 
    p5.point(xLoc,y);
  } 


  p5.endShape();
  
  //p5.noLoop();
  
  //p5.line(xLoc,yLoc,p5.windowWidth / 2, p5.windowHeight / 2);
  

  /*for (let i = 0; i < numOfDots; i++) {
    let noiz = p5.noise(0.0005 * p5.frameCount + i);

      let p = dotArray[i];
      let oldP = previous[i];
      let x =  p.x;
      let y = p.y  ;
      //y = Math.floor(p.y + (frameCount* 10 % height));
      let customX = p5.sin(noiz) * p5.width + p5.lerp(xLoc, p5.mouseX, 0.005);
  let customY = p5.cos(noiz) * p5.height + yLoc;

    p5.strokeWeight(3);
    //p5.point(x,y);
    p5.strokeWeight(2);
    //p5.line(x,y,p5.mouseX ,p5.mouseY );

    //p5.line();
  }
  */

}
}


export default function Square({loc}) {
  return <ReactP5Wrapper className="asdf" sketch={sketch} loc={loc}  />;
}