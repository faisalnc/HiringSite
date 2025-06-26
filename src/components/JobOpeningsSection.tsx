// components/JobOpeningsSection.tsx
"use client";

import Link from "next/link";
import { jobs } from "@/app/data/jobs";
import { Job } from "@/types/job";
import { ArrowRight } from "lucide-react";

export default function JobOpeningsSection() {
  return (
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
  );
}
