'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, signOut, isLoading } = useAuth();
  const { showToast } = useToast();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    showToast('Terima kasih sudah berkunjung! Sampai jumpa kembali 👋', 'info');
    
    // Delay sedikit untuk memastikan toast muncul sebelum redirect
    setTimeout(async () => {
      await signOut();
    }, 1000);
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

            {/* Auth Buttons or Profile */}
            {isLoading ? (
              <div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
            ) : user ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 rounded-lg transition-colors hover:bg-red-500/10"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-white rounded-lg transition-colors hover:bg-slate-800/70"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Daftar
                </Link>
              </div>
            )}
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

              {/* Mobile Auth Buttons */}
              {isLoading ? (
                <div className="flex justify-center py-3">
                  <div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
                </div>
              ) : user ? (
                <>
                  <div className="px-4 py-3 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {user.email?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.email?.split('@')[0]}</p>
                        <p className="text-slate-400 text-sm truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 p-2 border-t border-slate-800">
                  <Link
                    href="/login"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-white hover:bg-slate-800/70 transition-all duration-200"
                  >
                    <span className="font-medium">Login</span>
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    <span className="font-medium">Daftar</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 