"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-2xl">A.S.A</span>
        </div>

        {/* pc */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-black">
          <Link href="#hero" scroll className="px-5 py-2 rounded-md hover:bg-black hover:text-white transition">HOME</Link>
          <span>/</span>
          <Link href="#about" scroll className="px-5 py-2 rounded-md hover:bg-black hover:text-white transition">ABOUT</Link>
          <span>/</span>
          <Link href="#skills" scroll className="px-5 py-2 rounded-md hover:bg-black hover:text-white transition">SKILLS</Link>
          <span>/</span>
          <Link href="#portfolio" scroll className="px-5 py-2 rounded-md hover:bg-black hover:text-white transition">PORTFOLIO</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="#contact" scroll className="px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            CONTACT
          </Link>
        </div>

        {/* hp */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none flex flex-col justify-center gap-1"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>
      </div>
      {/* hp Slide */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20">
          <Link href="#hero" scroll className="block px-6 py-4 border-b border-gray-200" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="#about" scroll className="block px-6 py-4 border-b border-gray-200" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link href="#skills" scroll className="block px-6 py-4 border-b border-gray-200" onClick={() => setIsOpen(false)}>SKILLS</Link>
          <Link href="#portfolio" scroll className="block px-6 py-4 border-b border-gray-200" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link href="#portfolio" className="w-full text-left px-6 py-4 border-t border-gray-200" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
