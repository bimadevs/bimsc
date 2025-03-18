'use client';

import Link from 'next/link';

interface TechnologyListProps {
  technologies?: string[];
  type?: 'technology' | 'language';
}

const TechnologyList = ({ technologies = [], type = 'technology' }: TechnologyListProps) => {
  // Memastikan technologies selalu array, bahkan jika undefined
  const safeTechnologies = Array.isArray(technologies) ? technologies : [];

  // Atur properti UI berdasarkan tipe (teknologi atau bahasa)
  const uiProps = {
    language: {
      title: 'Bahasa Pemrograman',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      hoverBorderColor: 'hover:border-green-500/30',
      hoverBgColor: 'hover:bg-green-500/20',
      hoverTextColor: 'hover:text-green-300',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    technology: {
      title: 'Teknologi',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-700/20',
      hoverBorderColor: 'hover:border-blue-500/30',
      hoverBgColor: 'hover:bg-blue-500/20',
      hoverTextColor: 'hover:text-blue-300',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  };

  const { title, bgColor, textColor, borderColor, hoverBorderColor, hoverBgColor, hoverTextColor, icon } = uiProps[type];

  return (
    <div className={type === 'language' ? "mb-6" : "mb-8"}>
      <h3 className="text-white font-semibold mb-3">{title}</h3>

      {safeTechnologies.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {safeTechnologies.map((tech) => (
            <Link
              key={tech}
              href={`/source-code?${type}=${encodeURIComponent(tech)}`}
              className={`px-4 py-2 ${bgColor} rounded-full text-sm ${textColor} border ${borderColor} ${hoverBorderColor} ${hoverBgColor} ${hoverTextColor} transition-colors flex items-center gap-2`}
            >
              {icon}
              {tech}
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-400 text-sm inline-block">
          Tidak ada informasi {type === 'language' ? 'bahasa pemrograman' : 'teknologi'}
        </div>
      )}
    </div>
  );
};

export default TechnologyList; 
