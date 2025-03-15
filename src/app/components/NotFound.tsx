'use client';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full">
        {/* Black Hole Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="relative w-64 h-64">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Inner Black Hole */}
            <div className="absolute inset-[4px] rounded-full bg-slate-950" />
            
            {/* Accretion Disk */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-spin"
                style={{
                  animationDuration: `${10 + i * 5}s`,
                  transform: `scale(${1.2 + i * 0.2})`
                }}
              />
            ))}
            
            {/* Particles being sucked in */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-blackhole"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative text-center">
          <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-none">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-white mb-4">
            Halaman Hilang di Lubang Hitam
          </h2>
          
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Sepertinya halaman yang Anda cari telah tersedot ke dalam lubang hitam.
            Jangan khawatir, masih banyak galaksi lain untuk dijelajahi!
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        {/* Stars Background */}
        <div className="fixed inset-0 -z-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound; 