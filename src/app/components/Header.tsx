'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut, isLoading } = useAuth();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
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
    setIsProfileMenuOpen(false);
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
              <div className="relative">
                <button
                  onClick={handleProfileMenuToggle}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800/70 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-lg shadow-purple-900/20 border border-slate-800/50 overflow-hidden">
                    <div className="p-2 border-b border-slate-800">
                      <p className="text-white font-medium truncate">{user.email}</p>
                    </div>
                    <div className="p-1">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profil
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Pengaturan
                      </Link>
                    </div>
                    <div className="p-1 border-t border-slate-800">
                      <button
                        onClick={signOut}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 w-full text-left"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
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
                  <Link
                    href="/dashboard"
                    className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800/70 hover:text-white transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Profil</span>
                  </Link>
                  <button
                    onClick={signOut}
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