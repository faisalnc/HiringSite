"use client";

export default function ContactSection() {
  return (
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/faisal-nazib-chowdhury"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            /faisal-nazib-chowdhury
          </a>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700 col-span-full sm:col-span-1">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            GitHub
          </p>
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
  );
}
