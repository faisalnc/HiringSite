"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { jobs } from "../data/jobs";
import { Job } from "@/types/job";
import HeroBanner from "@/components/HeroBanner";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <HeroBanner />

      <section className="bg-white py-10">
        <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Join the Fastest-Growing <br />
              <span className="text-black">Team of Innovators</span>
            </h2>
            <p className="text-gray-600 text-base">
              Looking to build a career where creativity, impact, and growth
              intersect? You’ve just found your next big opportunity.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/career1.png"
              alt="Career Team"
              width={520}
              height={520}
              className="rounded-full shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Current Openings – gray */}
      <section id="openings" className="bg-gray-50 py-20 scroll-mt-[50px]">
        <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Current <span className="text-black">Openings</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base md:max-w-xl mt-2 md:mt-0">
              Join us to shape the future of tech — we’re hiring passionate and
              innovative individuals for key roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job: Job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {job.type} • {job.location}
                  </p>
                  <p className="text-sm text-gray-700 mb-6 line-clamp-4">
                    {job.description}
                  </p>
                </div>
                <Link
                  href={`/careers/${job.id}`}
                  className="group inline-flex items-center gap-3 text-[#0f1e36] font-medium text-base hover:text-orange-500 transition self-start mt-4"
                >
                  <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border-2 border-[#0f1e36] group-hover:border-orange-500 group-hover:bg-orange-100 transition">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0f1e36] group-hover:text-orange-500" />
                  </span>
                  <span className="pt-[2px]">Apply Now</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits – white */}
      <section className="bg-white py-20">
        <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-black">Benefits</span> & Perks
            </h2>
            <p className="text-gray-600 text-sm md:text-base md:max-w-xl mt-2 md:mt-0">
              At Gakk Media, we believe work should be rewarding in every way.{" "}
              <br />
              Here’s what you’ll enjoy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Inspiring Work Culture",
              "Relaxation & Fun Zones",
              "Dual Festival Bonuses",
              "Annual Retreat & Tours",
              "Iftar & Cultural Events",
              "Unlimited Tea",
              "Dedicated Prayer Space",
              "Flexible leave allowance",
              "Performance-Based Bonuses",
              "Growth-Focused Career Path",
              "Safe & respectful workplace for women",
              "Maternity Leave",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border border-gray-200 rounded-xl p-4"
              >
                <div className="min-w-[28px] h-[28px] flex items-center justify-center rounded-full border border-gray-300">
                  <span className="text-gray-600 text-sm">✔</span>
                </div>
                <span className="text-gray-800 text-sm leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Internship Section – gray background */}
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

      {/* Values Section*/}
      <section className="bg-white py-20">
        <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-black">Values</span>
            </h2>
            <p className="text-gray-600 md:text-base max-w-2xl leading-relaxed">
              We’re a people-first tech team driven by innovation, quality, and
              collaboration. At Gakk Media, we champion growth, mutual respect,
              and a culture where great ideas and great fun—thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/icons/code.svg",
                title: "Excellence in Software Development",
                desc: "We deliver high-quality, scalable solutions using modern technologies and best practices.",
              },
              {
                icon: "/icons/chart-up.svg",
                title: "Rapid, Sustainable Growth",
                desc: "We grow fast—but with focus—ensuring long-term value for clients, teams, and partners.",
              },
              {
                icon: "/icons/gem.svg",
                title: "Broad Industry Experience",
                desc: "Our cross-industry expertise allows us to solve diverse challenges with confidence.",
              },
              {
                icon: "/icons/leaf.svg",
                title: "Inclusive & Supportive Culture",
                desc: "We foster a respectful, empowering environment where every voice is heard.",
              },
              {
                icon: "/icons/crown.svg",
                title: "Recognition That Matters",
                desc: "We celebrate achievements and reward contributions that drive real impact.",
              },
              {
                icon: "/icons/brain-gear.svg",
                title: "Vision for the Future",
                desc: "We stay ahead of the curve, embracing innovation to shape what's next.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We are section*/}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            We <span className="text-black">Are</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "/icons/trophy.svg",
                value: "10+",
                label: "Industry Awards",
                bg: "bg-green-100",
                pill: "bg-green-200",
              },
              {
                icon: "/icons/sparkle.svg",
                value: "14+",
                label: "Years of Innovation",
                bg: "bg-yellow-100",
                pill: "bg-yellow-200",
              },
              {
                icon: "/icons/team.svg",
                value: "60",
                label: "Team Members",
                bg: "bg-red-100",
                pill: "bg-red-200",
              },
              {
                icon: "/icons/rocket.svg",
                value: "150+",
                label: "Delivered Projects",
                bg: "bg-orange-100",
                pill: "bg-orange-200",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className={`inline-block text-2xl font-semibold px-6 py-3 rounded-full ${item.pill}`}
                >
                  {item.value}
                </div>
                <p className="mt-4 text-gray-900 font-medium">
                  {item.label.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {item.label.split(" ").slice(-1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
      <section id="contact-section" className="scroll-mt-[50px]">
        <ContactSection />
      </section>
    </>
  );
}
