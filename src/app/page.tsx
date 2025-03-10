import Header from './components/Header';
import SourceCodeCard from './components/SourceCodeCard';
import { sourceCodeData, categories } from '@/data/sourceCodeData';
import Link from 'next/link';
import Image from 'next/image';

// Get the latest 3 source codes
const latestSourceCodes = [...sourceCodeData]
  .sort((a, b) => parseInt(b.id) - parseInt(a.id))
  .slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section Baru */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background dengan efek nebula */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-950 to-slate-950" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random() * 0.5 + 0.2})`,
                boxShadow: `0 0 ${Math.random() * 10}px rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.5)`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Source Code
                  </span>
                  <br />
                  <span className="text-white">
                    Untuk Project
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                    Anda
                  </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl">
                  Temukan berbagai source code berkualitas untuk mempercepat development project Anda. 
                  Mulai dari template website hingga aplikasi kompleks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/source-code"
                  className="relative group px-8 py-4 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                    Jelajahi Source Code
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/categories"
                  className="relative group px-8 py-4 rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800"
                >
                  <span className="relative flex items-center justify-center gap-2 text-slate-300 font-semibold group-hover:text-white transition-colors">
                    Lihat Kategori
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {sourceCodeData.length}+
                  </div>
                  <div className="text-slate-400">Source Code</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {categories.length - 1}+
                  </div>
                  <div className="text-slate-400">Kategori</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
                    100%
                  </div>
                  <div className="text-slate-400">Gratis</div>
                </div>
              </div>
            </div>

            {/* Decorative Image/Animation */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-10 bg-slate-900/90 rounded-2xl backdrop-blur-sm border border-slate-800/50 p-8 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="h-full w-full bg-slate-900 rounded-lg p-4 space-y-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded animate-pulse" />
                    <div className="h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Source Code Section dengan efek glassmorphism */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Source Code Terbaru
              </span>
            </h2>
            <Link
              href="/source-code"
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
            >
              Lihat Semua
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSourceCodes.map((item) => (
              <SourceCodeCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section dengan desain modern */}
      <section className="py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Kategori Populer
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.filter(category => category !== 'Semua').map((category) => (
              <Link
                key={category}
                href={`/source-code?category=${category.toLowerCase().replace(' ', '-')}`}
                className="group relative p-6 rounded-xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl transition-colors group-hover:border-purple-500/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <h3 className="font-semibold text-lg text-slate-300 group-hover:text-purple-400 transition-colors mb-2">
                    {category}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                    </svg>
                    {sourceCodeData.filter(item => item.category === category).length} Source Code
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Siap untuk Memulai Project Anda?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Temukan source code yang Anda butuhkan dan mulai development dengan lebih cepat
          </p>
          <Link
            href="/source-code"
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
