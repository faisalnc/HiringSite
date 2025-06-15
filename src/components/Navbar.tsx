"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Faisal Nazib
        </span>
        <div className="space-x-6 text-gray-700 dark:text-gray-300 font-medium flex items-center">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>

        </div>
      </div>
    </nav>
  );
}
