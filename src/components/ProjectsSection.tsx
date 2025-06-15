"use client";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section
        id="projects"
        className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <a
            href="https://github.com/faisalnc/pcap-analyser"
            target="_blank"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              PCAP Analyzer
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Automated Python tool for detecting network attacks using packet
              captures.
            </p>
          </a>
          <a
            href="https://github.com/faisalnc/ScamSpotter"
            target="_blank"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              ScamSpotter
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A digital forensics project that detects scam patterns in social
              media comments.
            </p>
          </a>
          <a
            href="https://github.com/faisalnc/-Fast-Car-Rentals---Website"
            target="_blank"
            className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Fast Car Rentals Website
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Car rental website built with responsive design features – with a
              vehicle search function, and integrated database of inventory.
            </p>
          </a>
        </div>
        <Link
          href="/projects"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          View All Projects →
        </Link>
      </section>
  );
}
