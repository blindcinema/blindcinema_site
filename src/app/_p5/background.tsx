"use client";

import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper, SketchProps } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let camShader;

/*   p5.preload = () => {
    camShader = p5.loadShader('effect.vert', 'effect.frag');
  } */
  p5.setup = () => {
    //drawingContext

    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  
  }
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  p5.draw = () => {
  let movement = (0.005 * p5.frameCount);
  const v0 = p5.createVector(p5.width ,p5.height );
  let mathx = p5.constrain(p5.mouseX,0,p5.width) * p5.PI ;
    let mathy = p5.constrain(p5.mouseY,0,p5.height) * p5.PI ;
  let v1= p5.createVector(p5.mouseX,p5.mouseY);
  let n = 0.5 * p5.noise(0.5 * p5.frameCount);
    
  p5.camera(0,0, movement + 400);
    p5.background(0,0);
    p5.push();
    p5.normalMaterial();
    p5.rotateY(mathx / p5.width + 1.5 + movement);
    p5.rotateX(mathy / p5.height + movement);
    p5.rotateZ(movement);
      p5.translate(0,0,-10);
      p5.box(100);
    p5.pop();
  
  p5.push();
      p5.normalMaterial();
    p5.translate(180,0);
      p5.rotateY(mathx / p5.width + 1.5 + movement);
    p5.rotateX(mathy / p5.height + movement);
    p5.rotateY(mathx / p5.width + 1.5);
      p5.box(70);
    p5.pop();
    p5.push();
      p5.normalMaterial();
      p5.translate(-180,0);
    p5.rotateY((mathx / p5.width + 1.5) * -1 + movement);
    p5.rotateX((mathy / p5.height) + movement);
    p5.rotateY(mathx / p5.width + 1.5);
    p5.rotateX((mathy / p5.width) );
      p5.box(70);
  p5.pop();
  //p5.filter(p5.BLUR,8);
  p5.drawingContext.filter = "blur(8px)"
  } 

}
export default function Background() {
  return <ReactP5Wrapper sketch={sketch} />;
}