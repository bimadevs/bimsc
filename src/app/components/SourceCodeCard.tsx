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
  author,
}: SourceCode) => {
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
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
            {category}
          </span>
          <Link
            href={`https://github.com/${author.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
          >
            by {author.name}
          </Link>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-1 text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-end">
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