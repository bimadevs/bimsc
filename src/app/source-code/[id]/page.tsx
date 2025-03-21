'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { sourceCodeData } from '@/data/sourceCodeData';
import { downloadFromGithub } from '@/utils/github';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import SourceCodePromo from '@/app/components/SourceCodePromo';
import TechnologyList from '@/app/components/TechnologyList';

export default function SourceCodeDetail({ params }: { params: { id: string } }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'usage'>('features');
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();
  const { showToast } = useToast();

  const sourceCode = sourceCodeData.find((item) => item.id === params.id);

  // Memastikan languages dan technologies selalu array, bahkan jika undefined
  const safeLanguages = sourceCode && Array.isArray(sourceCode.languages) ? sourceCode.languages : [];
  const safeTechnologies = sourceCode && Array.isArray(sourceCode.technologies) ? sourceCode.technologies : [];

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
    // Cek apakah pengguna sudah login
    if (!user) {
      setDownloadError('Silakan login untuk mendownload source code');
      setTimeout(() => {
        router.push(`/login?redirect=/source-code/${params.id}`);
      }, 1500);
      return;
    }

    setIsDownloading(true);
    setDownloadError(null);

    try {
      // Panggil API endpoint download
      const response = await fetch(`/api/download?id=${params.id}`);

      // Cek status respons
      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Terjadi kesalahan saat mendownload';

        try {
          // Coba parse sebagai JSON jika memungkinkan
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // Jika bukan JSON, gunakan text sebagai pesan error
          errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage);
      }

      // Jika respons OK, coba parse JSON
      let data;
      try {
        const responseText = await response.text();
        data = JSON.parse(responseText);
      } catch (e) {
        throw new Error('Format respons tidak valid');
      }

      // Jika berhasil, download dari GitHub
      if (data && data.githubUrl) {
        await downloadFromGithub(data.githubUrl);

        // Tampilkan toast "Happy Coding" dengan delay kecil untuk memastikan download dimulai dulu
        setTimeout(() => {
          showToast(`Happy Coding! Selamat mengeksplorasi source code ${data.title} 🚀`, 'success', 5000);
        }, 500);
      } else {
        throw new Error('Data URL GitHub tidak ditemukan');
      }
    } catch (error) {
      console.error('Error downloading:', error);
      setDownloadError(error instanceof Error ? error.message : 'Terjadi kesalahan saat mendownload');
    } finally {
      setIsDownloading(false);
    }
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
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <span className="text-blue-400">
                        {sourceCode.author.name}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                    {sourceCode.description}
                  </p>

                  {/* Languages */}
                  <TechnologyList technologies={sourceCode.languages} type="language" />

                  {/* Technologies */}
                  <TechnologyList technologies={sourceCode.technologies} type="technology" />
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
                  {sourceCode.demoUrl ? (
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
                  ) : (
                    <div
                      className="flex-1 border border-slate-700/50 text-slate-500 px-6 py-3 rounded-lg font-semibold bg-slate-800/30 flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Preview Unavailable
                    </div>
                  )}
                </div>

                {/* Download Error Message */}
                {downloadError && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{downloadError}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features and Usage Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-slate-800/70 mb-8">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === 'features'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-slate-300 transition-colors'
                }`}
            >
              Fitur
            </button>
            {/* <button
              onClick={() => setActiveTab('usage')}
              className={`px-6 py-3 font-medium text-sm focus:outline-none ${
                activeTab === 'usage'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-slate-300 transition-colors'
              }`}
            >
              Cara Penggunaan
            </button>
            */}
          </div>

          <div className="p-1">
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Fitur Utama</h3>
                <ul className="space-y-4">
                  {sourceCode.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Promo for custom development */}
            <SourceCodePromo sourceCodeTitle={sourceCode.title} />

            {/* {activeTab === 'usage' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Cara Penggunaan</h3>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                  <h4 className="text-lg font-medium text-white mb-4">1. Clone Repository</h4>
                  <div className="bg-slate-900 rounded p-4 mb-6 overflow-x-auto">
                    <pre className="text-slate-300 text-sm">
                      <code>git clone {sourceCode.githubUrl}.git</code>
                    </pre>
                  </div>

                  <h4 className="text-lg font-medium text-white mb-4">2. Install Dependencies</h4>
                  <div className="bg-slate-900 rounded p-4 mb-6 overflow-x-auto">
                    <pre className="text-slate-300 text-sm">
                      <code>{`cd ${sourceCode.githubUrl.split('/').pop()}
npm install
# atau
yarn install`}</code>
                    </pre>
                  </div>

                  <h4 className="text-lg font-medium text-white mb-4">3. Jalankan Aplikasi</h4>
                  <div className="bg-slate-900 rounded p-4 overflow-x-auto">
                    <pre className="text-slate-300 text-sm">
                      <code>{`npm run dev
# atau
yarn dev`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>

        {/* Related Source Code */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Source Code Terkait</h2>

          {(() => {
            // Find source codes with similar technologies
            const relatedSourceCodes = sourceCodeData
              .filter(item =>
                item.id !== sourceCode.id && // Exclude current source code
                item.technologies.some(tech =>
                  safeTechnologies.includes(tech)
                )
              )
              .slice(0, 3); // Limit to 3 items

            if (relatedSourceCodes.length === 0) {
              return (
                <p className="text-slate-400">Tidak ada source code terkait yang ditemukan.</p>
              );
            }

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedSourceCodes.map((item) => (
                  <Link
                    key={item.id}
                    href={`/source-code/${item.id}`}
                    className="block group bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-800 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

                      {/* Category Badge */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })()}
        </div>
      </main>
    </div>
  );
} 
