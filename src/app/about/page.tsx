import Header from '../components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Stars Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
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

      {/* Meteors */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-meteor"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`
            }}
          >
            <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent transform -rotate-45" />
          </div>
        ))}
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 mt-10 flex items-center text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-purple-400">Tentang Kami</span>
        </div>

        {/* Hero Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-slate-900/10 backdrop-blur-sm -z-10" />

          <div className="py-16 px-8 text-center relative">
            {/* Orbiting Planet */}
            <div className="absolute top-8 right-8 opacity-30 pointer-events-none hidden md:block">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" />
                <div className="absolute inset-[3px] rounded-full bg-slate-950" />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient bg-300%">
              Tentang BimSC
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Platform berbagi source code berkualitas untuk membantu developer Indonesia mengembangkan aplikasi dan website.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision Section */}
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-6 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Visi Kami
              </h2>
              <p className="text-slate-400 leading-relaxed">
                BimSC hadir sebagai platform berbagi source code yang bertujuan untuk membantu
                para developer Indonesia dalam mengembangkan aplikasi dan website. Kami percaya bahwa
                berbagi pengetahuan dan resource adalah kunci untuk memajukan ekosistem pengembangan
                software di Indonesia.
              </p>
            </div>

            {/* What We Offer Section */}
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                Apa yang Kami Tawarkan
              </h2>
              <ul className="space-y-3">
                {[
                  'Source code berkualitas tinggi dengan dokumentasi lengkap',
                  'Berbagai kategori untuk berbagai kebutuhan development',
                  'Preview dan demo langsung untuk setiap project',
                  'Kemudahan dalam download dan implementasi',
                  'Update regular dengan source code terbaru',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="w-16 h-16 mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan, saran, atau ingin berkontribusi, jangan ragu untuk
                  menghubungi kami melalui:
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:bimadev06@gmail.com"
                    className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    bimadev06@gmail.com
                  </a>
                  <a
                    href="https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20dengan%20website%20BimSC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-green-500 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Planet */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse" style={{ animationDuration: '4s' }} />
                  <div className="absolute inset-[4px] rounded-full bg-slate-950" />

                  {/* Rings */}
                  <div className="absolute inset-[-20px] border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s', transform: 'rotateX(75deg)' }} />
                  <div className="absolute inset-[-40px] border-2 border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '25s', transform: 'rotateX(75deg) rotateY(10deg)' }} />

                  {/* Satellites */}
                  <div className="absolute inset-[-20px] animate-spin" style={{ animationDuration: '10s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                  </div>
                  <div className="absolute inset-[-40px] animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
