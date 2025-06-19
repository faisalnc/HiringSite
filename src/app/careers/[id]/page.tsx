// src/app/careers/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { jobs } from "@/app/data/jobs";
import { Job } from "@/types/job";

export default async function JobDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Simulated async fetch (e.g., from DB)
  async function getJobById(id: string): Promise<Job | undefined> {
    return jobs.find((j) => j.id === id);
  }

  const job = await getJobById(id);

  if (!job) return notFound();

  return (
    <div className="min-h-screen bg-white py-12 px-4 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">
            {job.title}
          </h1>
          <p className="text-gray-600">
            {job.type} — {job.location}
          </p>

          {job.salaryRange && (
            <p className="text-sm text-gray-500 mt-1">
              Salary: {job.salaryRange}
            </p>
          )}
          {job.contractLength && (
            <p className="text-sm text-gray-500">
              Contract: {job.contractLength}
            </p>
          )}
          {job.workingRights && (
            <p className="text-sm text-gray-500">
              Eligibility: {job.workingRights}
            </p>
          )}
          {job.closingDate && (
            <p className="text-sm text-gray-500 mb-4">
              Applications close: {job.closingDate}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link
              href={`/careers/${job.id}/apply`}
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Apply Now
            </Link>
            <Link
              href="/careers"
              className="bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded hover:bg-gray-300 transition"
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden sm:block w-40 h-40">
          <Image
            src={job.image || "/images/job.png"}
            alt={`${job.title} image`}
            width={160}
            height={160}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      {/* Description */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Job Description
        </h2>
        <p className="text-gray-800">{job.description}</p>
      </section>

      {/* Requirements */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-800">
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      {job.benefits && job.benefits.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            {job.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
