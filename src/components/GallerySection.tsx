// components/GallerySection.tsx
"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const images = [
  { src: "/images/gal1.png", alt: "Gallery 1" },
  { src: "/images/gal2.png", alt: "Gallery 2" },
  { src: "/images/gal3.png", alt: "Gallery 3" },
  { src: "/images/gal4.png", alt: "Gallery 4" },
  { src: "/images/gal5.png", alt: "Gallery 5" },
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#fff7eb] pt-10 pb-15 relative overflow-hidden">
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
        <h2 className="text-[56px] md:text-[80px] font-extrabold text-orange-300 leading-none mb-10 relative z-10">
          <span className="text-orange-500">LIFE AT</span>
          <span className="ml-2 text-[#f0d1ae]">GAKK MEDIA</span>
        </h2>

        <div className="relative">
          {/* Fade Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-[#fff7eb] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-[#fff7eb] to-transparent" />

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-100"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Image Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md"
                style={{ height: "360px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={360}
                  className="h-full w-auto object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
