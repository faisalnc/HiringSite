import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type FormEntry = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const formData: FormEntry = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    const formsDir = path.join(process.cwd(), 'forms');
    const filePath = path.join(formsDir, 'submissions.json');

    if (!fs.existsSync(formsDir)) {
      fs.mkdirSync(formsDir);
    }

    let existing: FormEntry[] = [];
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      existing = JSON.parse(fileContents || '[]');
    }

    existing.push(formData);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return res.status(200).json({ success: true, message: 'Form saved!' });
  }

  res.status(405).json({ success: false, message: 'Method not allowed' });
}
