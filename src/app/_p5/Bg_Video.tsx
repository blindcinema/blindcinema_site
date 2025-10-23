"use client";

import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let video: any;
  const chars = ["&", "%", "$", "#", "@", "*", "!", "?"];
  const randomCoord = () => ({ x: p5.random(0, p5.width), y: p5.random(0, p5.height) });

  p5.setup = () => {
    p5.frameRate(12);
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(51);
    video = p5.createVideo("/video/site_bg.webm");
    video.volume(0);
    video.loop();
    video.play();
    video.hide();
    p5.textSize(28);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };

  p5.draw = () => {
    p5.image(video, 0, 0, p5.width, p5.height);

    // only draw a character every other frame
    if (p5.frameCount % 2 === 0) {
      const pt = randomCoord();
      p5.noStroke();
      p5.fill(255, 255, 255, 150);
      const ch = chars[Math.floor(p5.random(chars.length))];
      p5.text(ch, pt.x, pt.y);
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export default function Bg_Video({ className }: { className?: string }) {
  return (
    <div className={className ?? ""}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}