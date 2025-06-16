"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0 });
    } else {
      router.push("/");

      // waits to scroll after page loads
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 100);
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" onClick={handleScrollTop}>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition cursor-pointer">
              Faisal Nazib
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
            <Link href="/#about">About</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Backdrop (always rendered for transition) */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg z-50 p-6 flex flex-col transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300 font-medium">
          <Link href="/#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
