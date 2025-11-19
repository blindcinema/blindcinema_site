"use client";

import NoSSRWrapper from "../_components/NoSSRWrapper";
import { useRouter } from "next/navigation";
import Bg_Video from "../_p5/Bg_Video";

export default function Home() {
  const router = useRouter();
  const gotoSite = (site: string) => router.push(site);

  return (
    <NoSSRWrapper>


      <main className="h-[100lvh] w-full">


        <Bg_Video className="absolute top-0 left-0 -z-10 h-[100lvh]" />

        <div className="h-full md:p-12  md:pl-8 w-full flex flex-col">

          <div className="h-1/2 flex flex-col justify-end md:h-[100lvh] w-max text-4xl md:ml-4">

            <div className="font-Epkaisho mb-8 w-full hover:titleHover" id="bc">
              blindcinema
            </div>
            <ul className="font-Epkaisho text-3xl ml-1 w-full" id="list">
              <li id="li1" onClick={() => gotoSite("music")} className="hover:titleHover hover:cursor-pointer">
                music
              </li>
              <li id="li2" onClick={() => gotoSite("sounddesign")} className="hover:titleHover hover:cursor-pointer">
                sound design
              </li>
              <li id="li3" onClick={() => gotoSite("contact")} className="hover:titleHover hover:cursor-pointer">
                contact
              </li>
            </ul>
          </div>
        </div>
      </main>
    </NoSSRWrapper>
  );
}
