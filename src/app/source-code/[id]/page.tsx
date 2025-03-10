'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { sourceCodeData } from '@/data/sourceCodeData';
import { downloadFromGithub } from '@/utils/github';

export default function SourceCodeDetail({ params }: { params: { id: string } }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const sourceCode = sourceCodeData.find((item) => item.id === params.id);

  if (!sourceCode) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12 bg-slate-900 rounded-lg border border-slate-800">
            <h3 className="text-xl font-medium text-slate-300">
              Source code tidak ditemukan
            </h3>
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

      <main className="container mx-auto px-4 py-8">
        <div className="bg-slate-900 rounded-lg border border-slate-800 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-96 group">
              <Image
                src={sourceCode.thumbnail}
                alt={sourceCode.title}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-white">{sourceCode.title}</h1>
                <Link
                  href={`https://github.com/${sourceCode.author.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                >
                  by {sourceCode.author.name}
                </Link>
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-400/10 rounded-full mb-4 border border-purple-400/20">
                {sourceCode.category}
              </span>
              <p className="text-slate-400 mb-6">{sourceCode.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {sourceCode.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isDownloading ? 'Downloading...' : 'Download'}
                </button>
                {sourceCode.demoUrl && (
                  <a
                    href={sourceCode.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-purple-500/50 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all transform hover:scale-105 text-center"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href={sourceCode.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
          <div className="p-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Fitur</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {sourceCode.features.map((feature) => (
                  <li key={feature} className="text-slate-400">
                    {feature}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4 text-white">Cara Penggunaan</h2>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <pre className="text-sm text-slate-300">
                  {`# Clone repository
git clone ${sourceCode.githubUrl}

# Install dependencies
npm install

# Run development server
npm run dev`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 