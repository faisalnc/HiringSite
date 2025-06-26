// components/careers/ValuesSection.tsx
"use client";

import Image from "next/image";

const values = [
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
];

export default function ValuesSection() {
  return (
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
          {values.map((value, idx) => (
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
  );
}
