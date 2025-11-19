"use client";

import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import { Spotify } from "react-spotify-embed";
import Header from "./header";
import Bg_Video from "../_p5/Bg_Video";

export default function MusicPageComponent() {
  return (
    <NoSSRWrapper>
      
      <main className="h-screen">
      <Header title="blindcinema"></Header>
      <Bg_Video className="absolute top-0 left-0 -z-10 h-[100lvh]" />
        

        {/* Content columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-0 relative">
          {/* Left column */}
          <div className="flex items-center justify-center h-full w-full">
            <div className="w-full max-w-md rounded-lg overflow-hidden border border-neutral-800 bg-transparent">
              <Spotify
                link="https://open.spotify.com/artist/5lAnNu9650JC4EoD3166lZ?si=QxZQmj5hT-CYTOkdO_fG8g"
                height={380}
                width="100%"
                style={{ borderRadius: 8 }}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex items-center justify-center h-full w-full">
            <div className="w-full max-w-md rounded-lg overflow-hidden border border-neutral-800 bg-transparent">
              <iframe
                title="blindcinema soundcloud playlist"
                width="100%"
                height="300"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1802428729%3Fsecret_token%3Ds-DpdU0eTvYsK&color=%23070707&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </div>
        </div>
      </main>
    </NoSSRWrapper>
  );
}