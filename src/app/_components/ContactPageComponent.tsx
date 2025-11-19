"use client";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import Header from "./header";
import Bg_Video from "../_p5/Bg_Video";
import NoSSRWrapper from "./NoSSRWrapper";

export default function ContactPageComponent() {
  return (
    <NoSSRWrapper>
      <main className="min-h-screen w-full relative overflow-hidden">
        <Header title="blindcinema" />
        <Bg_Video className="absolute inset-0 -z-10 h-[100lvh]" />

        <div className="relative z-10 flex items-center justify-center h-screen">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-8 text-center text-neutral-100 max-w-sm w-full">
            <div className="flex flex-col gap-3">
              <a
                href="mailto:blindcinemaofficial@gmail.com"
                className="flex items-center justify-start gap-3 text-sm text-neutral-300 hover:text-white font-Epkaisho"
                aria-label="Email blindcinemaofficial"
              >
                <MdAlternateEmail className="w-5 h-5" />
                blindcinemaofficial@gmail.com
              </a>

              <a
                href="https://tiktok.com/@blindcinema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 text-sm text-neutral-300 hover:text-white font-Epkaisho"
                aria-label="TikTok - blindcinema"
              >
                <FaTiktok className="w-5 h-5" />
                TikTok
              </a>

              <a
                href="https://instagram.com/blindcinema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 text-sm text-neutral-300 hover:text-white font-Epkaisho"
                aria-label="Instagram - blindcinema"
              >
                <FaInstagram className="w-5 h-5" />
                Instagram
              </a>

              <a
                href="https://youtube.com/@blindcinema_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-3 text-sm text-neutral-300 hover:text-white font-Epkaisho"
                aria-label="YouTube - blindcinema"
              >
                <CiYoutube className="w-5 h-5" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </main>
    </NoSSRWrapper>
  );
}