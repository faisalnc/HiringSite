// src/pages/api/apply.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);
const dbName = "CompanyHiring";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // or higher if needed
    },
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        jobId,
        fullName,
        email,
        phone,
        coverLetter,
        coverLetterFile,
        cv,
        supportingDocs,
      } = req.body;

      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("applications");

      const newDoc = {
        jobId,
        fullName,
        email,
        phone,
        coverLetter,
        coverLetterFile,
        cv,
        supportingDocs,
        submittedAt: new Date(),
      };

      await collection.insertOne(newDoc);

      res.status(200).json({ message: "Application submitted!" });
    } catch (error) {
      console.error("Error submitting application:", error);
      res.status(500).json({ message: "Something went wrong." });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
