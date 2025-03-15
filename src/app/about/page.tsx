import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

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

          {/* Contribution Section */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-8 mb-16 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 -z-10" />
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="w-16 h-16 mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Kontribusi
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kami mengundang para developer untuk berkontribusi dalam pengembangan komunitas ini.
                  Anda dapat berkontribusi dengan cara:
                </p>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Membagikan source code project Anda',
                  'Memberikan feedback dan saran perbaikan',
                  'Melaporkan bug atau masalah',
                  'Membantu dokumentasi',
                  'Berbagi pengalaman dan pengetahuan',
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-green-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-slate-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                    href="https://github.com/bimadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    GitHub
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