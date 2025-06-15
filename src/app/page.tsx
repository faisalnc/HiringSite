import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Hello! {"I'm"} <strong>Faisal Nazib Chowdhury</strong>, an aspiring
          Cybersecurity Analyst currently pursuing a Bachelor of Information
          Technology majoring in Cybersecurity at Deakin University. I have
          hands-on experience in digital forensics, network investigations, and
          web development...
        </p>
      </section>

      {/* Experience Section */}
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

      {/* Services */}
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

      {/* Projects */}
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

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          {"I'm"} always open to opportunities, collaborations, or a quick chat.
        </p>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Email</p>
            <a
              href="mailto:faisal.e924@gmail.com"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              faisal.e924@gmail.com
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Phone</p>
            <a
              href="tel:+61451933592"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              (+61) 451 933 592
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/faisal-nazib-chowdhury"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              /faisal-nazib-chowdhury
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700 col-span-full sm:col-span-1">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">GitHub</p>
            <a
              href="https://github.com/faisalnc"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              github.com/faisalnc
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
