"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter, useParams } from "next/navigation";
import { jobs } from "@/app/data/jobs";
import LatestJobsSection from "@/components/LatestJobsSection";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(8, "Phone number is too short")
    .max(15, "Phone number is too long"),
  coverLetter: Yup.string()
    .max(1000, "Maximum 5000 characters allowed")
    .nullable(),
  coverLetterFile: Yup.mixed()
    .nullable()
    .test("fileType", "Only .doc, .docx, .pdf allowed", (value) => {
      if (!value || typeof value === "string") return true;
      const file = value as File;
      return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
    })
    .test("fileSize", "File too large (max 5MB)", (value) => {
      if (!value || typeof value === "string") return true;
      const file = value as File;
      return file.size <= 5 * 1024 * 1024;
    }),
  cv: Yup.mixed()
    .required("CV is required")
    .test("fileType", "Only .doc, .docx, .pdf allowed", (value) => {
      if (!value || typeof value === "string") return true;
      const file = value as File;
      return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
    })
    .test("fileSize", "File too large (max 5MB)", (value) => {
      if (!value || typeof value === "string") return true;
      const file = value as File;
      return file.size <= 5 * 1024 * 1024;
    }),
  supportingDocs: Yup.array()
    .max(2, "You can upload a maximum of 2 files")
    .of(
      Yup.mixed()
        .test("fileType", "Only .doc, .docx, .pdf allowed", (file) => {
          if (!file || typeof file === "string") return true;
          if ("data" in file && typeof file.data === "string") return true;
          const f = file as File;
          return [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(f.type);
        })
        .test("fileSize", "File too large (max 5MB)", (file) => {
          if (!file || typeof file === "string") return true;
          if ("data" in file && typeof file.data === "string") return true;
          const f = file as File;
          return f.size <= 5 * 1024 * 1024;
        })
    )
    .nullable(),
});

