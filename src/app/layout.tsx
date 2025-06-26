import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Careers - Gakk Media",
  description: "Find Your Path to Success With Us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100 text-gray-900 min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
