"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
<div className="relative w-full mt-[100px] h-[200px] md:h-[240px] lg:h-[260px] overflow-hidden bg-[#0f1e36]">
      {/* Background Image */}
      <Image
        src="/images/tempbg.png"
        alt="Careers Banner"
        fill
        priority
        className="object-cover object-center opacity-90"
      />

      {/* Overlay Content – aligned with other sections */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full">
          <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
            <div className="max-w-xl">
              <h1 className="text-yellow-300 text-3xl md:text-5xl font-regular leading-tight">
                Gakk Media
              </h1>
              <h2 className="text-yellow-300 text-2xl md:text-5xl font-bold mt-1">
                Careers
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
