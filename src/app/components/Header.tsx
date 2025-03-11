'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: '🏠' },
    { href: '/source-code', label: 'Source Code', icon: '📦' },
    { href: '/categories', label: 'Kategori', icon: '🔖' },
    { href: '/about', label: 'Tentang', icon: '📝' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/85 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
          : 'bg-slate-900/50 backdrop-blur-md'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-500/20 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group relative flex items-center"
          >
            <span className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur group-hover:opacity-100 transition-all duration-300"></span>
            <span className="relative text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
              BimSC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive(link.href) 
                    ? 'text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-lg backdrop-blur-sm z-0"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 to-blue-600/0 opacity-0 group-hover:from-purple-600/30 group-hover:to-blue-600/30 group-hover:opacity-100 transition-all duration-300 z-0"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-slate-300 hover:text-white transition-colors z-20"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'transform rotate-45 translate-y-1' : 'mb-1'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'mb-1'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-10 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-center text-lg font-medium transition-all duration-300 w-full max-w-xs py-3 px-6 rounded-xl ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-purple-600/50 to-blue-600/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 