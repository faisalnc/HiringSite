"use client";

import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/projects");

    // Smooth scroll to top after route change
    setTimeout(() => {
      window.scrollTo({ top: 0});
    }, 100);
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <a
          href="https://github.com/faisalnc/pcap-analyser"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            PCAP Analyzer
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Automated Python tool for detecting network attacks using packet captures.
          </p>
        </a>

        {/* Project 2 */}
        <a
          href="https://github.com/faisalnc/ScamSpotter"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            ScamSpotter
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A digital forensics project that detects scam patterns in social media comments.
          </p>
        </a>

        {/* Project 3 */}
        <a
          href="https://github.com/faisalnc/-Fast-Car-Rentals---Website"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            Fast Car Rentals Website
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Car rental website built with responsive design features – with a vehicle search function, and integrated database of inventory.
          </p>
        </a>
      </div>

      {/* SPA-style button to navigate & scroll to top */}
      <button
        onClick={handleNavigate}
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
      >
        View All Projects →
      </button>
    </section>
  );
}
