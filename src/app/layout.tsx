import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faisal Nazib Portfolio",
  description: "Created with Next.js and Redux Toolkit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
