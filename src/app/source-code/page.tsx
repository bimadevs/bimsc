'use client';

import { useState } from 'react';
import Header from '../components/Header';
import SourceCodeCard from '../components/SourceCodeCard';
import { sourceCodeData, categories } from '@/data/sourceCodeData';

export default function SourceCodeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState<'newest' | 'downloads'>('newest');

  const filteredData = sourceCodeData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'downloads') {
      return b.downloadCount - a.downloadCount;
    }
    // For 'newest', we're using the ID as a proxy for date (in a real app, we'd use actual dates)
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Source Code
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari source code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-300 placeholder-slate-500"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'downloads')}
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-300"
            >
              <option value="newest">Terbaru</option>
              <option value="downloads">Terpopuler</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-300 border border-slate-800 hover:border-purple-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {sortedData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedData.map((item) => (
              <SourceCodeCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-900 rounded-lg border border-slate-800">
            <h3 className="text-xl font-medium text-slate-300">
              Tidak ada source code yang ditemukan
            </h3>
            <p className="text-slate-400 mt-2">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 