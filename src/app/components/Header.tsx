'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useToast } from '@/context/ToastContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { showToast } = useToast();

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

      <nav className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group relative flex items-center"
          >
            <span className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur group-hover:opacity-100 transition-all duration-300"></span>
            <span className="relative text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
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
          <label className="hamburger md:hidden relative z-20">
            <input 
              type="checkbox" 
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        {/* Mobile Navigation - Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 mt-1 transition-all duration-300 transform origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-lg shadow-purple-900/20 border border-slate-800/50 mx-2 overflow-hidden">
            <div className="p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  <span className="text-lg mr-3">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                  {isActive(link.href) && (
                    <span className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </Link>
              ))}


            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 