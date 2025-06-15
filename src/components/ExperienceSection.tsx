"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Professional Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Part-time Instructor at Kids Unlimited
          </h3>
          <p>
            Since October 2024, I’ve been working with Kids Unlimited in
            Melbourne, where I design and deliver engaging lessons on
            introductory computing for school-aged students...
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Customer Service Supervisor at Coles Supermarkets
          </h3>
          <p>
            Since September 2023, I’ve been leading frontline operations at
            Coles Supermarkets in Melbourne...
          </p>
        </div>
      </div>
    </section>
  );
}
