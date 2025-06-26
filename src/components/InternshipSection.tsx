// components/InternshipSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Make sure this is installed and available

export default function InternshipSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Internships at{" "}
            <span className="text-[#0f1e36] font-bold">Gakk Media</span>
          </h2>
          <p className="italic text-lg text-gray-700 mb-4">
            Ignite Your Future With Us ✨
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Are you a student or recent graduate ready to challenge the norm?
            At Gakk, we welcome curious minds eager to learn, grow, and make
            an impact through hands-on experience.
          </p>
          <Link
            href="#contact-section"
            className="group inline-flex items-center gap-3 text-[#0f1e36] font-medium text-base hover:text-orange-500 transition"
          >
            <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border-2 border-[#0f1e36] group-hover:border-orange-500 group-hover:bg-orange-100 transition">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0f1e36] group-hover:text-orange-500" />
            </span>
            <span className="pt-[2px]">Contact us</span>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/career2.png"
            alt="Internship Program"
            width={550}
            height={400}
            className="rounded-3xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
