import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("portfolio");
      const collection = db.collection("contacts");

      const result = await collection.insertOne({
        name,
        email,
        message,
        submittedAt: new Date(),
      });

      console.log("✅ Saved to MongoDB:", result.insertedId);

      return res.status(200).json({ success: true, message: "Form saved to MongoDB!" });
    } catch (error) {
      console.error("❌ MongoDB error:", error);
      return res.status(500).json({ success: false, message: "Database error" });
    }
  }

  res.status(405).json({ success: false, message: "Method not allowed" });
}
