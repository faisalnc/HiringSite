// components/BenefitsSection.tsx
"use client";

export default function BenefitsSection() {
  const benefits = [
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
  ];

  return (
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
          {benefits.map((item, i) => (
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
  );
}
