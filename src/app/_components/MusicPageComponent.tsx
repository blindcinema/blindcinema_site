"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Spotify } from "react-spotify-embed";
import Header from "@/app/_components/header";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";


export default function MusicPageComponent() {
  const [isClicked,setClicked] = useState(false);

  return (
    <NoSSRWrapper>

      
      <main className="h-screen bg-black">
      <Header title="blindcinema"></Header>
        <div className="flex justify-center flex-col gap-16">
        <div className=" flex flex-reverse justify-start mt-24">
        <div className="w-[50%]"></div>
          <Spotify link="https://open.spotify.com/artist/5lAnNu9650JC4EoD3166lZ?si=QxZQmj5hT-CYTOkdO_fG8g" allow="encrypted-media" height="80" width="50%" frameBorder="0" style={{borderRadius: 12}}></Spotify>
          <iframe width="100%" height="300" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1802428729%3Fsecret_token%3Ds-DpdU0eTvYsK&color=%23070707&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
        

        </div>

      </main>
     </NoSSRWrapper> 

  );
}
