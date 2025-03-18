'use client';

import { useState } from 'react';

interface SourceCodePromoProps {
  sourceCodeTitle: string;
}

const SourceCodePromo = ({ sourceCodeTitle }: SourceCodePromoProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // WhatsApp URL - Ganti dengan nomor WhatsApp Anda
  const whatsappUrl = `https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20dengan%20source%20code%20${encodeURIComponent(sourceCodeTitle)}%20dan%20ingin%20bertanya%20tentang%20jasa%20pengembangan%20custom.`;

  if (!isOpen) return null;

  return (
    <div className="rounded-xl mt-8 overflow-hidden bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 shadow-lg mb-10 group">
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-1 z-10"
        aria-label="Tutup promosi"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-full h-full text-purple-500" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      </div>

      <div className="p-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3">Butuh Implementasi Custom?</h3>
            <p className="text-slate-300 mb-4">
              Tertarik dengan <span className="text-purple-400 font-medium">{sourceCodeTitle}</span> tapi membutuhkan
              fitur tambahan atau penyesuaian khusus? Saya dapat membantu mengembangkan versi khusus
              sesuai kebutuhan Anda.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Implementasi fitur custom</span>
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integrasi dengan sistem yang sudah ada</span>
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dukungan teknis dan pemeliharaan</span>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 md:w-auto w-full">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-purple-500/20 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCodePromo; 
