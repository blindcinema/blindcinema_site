"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Spotify } from "react-spotify-embed";
import Header from "@/app/_components/header";
const DynamicBg = dynamic(() => import("../../_p5/background"), {
  ssr: false,
})

export default function Home() {

  return (
    <>


    <main className="h-screen bg-black">
        <Header title="blindcinema"></Header>
        <div className="flex justify-center flex-col gap-16 mt-12 mr-8 ">
            <div className="">
              <p>Playlist with sound design</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=rgqa5SuNxbVgSo7_&amp;list=PL-pv-OKN-1T2QdrSOOvZu3cinIGL7mPcB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        

        </div>

      </main>
     </> 

  );
}
