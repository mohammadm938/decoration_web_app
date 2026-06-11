"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1E1E1E]/95 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-[#C9A227] text-3xl font-bold">DS</span>

            <div>
              <h2 className="text-white font-bold">دکور شاهان</h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white">
            <Link href="/">صفحه اصلی</Link>

            <Link href="/services">خدمات</Link>

            <Link href="/portfolio">نمونه کارها</Link>

            <Link href="/about">درباره ما</Link>

            <Link href="/contact">تماس با ما</Link>
          </nav>

          {/* CTA */}
          <button
            className="
            hidden lg:block
            bg-[#C9A227]
            px-5
            py-2
            rounded-xl
            text-white
            hover:bg-[#b7921d]
            transition
            "
          >
            مشاوره رایگان
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#1E1E1E] border-t border-gray-700">
          <div className="flex flex-col p-6 gap-5 text-white">
            <Link href="/">صفحه اصلی</Link>

            <Link href="/services">خدمات</Link>

            <Link href="/portfolio">نمونه کارها</Link>

            <Link href="/about">درباره ما</Link>

            <Link href="/contact">تماس با ما</Link>
          </div>
        </div>
      )}
    </header>
  );
}
