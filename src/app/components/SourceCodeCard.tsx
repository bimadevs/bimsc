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
          <Link
            href={`https://wa.me/6282254044783?text=Hai%2C%20saya%20tertarik%20dengan%20source%20code%20${encodeURIComponent(title)}%20karya%20${encodeURIComponent(author.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-400 hover:text-green-500 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            by {author.name}
          </Link>
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