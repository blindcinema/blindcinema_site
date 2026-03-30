"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Spotify } from "react-spotify-embed";
import Header from "@/app/_components/header";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import Bg_Video from "../_p5/Bg_Video";


export default function SoundDesignComponent() {

  return (
    <NoSSRWrapper>


    <main className="h-screen">
        <Header title="blindcinema"></Header>
          <Bg_Video className="absolute top-0 left-0 -z-10 h-[100lvh]" />
        <div className="flex justify-center flex-col gap-16 mt-12 mr-8 ">
            <div className="">
              <p>Playlist with sound design</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uMNMsu5ifWQ?si=0tIuzuZnh3f4EYKH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
        

        </div>

      </main>
     </NoSSRWrapper> 

  );
}
