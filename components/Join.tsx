import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

export function Join() {
  return (
    <div className="h-[50rem] w-full bg-black bg-dot-white/[0.3]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-[40rem] w-full rounded-md flex flex-col md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-5xl md:text-6xl font-bold text-center text-neutral-200">
                What are you waiting for ?
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa earum minima, asperiores tempora ea iste fuga et labore sunt consequatur!
                </p>
            </div>
            <div className="flex gap-6 mt-10">
                <Link href='' className="bg-amber-300 text-xl text-black hover:bg-amber-300/90 rounded-full px-8 py-3 font-semibold">Get Started</Link>
            </div>
        </div>
    </div>
  );
}
