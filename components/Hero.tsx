import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const words = `Learn a language for free by chatting with native speakers around the world !
`;

export function Hero() {
  return (
    <div className="h-[50rem] w-full bg-black bg-dot-white/[0.3]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-[40rem] w-full rounded-md flex flex-col md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-5xl md:text-7xl font-bold text-center text-neutral-200">
                Learn <br /> Language <br /> Anywhere
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-500 max-w-[20rem] text-center mx-auto">
                <TextGenerateEffect words={words} />
                </p>
            </div>
            <div className="flex gap-6 mt-2">
                <Link href='' className="bg-amber-300 text-black hover:bg-amber-300/90 rounded-full px-6 py-2">Get Started</Link>
                <Link href='' className="text-white bg-gray-700 hover:bg-gray-700/90 rounded-full px-6 py-2">Learn More</Link>
            </div>
        </div>
    </div>
  );
}
