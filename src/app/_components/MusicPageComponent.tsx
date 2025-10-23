"use client";

import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import { Spotify } from "react-spotify-embed";

export default function MusicPageComponent() {
  return (
    <NoSSRWrapper>
      <main className="h-screen w-screen relative overflow-hidden">
        {/* Shared background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src="/video/site_bg.webm"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Optional global dim so content is readable; pointer-events-none so clicks go through */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-5" />

        {/* Content columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-0 relative z-10">
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