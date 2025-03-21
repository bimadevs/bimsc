'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { SourceCode } from '@/data/sourceCodeData';

const SourceCodeCard = ({
  id,
  title,
  description,
  thumbnail,
  category,
  isNew,
  demoUrl,
  author,
  languages = [],
  technologies = [],
}: SourceCode) => {
  const safeLanguages = Array.isArray(languages) ? languages : [];
  const safeTechnologies = Array.isArray(technologies) ? technologies : [];

  return (
    <div className="group bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 border border-slate-800 relative">
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full animate-pulse">
          NEW
        </div>
      )}
      
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        
        {/* Preview Badge */}
        {!demoUrl && (
          <div className="absolute bottom-3 right-3 z-10 px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-400 text-xs font-medium rounded-md border border-slate-700/50 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No Preview
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
            {category}
          </span>
          <span className="text-sm text-blue-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            by {author.name}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-1 text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{description}</p>
        
        {/* Languages and Technologies */}
        <div className="space-y-2 mb-4">
          {/* Languages */}
          {safeLanguages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {safeLanguages.slice(0, 2).map((lang) => (
                <Link 
                  key={lang} 
                  href={`/source-code?language=${encodeURIComponent(lang)}`}
                  className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded border border-green-500/20 hover:bg-green-500/20 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  {lang}
                </Link>
              ))}
              {safeLanguages.length > 2 && (
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-400 rounded border border-slate-700">
                  +{safeLanguages.length - 2}
                </span>
              )}
            </div>
          )}
          
          {/* Technologies */}
          {safeTechnologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {safeTechnologies.slice(0, 2).map((tech) => (
                <Link 
                  key={tech} 
                  href={`/source-code?technology=${encodeURIComponent(tech)}`}
                  className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 hover:bg-blue-500/20 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {tech}
                </Link>
              ))}
              {safeTechnologies.length > 2 && (
                <span className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-400 rounded border border-slate-700">
                  +{safeTechnologies.length - 2}
                </span>
              )}
            </div>
          )}
          
          {/* Tampilkan label jika tidak ada bahasa dan teknologi */}
          {safeLanguages.length === 0 && safeTechnologies.length === 0 && (
            <div className="px-2 py-1 text-xs font-medium bg-slate-800 text-slate-400 rounded border border-slate-700 inline-block">
              Belum ada detail teknologi
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {demoUrl ? (
            <span className="text-xs text-green-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Demo Available
            </span>
          ) : (
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Preview Unavailable
            </span>
          )}
          <Link
            href={`/source-code/${id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SourceCodeCard; 