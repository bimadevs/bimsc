'use client';

import { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // WhatsApp URL - Ganti dengan nomor WhatsApp Anda
  const whatsappUrl = 'https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20untuk%20membuat%20website%20%2F%20aplikasi%20custom.%20Bisakah%20Anda%20membantu%3F';

  // Menggunakan localStorage untuk menandai bahwa popup sudah ditampilkan
  useEffect(() => {
    // Periksa apakah popup sudah pernah ditampilkan dalam session ini
    const hasShownPopup = sessionStorage.getItem('hasShownWelcomePopup');

    if (!hasShownPopup) {
      // Delay menampilkan popup sedikit (3 detik)
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Tandai bahwa popup sudah ditampilkan dalam session ini
        sessionStorage.setItem('hasShownWelcomePopup', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Menutup popup
  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop dengan efek blur */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Popup Container */}
      <div className="relative max-w-lg w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/10 overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-1 z-10"
          aria-label="Tutup popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Galaxy background with stars */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-8 relative">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
              Butuh Bantuan Pembuatan Website?
            </h2>
            <p className="text-slate-300">
              Tawaran khusus untuk Anda yang mencari solusi pengembangan web profesional
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left Image */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="relative h-full w-full flex items-center justify-center">
                {/*
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-purple-400" fill="currentColor">
                 <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                */}
                <img src='./logo-color.svg' alt='Logo Bimadevs' />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3">Layanan Profesional</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Desain website modern & responsif</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performa tinggi & SEO-friendly</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Konsultasi teknis & pengembangan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg shadow-green-500/20 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Konsultasi Sekarang
            </a>
            <button
              onClick={closePopup}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors"
            >
              Nanti saja
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup; 
