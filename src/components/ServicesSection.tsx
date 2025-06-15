"use client";

export default function ServicesSection() {
  return (
    <section
        id="services"
        className="py-20 px-6 md:px-20 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          Services I Provide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl bg-white dark:bg-zinc-800 shadow border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Web Development
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              React, Next.js, Tailwind, Vue — from frontend design to full-stack
              projects like Fast Car Rentals website.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white dark:bg-zinc-800 shadow border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Cybersecurity Tools
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Developing forensic analysis tools like packet analyzers, scam
              detectors, and password crackers.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-white dark:bg-zinc-800 shadow border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Digital Forensics
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Memory dump analysis, network log review, USB investigations, and
              steganography-based evidence discovery.
            </p>
          </div>
        </div>
      </section>
  );
}
