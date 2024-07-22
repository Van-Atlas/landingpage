import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { Github, Instagram, Twitter } from "lucide-react";

export function ShineBorderDemo() {
  return (
    <ShineBorder
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-[#0A3D62] md:shadow-xl"
      color={["#F79F1F", "#0A3D62", "#FFF"]}
    >
      <div className="flex flex-col items-center justify-center text-center p-8 space-y-8">
        {/* Logo */}
        <div className="w-48 h-48 bg-[#0A3D62] rounded-full flex items-center justify-center border-4 border-white">
          <div className="text-[#F79F1F] text-4xl font-bold flex items-center">
            <span>VAN</span>
            <svg
              className="w-12 h-12 mx-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21,12c0,0.5-0.5,1-1,1h-3v7h-2v-7H9v7H7v-7H4c-0.5,0-1-0.5-1-1V6c0-0.5,0.5-1,1-1h16c0.5,0,1,0.5,1,1V12z M5,5v6h14V5H5z" />
            </svg>
            <span>ATLAS</span>
          </div>
        </div>

        <p className="text-xl sm:text-2xl text-white max-w-2xl">
          Die Heimat für Van-Life-Begeisterte. Bald verfügbar!
        </p>

        <div className="inline-block">
          <span className="text-[#F79F1F] text-lg font-semibold border-b-2 border-[#F79F1F] pb-1 cursor-pointer hover:text-white hover:border-white transition-colors duration-300">
            Bleib auf dem Laufenden
          </span>
        </div>

        <div className="flex space-x-6 mt-8">
          <a
            href="#twitter"
            className="text-white hover:text-[#F79F1F] transition-colors duration-300"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#instagram"
            className="text-white hover:text-[#F79F1F] transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#github"
            className="text-white hover:text-[#F79F1F] transition-colors duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </ShineBorder>
  );
}
