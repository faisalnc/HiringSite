// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = "CompanyHiring"; // Optional, defaults from URI

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection("contacted");

    await collection.insertOne({
      name,
      email,
      phone,
      message,
      contactedAt: new Date(),
    });

    return res.status(200).json({ message: "Saved successfully" });
  } catch (error) {
    console.error("DB error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
