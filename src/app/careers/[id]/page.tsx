"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/app/data/jobs";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import LatestJobsSection from "@/components/LatestJobsSection";

function formatDate(dateStr?: string) {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function JobDetails() {
  const params = useParams();
  const id = params?.id as string;

  const job = jobs.find((j) => j.id === id);
  if (!job) return notFound();

  const staticBenefits = [
    "Inspiring Work Culture",
    "Relaxation & Fun Zones",
    "Dual Festival Bonuses",
    "Annual Retreat & Tours",
    "Iftar & Cultural Events",
    "Unlimited Tea & Water",
    "Dedicated Prayer Space",
    "Flexible leave allowance",
    "Performance-Based Bonuses",
    "Growth-Focused Career Path",
  ];

  return (
    <div className="pt-[100px] bg-white text-gray-800">
      {/* Top section */}
      <section className="w-full bg-[#f7f7f7] py-10">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left: Job Info */}
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-4xl font-bold text-black">{job.title}</h1>

              <div className="space-y-6 text-sm text-gray-800 mt-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-gray-600" />
                  <span>
                    Job type:{" "}
                    <strong className="text-gray-900">{job.type}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span>
                    Last date:{" "}
                    <strong className="text-gray-900">
                      {formatDate(job.closingDate)}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>
                    Location:{" "}
                    <strong className="text-gray-900">{job.location}</strong>
                  </span>
                </div>
              </div>

              {/* Back to Listings Button */}
              <Link
                href="/careers#openings"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Listings
              </Link>
            </div>

            {/* Right: Apply Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-lg font-medium text-gray-900 mb-6">
                Ready to take the next step?
                <br />
                We can&apost wait to connect!
              </p>
              <Link
                href={`/careers/${job.id}/apply`}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-all"
              >
                Apply Now
              </Link>
              <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-white bg-orange-500 border-2 border-orange-500 rounded-sm w-4 h-4 checked:bg-orange-500 checked:text-white"
                />

                <span>
                  By agree with Gakk Media{" "}
                  <Link href="/terms" className="text-orange-500 underline">
                    Terms and conditions
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle section: Description, Requirements, Why Join, Benefits */}
      <section className="w-full bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Job Summary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Job Summary
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Qualifications
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Why Join Gakk Media? */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Why Join Gakk Media?
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Work on exciting and meaningful Android projects that reach
                  thousands of users.
                </li>
                <li>
                  Be part of a forward-thinking team focused on mobile
                  innovation.
                </li>
                <li>Competitive salary, benefits, and growth opportunities.</li>
                <li>
                  A collaborative work culture that encourages creativity and
                  continuous improvement.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Benefits */}
          <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Basics & Benefits
                </h2>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {job.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
                {staticBenefits.map((benefit, index) => (
                  <li
                    key={`static-${index}`}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share buttons */}
            <div className="mt-6 bg-white rounded-full px-6 py-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-800">Share</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/Gakkmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://bd.linkedin.com/company/gakk-media-bd-ltd-"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestJobsSection />
    </div>
  );
}
