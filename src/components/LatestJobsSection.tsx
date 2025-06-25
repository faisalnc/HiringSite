// components/LatestJobsSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/app/data/jobs";

export default function LatestJobsSection() {
  // Sort by latest closing date (descending), filter out undefined
  const sortedJobs = [...jobs]
    .filter((job) => job.closingDate)
    .sort((a, b) => {
      return new Date(b.closingDate!).getTime() - new Date(a.closingDate!).getTime();
    });

  // Pick the 3 jobs that are closing farthest into the future
  const latestJobs = sortedJobs.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Explore more</h2>
            <p className="text-3xl font-bold text-gray-800 mt-1">Current Openings</p>
          </div>
          <Link href="/careers#openings" className="flex items-center gap-2 text-gray-900 hover:text-orange-500 font-medium">
            <ArrowRight className="w-5 h-5" />
            All Openings
          </Link>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {latestJobs.map((job) => (
            <div
  key={job.id}
  className="rounded-xl bg-gray-100 shadow-md p-6 hover:shadow-lg transition duration-300"
>

              <h3 className="text-xl font-semibold text-gray-900">
                {job.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-bold">{job.title.split(" ").slice(-1)}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {job.location} • {job.type}
              </p>
              <Link
                href={`/careers/${job.id}`}
                className="mt-6 inline-flex items-center gap-2 text-[#0f172a] font-medium border border-[#0f172a] px-4 py-2 rounded-full hover:bg-[#0f172a] hover:text-white transition"
              >
                <ArrowRight className="w-4 h-4" />
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
