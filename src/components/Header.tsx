"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyBlog
        </Link>

        <nav>
          {/* Desktop Menu */}
          <div  className="hidden md:flex space-x-8 text-black">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-3">
          <Link href="/" className="block py-2 hover:text-blue-400">Home</Link>
          <Link href="/blog" className="block py-2 hover:text-blue-400">About</Link>
          <Link href="/about" className="block py-2 hover:text-blue-400">Projects</Link>
        </div>
      )}
    </header>
  );
}