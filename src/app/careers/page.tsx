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
    <>
      {/* Full-Width Banner */}
      <div className="relative w-screen h-[250px] left-1/2 -translate-x-1/2 overflow-hidden">
        <Image
          src="/images/careerpagebanner.png"
          alt="Careers Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Join Our Team
          </h1>
        </div>
      </div>

      {/* Job List Section */}
      <div className="bg-white min-h-screen">
<div className="max-w-7xl mx-auto pt-12 px-4 pb-16">
          <div className="space-y-6">
            {jobs.map((job: Job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row items-stretch justify-between border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition w-full"
              >
                {/* Left Side: Job Details */}
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

                {/* Right Side: Briefcase Icon */}
                <div className="hidden sm:flex items-center justify-center pl-6">
                  <div className="relative w-[80px] h-full flex items-center">
                    <Image
                      src={job.image || "/images/job.png"}
                      alt={`${job.title} icon`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
