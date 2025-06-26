// components/IntroSection.tsx
"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-white py-10 lg:py-0">
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Join the Fastest-Growing <br />
            <span className="text-black">Team of Innovators</span>
          </h2>
          <p className="text-gray-600 text-base">
            Looking to build a career where creativity, impact, and growth
            intersect? You’ve just found your next big opportunity.
          </p>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 h-[260px] sm:h-[300px] md:h-[360px] lg:h-full flex justify-center md:justify-end">
          <Image
            src="/images/career1.png"
            alt="Career Team"
            width={800}
            height={600}
            className="w-auto h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
