'use client';

import Link from 'next/link';
import Header from '../components/Header';
import { sourceCodeData, categories } from '@/data/sourceCodeData';

export default function Categories() {
  // Menghitung jumlah source code per kategori
  const categoryCount = categories.reduce((acc, category) => {
    if (category === 'Semua') return acc;
    const count = sourceCodeData.filter(item => item.category === category).length;
    return { ...acc, [category]: count };
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-8">
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
          {[...Array(5)].map((_, i) => (
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

        <div className="mb-12 text-center relative">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient bg-300%">
            Kategori Source Code
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Temukan berbagai source code berkualitas dalam berbagai kategori untuk kebutuhan development Anda
          </p>
          
          {/* Orbiting Planet */}
          <div className="absolute -top-16 -right-16 opacity-30 pointer-events-none hidden md:block">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" />
              <div className="absolute inset-[3px] rounded-full bg-slate-950" />
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(category => category !== 'Semua').map((category, index) => (
            <Link
              key={category}
              href={`/source-code?category=${category}`}
              className="block group relative bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-800 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-sm -z-10" />
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {category}
                  </h2>
                  <span className="px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20 group-hover:animate-pulse">
                    {categoryCount[category]} Source Code
                  </span>
                </div>

                <div className="space-y-2 mb-6 flex-grow">
                  {sourceCodeData
                    .filter(item => item.category === category)
                    .slice(0, 3)
                    .map(item => (
                      <div
                        key={item.id}
                        className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                      >
                        <span className="text-purple-400">•</span>
                        {item.title}
                      </div>
                    ))
                  }
                  {categoryCount[category] > 3 && (
                    <div className="text-slate-500 text-sm pl-4">
                      Dan {categoryCount[category] - 3} source code lainnya...
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  Lihat Semua
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}