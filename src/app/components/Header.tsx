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
    
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
    document.body.style.overflow = '';
  }, [pathname]);

  // Clean up overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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

        {/* Mobile Navigation - Slide from right */}
        <div 
          className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-slate-900/95 backdrop-blur-lg z-10 shadow-xl shadow-purple-900/30 transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            borderLeft: '1px solid rgba(139, 92, 246, 0.2)',
          }}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800/50">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Menu
            </span>
            <button
              onClick={handleMenuToggle}
              className="p-1 rounded-full hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Links */}
          <div className="py-6 px-4 overflow-y-auto h-[calc(100%-64px)]">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center text-base font-medium transition-all duration-300 w-full py-3 px-4 rounded-lg ${
                    isActive(link.href)
                      ? 'text-white bg-gradient-to-r from-purple-600/50 to-blue-600/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="text-xl mr-3">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  {isActive(link.href) && (
                    <span className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/50">
              <div className="rounded-lg bg-slate-800/50 p-4">
                <h4 className="text-sm font-medium text-slate-300 mb-2">BimSC</h4>
                <p className="text-xs text-slate-400">Platform source code untuk developer Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-0 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleMenuToggle}
        />
      </nav>
    </header>
  );
};

export default Header; 