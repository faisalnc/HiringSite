"use client";

import { useLayoutEffect } from "react";
//import Link from "next/link";
//import Image from "next/image";
//import { jobs } from "../data/jobs";
//import { Job } from "@/types/job";
import HeroBanner from "@/components/HeroBanner";
import IntroSection from "@/components/IntroSection";
import JobOpeningsSection from "@/components/JobOpeningsSection";
import BenefitsSection from "@/components/BenefitsSection";
import InternshipSection from "@/components/InternshipSection";
import ValuesSection from "@/components/ValuesSection";
import WeAreSection from "@/components/WeAreSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
//import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <HeroBanner />

      <IntroSection />

      {/* Current Openings */}
      <JobOpeningsSection />

      <BenefitsSection />

      <InternshipSection />

      <ValuesSection />

      <WeAreSection />

      <GallerySection />

      <FAQSection />

      <section id="contact-section" className="scroll-mt-[50px]">
        <ContactSection />
      </section>
    </>
  );
}
