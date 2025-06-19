// src/types/job.ts
export type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  image?: string;

  // Optional metadata fields
  workingRights?: string;
  contractLength?: string;
  salaryRange?: string;
  benefits?: string[];
  closingDate?: string;
};
