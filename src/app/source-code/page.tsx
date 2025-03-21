'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import SourceCodeCard from '../components/SourceCodeCard';
import { sourceCodeData, categories, Category } from '@/data/sourceCodeData';

export default function SourceCodeList() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const languageParam = searchParams.get('language');
  const technologyParam = searchParams.get('technology');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categoryParam && categories.includes(categoryParam as Category) 
      ? categoryParam as Category 
      : 'Semua'
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languageParam || 'Semua'
  );
  const [selectedTechnology, setSelectedTechnology] = useState<string>(
    technologyParam || 'Semua'
  );

  // Extract all unique programming languages from the data
  const programmingLanguages = useMemo(() => {
    const languagesSet = new Set<string>();
    languagesSet.add('Semua');
    
    sourceCodeData.forEach(item => {
      item.languages.forEach(lang => {
        languagesSet.add(lang);
      });
    });
    
    return Array.from(languagesSet).sort();
  }, []);

  // Extract all unique technologies from the data
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    techSet.add('Semua');
    
    sourceCodeData.forEach(item => {
      item.technologies.forEach(tech => {
        techSet.add(tech);
      });
    });
    
    return Array.from(techSet).sort();
  }, []);

  // Get popular programming languages (languages used in more than one source code)
  const popularLanguages = useMemo(() => {
    const languageCounts = new Map<string, number>();
    
    sourceCodeData.forEach(item => {
      item.languages.forEach(lang => {
        languageCounts.set(lang, (languageCounts.get(lang) || 0) + 1);
      });
    });
    
    // Sort by count (descending) and take top 5
    return Array.from(languageCounts.entries())
      .filter(([_, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([language]) => language);
  }, []);

  // Get popular technologies (technologies used in more than one source code)
  const popularTechnologies = useMemo(() => {
    const techCounts = new Map<string, number>();
    
    sourceCodeData.forEach(item => {
      item.technologies.forEach(tech => {
        techCounts.set(tech, (techCounts.get(tech) || 0) + 1);
      });
    });
    
    // Sort by count (descending) and take top 5
    return Array.from(techCounts.entries())
      .filter(([_, count]) => count > 1)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([technology]) => technology);
  }, []);

  // Get language counts
  const languageCounts = useMemo(() => {
    const counts = new Map<string, number>();
    
    sourceCodeData.forEach(item => {
      item.languages.forEach(lang => {
        counts.set(lang, (counts.get(lang) || 0) + 1);
      });
    });
    
    return counts;
  }, []);

  // Get technology counts
  const technologyCounts = useMemo(() => {
    const counts = new Map<string, number>();
    
    sourceCodeData.forEach(item => {
      item.technologies.forEach(tech => {
        counts.set(tech, (counts.get(tech) || 0) + 1);
      });
    });
    
    return counts;
  }, []);

  // Update selected filters when URL parameters change
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam as Category)) {
      setSelectedCategory(categoryParam as Category);
    }
    
    if (languageParam) {
      setSelectedLanguage(languageParam);
    }

    if (technologyParam) {
      setSelectedTechnology(technologyParam);
    }
  }, [categoryParam, languageParam, technologyParam]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== 'Semua') {
      params.set('category', selectedCategory);
    }
    
    if (selectedLanguage !== 'Semua') {
      params.set('language', selectedLanguage);
    }

    if (selectedTechnology !== 'Semua') {
      params.set('technology', selectedTechnology);
    }
    
    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
    window.history.replaceState({}, '', newUrl);
  }, [selectedCategory, selectedLanguage, selectedTechnology]);

  const filteredData = sourceCodeData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'Semua' || item.languages.includes(selectedLanguage);
    const matchesTechnology = selectedTechnology === 'Semua' || item.technologies.includes(selectedTechnology);
    return matchesSearch && matchesCategory && matchesLanguage && matchesTechnology;
  });

  // Sort by newest (higher ID = newer)
  const sortedData = [...filteredData].sort((a, b) => parseInt(b.id) - parseInt(a.id));

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Semua');
    setSelectedLanguage('Semua');
    setSelectedTechnology('Semua');
  };

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
        {/* Header Section with Gradient Background */}
        <div className="relative mb-12 p-8 rounded-2xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-slate-900/10 backdrop-blur-sm border border-slate-800/50 -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient bg-300%">
                {selectedCategory === 'Semua' ? 'Semua Source Code' : `Source Code ${selectedCategory}`}
              </h1>
              <p className="text-slate-400 max-w-2xl">
                Temukan berbagai source code berkualitas untuk mempercepat development project Anda
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-slate-500"
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
              <input
                type="text"
                placeholder="Cari source code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-3 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-300 placeholder-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-medium mb-3">Kategori:</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Programming Languages Filter */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-medium mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Bahasa Pemrograman:
          </h2>
          
          {/* Popular Languages */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setSelectedLanguage('Semua')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedLanguage === 'Semua'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10'
              }`}
            >
              Semua <span className="ml-1 text-xs opacity-70">({sourceCodeData.length})</span>
            </button>
            
            {popularLanguages.map((language) => (
              <button
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedLanguage === language
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                    : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10'
                }`}
              >
                {language} <span className="ml-1 text-xs opacity-70">({languageCounts.get(language)})</span>
              </button>
            ))}
          </div>
          
          {/* All Languages */}
          <details className="group">
            <summary className="cursor-pointer text-sm text-slate-400 hover:text-green-400 transition-colors flex items-center gap-1 mb-3">
              <svg 
                className="w-4 h-4 transform transition-transform group-open:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Tampilkan semua bahasa
            </summary>
            <div className="flex flex-wrap gap-3 mt-3">
              {programmingLanguages
                .filter(lang => lang !== 'Semua' && !popularLanguages.includes(lang))
                .map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedLanguage === language
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                      : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10'
                  }`}
                >
                  {language} <span className="ml-1 text-xs opacity-70">({languageCounts.get(language)})</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Technologies Filter */}
        <div className="mb-10">
          <h2 className="text-white text-lg font-medium mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Teknologi:
          </h2>
          
          {/* Popular Technologies */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setSelectedTechnology('Semua')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedTechnology === 'Semua'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
              }`}
            >
              Semua <span className="ml-1 text-xs opacity-70">({sourceCodeData.length})</span>
            </button>
            
            {popularTechnologies.map((technology) => (
              <button
                key={technology}
                onClick={() => setSelectedTechnology(technology)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedTechnology === technology
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                {technology} <span className="ml-1 text-xs opacity-70">({technologyCounts.get(technology)})</span>
              </button>
            ))}
          </div>
          
          {/* All Technologies */}
          <details className="group">
            <summary className="cursor-pointer text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 mb-3">
              <svg 
                className="w-4 h-4 transform transition-transform group-open:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Tampilkan semua teknologi
            </summary>
            <div className="flex flex-wrap gap-3 mt-3">
              {allTechnologies
                .filter(tech => tech !== 'Semua' && !popularTechnologies.includes(tech))
                .map((technology) => (
                <button
                  key={technology}
                  onClick={() => setSelectedTechnology(technology)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedTechnology === technology
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                >
                  {technology} <span className="ml-1 text-xs opacity-70">({technologyCounts.get(technology)})</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-slate-400">
            Menampilkan <span className="text-white font-semibold">{sortedData.length}</span> source code
            {selectedCategory !== 'Semua' && (
              <> dalam kategori <span className="text-purple-400 font-semibold">{selectedCategory}</span></>
            )}
            {selectedLanguage !== 'Semua' && (
              <> dengan bahasa <span className="text-green-400 font-semibold">{selectedLanguage}</span></>
            )}
            {selectedTechnology !== 'Semua' && (
              <> menggunakan teknologi <span className="text-blue-400 font-semibold">{selectedTechnology}</span></>
            )}
            {searchQuery && (
              <> dengan kata kunci <span className="text-amber-400 font-semibold">"{searchQuery}"</span></>
            )}
          </p>
        </div>

        {/* Source Code Grid */}
        {sortedData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedData.map((item) => (
              <SourceCodeCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-slate-800/50">
              <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Tidak ada source code yang ditemukan
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Coba ubah filter atau kata kunci pencarian Anda untuk menemukan source code yang Anda cari
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </main>
    </div>
  );
} 