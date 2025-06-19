"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Products", href: "/#projects" },
  { name: "About Us", href: "/#about" },
  { name: "Contact Us", href: "/#contact" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200} // larger width
              height={0} // or omit this entirely
              className="h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-medium text-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-orange-600 transition relative pb-1 ${
                  isActive(item.href)
                    ? "text-orange-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-orange-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-orange-600">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-orange-600 transition ${
                isActive(item.href) ? "text-orange-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
