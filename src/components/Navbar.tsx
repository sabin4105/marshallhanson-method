"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Become a Patient", href: "/become-a-patient" },
    { name: "Dentists", href: "/dentists" },
    { name: "Virtual Consult", href: "/virtual-consult" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔒 Lock scroll when menu open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] bg-[#FAF9F6]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors">
      <div className="mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-md md:text-xl font-semibold tracking-tighter uppercase text-black dark:text-white z-50"
        >
          Marshall Hanson <br />
          <span className="font-light text-gray-400 text-sm dark:text-zinc-500">
            Dentistry
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium absolute left-1/2 -translate-x-1/2 text-black dark:text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-stone-400 dark:hover:text-stone-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-black dark:bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white dark:text-black transition hover:bg-stone-800 dark:hover:bg-stone-200 hover:-translate-y-0.5 active:scale-95"
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`lg:hidden absolute inset-0 pt-20 dark:bg-zinc-950 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col bg-white dark:bg-stone-800 px-3 text-sm uppercase tracking-[0.2em] text-black dark:text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-black/5 dark:border-white/5 py-2 hover:text-stone-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-blue-600 dark:text-blue-400 text-lg py-2 font-serif italic normal-case tracking-normal"
          >
            Book Appointment →
          </Link>
        </div>
      </div>
    </nav>
  );
}