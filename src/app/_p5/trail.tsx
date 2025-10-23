"use client";

import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  type Point = { x: number; y: number; a: number; jx: number; jy: number }; // a = age, jx/jy = jitter seeds
  const trail: Point[] = [];
  let cursorImg: any = null;
  const SPRITE_SIZE = 32;
  const MAX_AGE = 120; // lifespan in frames
  const MAX_BLUR = 16; // px
  const SATURATION = 20; // reduced saturation
  const MAX_JITTER = 8; // max jitter in pixels for oldest trail

  p5.preload = () => {
    cursorImg = p5.loadImage("/cursor.png");
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.frameRate(30);
    p5.noStroke();

    // use HSB so we can vary hue easily (h: 0-360, s:0-100, b:0-100, a:0-255)
    p5.colorMode(p5.HSB, 360, 100, 100, 255);

    try {
      const c = (p5 as any).canvas as HTMLCanvasElement;
      if (c) {
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        c.style.width = "100%";
        c.style.height = "100%";
        c.style.pointerEvents = "none";
        // place the trail under HTML content but above the background video (-z-10)
        c.style.zIndex = "-5";
      }
    } catch (e) {}
  };

  p5.draw = () => {
    p5.clear();
    p5.noStroke();

    // only push when mouse is inside canvas bounds
    if (
      p5.mouseX >= 0 &&
      p5.mouseY >= 0 &&
      p5.mouseX <= p5.width &&
      p5.mouseY <= p5.height
    ) {
      // create jitter seeds so each point has its own smooth noise-driven offset
      trail.push({
        x: p5.mouseX,
        y: p5.mouseY,
        a: 0,
        jx: Math.random() * 1000,
        jy: Math.random() * 1000,
      });
    }

    // draw trailing cursors with incremental blur based on age + jitter
    for (let i = 0; i < trail.length; i++) {
      const pt = trail[i];

      const age = pt.a;
      const alpha = p5.constrain(p5.map(age, 0, MAX_AGE, 255, 0), 0, 255);
      const blur = p5.constrain(p5.map(age, 0, MAX_AGE, 0, MAX_BLUR), 0, MAX_BLUR);

      // jitter amplitude grows with age (older = more blurry & jittery)
      const jitterAmp = p5.constrain(p5.map(age, 0, MAX_AGE, 0, MAX_JITTER), 0, MAX_JITTER);
      // smooth jitter using Perlin noise
      const jitterX =
        (p5.noise(pt.jx + age * 0.05, age * 0.01) - 0.5) * 2 * jitterAmp;
      const jitterY =
        (p5.noise(pt.jy + age * 0.05, age * 0.01 + 100) - 0.5) * 2 * jitterAmp;

      // hue based on x coordinate (0..360)
      const hue = p5.constrain(p5.map(pt.x, 0, p5.width, 0, 360), 0, 360);

      if (cursorImg) {
        // apply canvas filter for blur while drawing this sprite
        const ctx = p5.drawingContext as any;
        ctx.save();
        ctx.filter = `blur(${blur}px)`;

        // draw using top-left as the image origin so sprite sits with its top-left at the recorded point
        p5.imageMode(p5.CORNER);
        // tint using reduced saturation and slightly lowered brightness
        p5.tint(hue, SATURATION, 90, alpha);
        p5.image(cursorImg, pt.x + jitterX, pt.y + jitterY, SPRITE_SIZE, SPRITE_SIZE);
        p5.noTint();

        ctx.filter = "none";
        ctx.restore();
      } else {
        // fallback: colored ellipse with hue based on x and reduced saturation, jittered
        p5.fill(hue, SATURATION, 90, alpha);
        p5.ellipse(pt.x + jitterX + SPRITE_SIZE / 2, pt.y + jitterY + SPRITE_SIZE / 2, 8);
      }

      pt.a += 4; // age increment (controls smoothness)
    }

    // remove old points
    while (trail.length && trail[0].a > MAX_AGE) {
      trail.shift();
    }

    // draw active cursor sprite on top (no blur), using top-left as hotspot (no jitter for active)
    if (
      p5.mouseX >= 0 &&
      p5.mouseY >= 0 &&
      p5.mouseX <= p5.width &&
      p5.mouseY <= p5.height
    ) {
      const hue = p5.constrain(p5.map(p5.mouseX, 0, p5.width, 0, 360), 0, 360);
      if (cursorImg) {
        p5.imageMode(p5.CORNER);
        // draw active cursor without blur but with reduced saturation
        p5.tint(hue, SATURATION, 90, 255);
        p5.image(cursorImg, p5.mouseX, p5.mouseY, SPRITE_SIZE, SPRITE_SIZE);
        p5.noTint();
      } else {
        // fallback: draw small marker
        p5.fill(hue, SATURATION, 90, 255);
        p5.ellipse(p5.mouseX + SPRITE_SIZE / 2, p5.mouseY + SPRITE_SIZE / 2, 8);
      }
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export default function Trail({ className }: { className?: string }) {
  // detect phone-like devices and skip rendering the canvas there
  const [isPhone, setIsPhone] = React.useState(false);

  React.useEffect(() => {
    function checkIsPhone() {
      const isTouch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);
      const smallScreen = window.innerWidth <= 768;
      setIsPhone(isTouch && smallScreen);
    }

    checkIsPhone();
    window.addEventListener("resize", checkIsPhone);
    return () => window.removeEventListener("resize", checkIsPhone);
  }, []);

  if (isPhone) return null;

  // wrapper ensures the ReactP5Wrapper is placed at top-level and sized correctly
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        // must be lower than your content so HTML elements render above the trail
        zIndex: -5,
      }}
    >
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}