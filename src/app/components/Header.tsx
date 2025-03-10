'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 transition-all">
            BimSC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-300 hover:text-purple-400 transition-colors">
              Beranda
            </Link>
            <Link href="/source-code" className="text-slate-300 hover:text-purple-400 transition-colors">
              Source Code
            </Link>
            <Link href="/categories" className="text-slate-300 hover:text-purple-400 transition-colors">
              Kategori
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-purple-400 transition-colors">
              Tentang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-slate-800 rounded-lg p-4">
            <Link
              href="/"
              className="block text-slate-300 hover:text-purple-400 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/source-code"
              className="block text-slate-300 hover:text-purple-400 transition-colors"
            >
              Source Code
            </Link>
            <Link
              href="/categories"
              className="block text-slate-300 hover:text-purple-400 transition-colors"
            >
              Kategori
            </Link>
            <Link
              href="/about"
              className="block text-slate-300 hover:text-purple-400 transition-colors"
            >
              Tentang
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 