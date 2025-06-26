// components/careers/WeAreSection.tsx
"use client";

import Image from "next/image";

const stats = [
  {
    icon: "/icons/trophy.svg",
    value: "10+",
    label: "Industry Awards",
    pill: "bg-green-200",
  },
  {
    icon: "/icons/sparkle.svg",
    value: "14+",
    label: "Years of Innovation",
    pill: "bg-yellow-200",
  },
  {
    icon: "/icons/team.svg",
    value: "60",
    label: "Team Members",
    pill: "bg-red-200",
  },
  {
    icon: "/icons/rocket.svg",
    value: "150+",
    label: "Delivered Projects",
    pill: "bg-orange-200",
  },
];

export default function WeAreSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1320px] xl:max-w-[1440px] mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          We <span className="text-black">Are</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
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
  );
}
