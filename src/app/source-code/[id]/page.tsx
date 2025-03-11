'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { sourceCodeData } from '@/data/sourceCodeData';
import { downloadFromGithub } from '@/utils/github';

export default function SourceCodeDetail({ params }: { params: { id: string } }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');

  const sourceCode = sourceCodeData.find((item) => item.id === params.id);

  if (!sourceCode) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-slate-800/50">
              <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              Source code tidak ditemukan
            </h3>
            <p className="text-slate-400 max-w-md mx-auto mb-6">
              Source code yang Anda cari tidak tersedia atau telah dihapus
            </p>
            <Link
              href="/source-code"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Kembali ke Source Code
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadFromGithub(sourceCode.githubUrl);
    } catch (error) {
      console.error('Error downloading:', error);
    }
    setIsDownloading(false);
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

      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/source-code" className="hover:text-purple-400 transition-colors">
            Source Code
          </Link>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-purple-400">{sourceCode.title}</span>
        </div>

        {/* Main Content */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden mb-10">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full rounded-xl overflow-hidden group">
                <Image
                  src={sourceCode.thumbnail}
                  alt={sourceCode.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                    {sourceCode.category}
                  </span>
                </div>
                
                {/* New Badge */}
                {sourceCode.isNew && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full animate-pulse">
                    NEW
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="flex flex-col">
                <div className="mb-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                      {sourceCode.title}
                    </h1>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <Link
                        href={`https://github.com/${sourceCode.author.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-400 transition-colors"
                      >
                        {sourceCode.author.name}
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                    {sourceCode.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {sourceCode.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-800/80 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-purple-500/30 hover:bg-slate-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isDownloading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Source Code
                      </>
                    )}
                  </button>
                  {sourceCode.demoUrl && (
                    <a
                      href={sourceCode.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-purple-500/50 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-800">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'features'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fitur
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === 'usage'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cara Penggunaan
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Fitur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sourceCode.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Cara Penggunaan</h2>
                <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-slate-500">Terminal</div>
                  </div>
                  <pre className="text-sm text-slate-300 font-mono">
                    <code>{`# Clone repository
git clone ${sourceCode.githubUrl}

# Masuk ke direktori project
cd ${sourceCode.githubUrl.split('/').pop()}

# Install dependencies
npm install

# Run development server
npm run dev

# Buka browser di http://localhost:3000`}</code>
                  </pre>
                </div>
                
                <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-blue-300 font-medium mb-1">Catatan</p>
                      <p className="text-slate-400">
                        Pastikan Anda telah menginstal Node.js dan npm di komputer Anda. Untuk informasi lebih lanjut, silakan baca dokumentasi di GitHub repository.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Source Codes */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Source Code Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourceCodeData
              .filter(item => item.category === sourceCode.category && item.id !== sourceCode.id)
              .slice(0, 3)
              .map(item => (
                <Link
                  key={item.id}
                  href={`/source-code/${item.id}`}
                  className="block group bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                    {item.isNew && (
                      <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-3">{item.description}</p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                      {item.category}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
} 