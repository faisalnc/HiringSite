// src/app/careers/page.tsx
"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { jobs } from "../data/jobs";
import { Job } from "@/types/job";

export default function CareersPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-6 scroll-mt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">Join Our Team</h1>

      <div className="space-y-6">
        {jobs.map((job: Job) => (
          <div
            key={job.id}
            className="flex flex-col sm:flex-row items-start justify-between border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition w-full"
          >
            {/* Job Info */}
            <div className="flex-1 pr-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {job.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {job.type} – {job.location}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <Link
                href={`/careers/${job.id}`}
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                More Details 
              </Link>
            </div>

            {/* Job Image */}
            <div className="hidden sm:block w-32 h-32 mt-4 sm:mt-0">
              <Image
                src={job.image || "/images/job.png"}
                alt={`${job.title} image`}
                width={128}
                height={128}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