export default function ApplyPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = params?.id as string;
  const job = jobs.find((j) => j.id === jobId);

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [supportingFiles, setSupportingFiles] = useState<File[]>([]);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <div className="bg-white">
        <div className="pt-[120px] max-w-3xl mx-auto py-12 px-4">
          {showSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl max-w-md w-full p-6 text-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  Application Submitted!
                </h2>
                <p className="text-gray-700 mb-6">
                  Thank you for applying. We’ve received your application.
                </p>
                <button
                  onClick={() => router.push("/careers")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
                >
                  Back to Jobs
                </button>
              </div>
            </div>
          )}
          {/* Top Banner */}
          <div className="bg-gray-100 py-10 px-6 md:px-12 mb-10 rounded-xl">
            <p className="text-sm font-medium text-gray-600 mb-2">
              {job?.location} • {job?.type}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {job?.title || "Job Title"}
            </h1>
          </div>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              coverLetter: "",
              coverLetterFile: null,
              cv: null,
              supportingDocs: [],
              agree: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const payload = {
                  ...values,
                  jobId, // Attach job ID to the form submission
                };
                console.log("Submitting application:", payload);
                const res = await fetch("/api/apply", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                });

                if (res.ok) {
                  resetForm();
                  setCvFile(null);
                  setSupportingFiles([]);
                  setCoverLetterFile(null);
                  setShowSuccess(true); // ustom modal
                } else {
                  const data = await res.json();
                  alert("Submission failed: " + data.message);
                }
              } catch (error) {
                console.error("Error:", error);
                alert("An unexpected error occurred.");
              }
            }}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-6 bg-white shadow-md rounded-lg p-8">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <Field
                    name="fullName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone*
                  </label>
                  <Field
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Cover Letter (Optional - Text or File) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter (Optional)
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    You may write your cover letter below (max 5000 characters)
                    or upload it as a file instead.
                  </p>
                  <Field
                    name="coverLetter"
                    as="textarea"
                    rows={5}
                    maxLength={1000}
                    placeholder="Type your cover letter here (optional)..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <ErrorMessage
                    name="coverLetter"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Cover Letter File Upload (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Cover Letter (Optional)
                  </label>

                  <input
                    name="coverLetterFile"
                    type="file"
                    accept=".doc,.docx,.pdf"
                    disabled={!!coverLetterFile}
                    className={`w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                      coverLetterFile ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onChange={async (event) => {
                      const file = event.currentTarget.files?.[0];
                      if (file) {
                        const base64 = await toBase64(file);
                        setCoverLetterFile(file);
                        setFieldValue("coverLetterFile", base64);
                      }
                    }}
                  />

                  {coverLetterFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                      <span>{coverLetterFile.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoverLetterFile(null);
                          setFieldValue("coverLetterFile", null);
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  <ErrorMessage
                    name="coverLetterFile"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload CV*
                  </label>

                  <input
                    name="cv"
                    type="file"
                    accept=".doc,.docx,.pdf"
                    disabled={!!cvFile}
                    className={`w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                      cvFile ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onChange={async (event) => {
                      const file = event.currentTarget.files?.[0];
                      if (file) {
                        const base64 = await toBase64(file);
                        setCvFile(file);
                        setFieldValue("cv", base64); // now stores base64 instead of File
                      }
                    }}
                  />

                  {cvFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                      <span>{cvFile.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCvFile(null);
                          setFieldValue("cv", null);
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  <ErrorMessage
                    name="cv"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Supporting Docs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supporting Documents (Optional)
                  </label>

                  <input
                    name="supportingDocs"
                    type="file"
                    accept=".doc,.docx,.pdf"
                    disabled={supportingFiles.length >= 2}
                    onChange={async (event) => {
                      const file = event.currentTarget.files?.[0];
                      if (file && supportingFiles.length < 2) {
                        const base64 = await toBase64(file);
                        const updatedFiles = [...supportingFiles, file];
                        setSupportingFiles(updatedFiles);

                        const base64Array = await Promise.all(
                          updatedFiles.map(async (f) => ({
                            name: f.name,
                            type: f.type,
                            data: f === file ? base64 : await toBase64(f),
                          }))
                        );

                        setFieldValue("supportingDocs", base64Array);
                      }
                    }}
                    className={`w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                      supportingFiles.length >= 2
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />

                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    {supportingFiles.map((file, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={async () => {
                            const updated = supportingFiles.filter(
                              (_, i) => i !== index
                            );
                            setSupportingFiles(updated);

                            const base64Array = await Promise.all(
                              updated.map(async (f) => ({
                                name: f.name,
                                type: f.type,
                                data: await toBase64(f),
                              }))
                            );

                            setFieldValue("supportingDocs", base64Array);
                          }}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>

                  {supportingFiles.length >= 2 && (
                    <p className="text-sm text-gray-500 mt-1">
                      You’ve uploaded the maximum of 2 files. Remove one to
                      upload another.
                    </p>
                  )}

                  <ErrorMessage
                    name="supportingDocs"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                  {/* Checkbox */}
                  <div className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="agree"
                      required
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 accent-orange-500"
                    />
                    <label className="text-sm text-gray-800">
                      By agree with Gakk Media{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        className="text-orange-500 hover:underline"
                      >
                        Terms and conditions
                      </a>
                    </label>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`font-semibold text-base px-8 py-3 rounded-full w-36 text-center transition duration-200
    ${
      isSubmitting
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-orange-500 hover:bg-orange-600 text-white"
    }
  `}
                  >
                    {isSubmitting ? "..." : "Apply"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="mt-12 bg-[#f5f5f5] p-6 rounded-xl">
  <p className="text-lg font-semibold text-gray-900 mb-4">
    Think this role suits someone you know?
    <br />
    Share it with them!
  </p>
  <div className="flex items-center justify-between bg-white px-6 py-4 rounded-full shadow-sm">
    <span className="font-medium text-gray-800">Share</span>
    <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/Gakkmedia/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f0f0f0] hover:bg-[#e4e4e4]"
      >
        <FaFacebookF className="text-[#1877F2]" />
      </a>
      <a
        href="https://bd.linkedin.com/company/gakk-media-bd-ltd-"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f0f0f0] hover:bg-[#e4e4e4]"
      >
        <FaLinkedinIn className="text-[#0A66C2]" />
      </a>
    </div>
  </div>
</div>

        </div>
        <div className="mt-12">
          <LatestJobsSection />
        </div>
      </div>
    </>
  );
}
