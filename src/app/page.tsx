"use client";
import Header from "./components/header";
import Carousel from "./components/carousel";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import Sine from "./p5/sine";




export default function Home() {



  return (
    <>
    <Header></Header>
      <main className="">
      
        <div className="flex justify-center flex-col gap-16">
        </div>
        <div className="bightingplaceholder h-screen  grid grid-cols-3 mr-4 ml-4 mt-12 grid-flow-col-dense">
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
        <div className="absolute top-96 left-96 "><Sine></Sine></div>
        
      </main>
    </>
  );
}
