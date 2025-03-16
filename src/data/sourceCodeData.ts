export interface SourceCode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  isNew?: boolean;
  githubUrl: string;
  demoUrl?: string;
  languages: string[];
  technologies: string[];
  features: string[];
  author: {
    name: string;
    github: string;
  };
}

export const sourceCodeData: SourceCode[] = [
  {
    id: '1',
    title: 'Realtime Chat Golang',
    description: 'Aplikasi chat realtime yang dibangun dengan Go dan WebSocket. Mendukung chat personal dan grup dengan performa tinggi.',
    thumbnail: '/images/chat-go.png',
    category: 'Backend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/realtime-chat-golang',
    languages: ['Go'],
    technologies: ['WebSocket', 'Redis', 'Docker', 'PostgreSQL'],
    features: [
      'Chat realtime dengan WebSocket',
      'Mendukung chat personal dan grup',
      'Sistem autentikasi pengguna',
      'Penyimpanan pesan dengan PostgreSQL',
      'Caching dengan Redis',
      'Containerization dengan Docker'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '2',
    title: 'PilihKu - Sistem E-Voting',
    description: 'Platform e-voting modern dan aman untuk pemilihan digital. Dilengkapi dengan sistem verifikasi dan enkripsi data.',
    thumbnail: '/images/pilihku.png',
    category: 'Full Stack',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/pilihku-E-Voting',
    demoUrl: 'https://pilihku.bimadev.xyz',
    languages: ['JavaScript'],
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Blockchain'],
    features: [
      'Sistem autentikasi multi-level',
      'Enkripsi data suara',
      'Dashboard admin komprehensif',
      'Verifikasi pemilih',
      'Hasil pemilihan realtime',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '3',
    title: 'Auto Generator Konten English',
    description: 'Tool otomatis untuk menghasilkan konten bahasa Inggris dengan AI. Cocok untuk content creator dan penulis.',
    thumbnail: '/images/generate-konten-eanglish.jpeg',
    category: 'AI Tools',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/autogeneratorkontenenglish',
    languages: ['Python', 'JavaScript'],
    technologies: ['Flask', 'React', 'TailwindCSS', 'OpenAI API'],
    features: [
      'Generasi konten otomatis',
      'Multiple content format',
      'AI-powered suggestions',
      'SEO optimization',
      'Export dalam berbagai format',
      'API integration'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '4',
    title: 'Crypto Tracker',
    description: 'Aplikasi tracking cryptocurrency dengan fitur realtime price updates dan portfolio management.',
    thumbnail: '/images/crypto-tracker.png',
    category: 'Web Development',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/crypto_tracker',
    demoUrl: 'https://crypto-tracker-demo.example.com',
    languages: ['JavaScript'],
    technologies: ['React', 'CoinGecko API', 'Chart.js', 'TailwindCSS', 'Firebase'],
    features: [
      'Realtime price updates',
      'Portfolio tracking',
      'Price alerts',
      'Historical data charts',
      'Watchlist management',
      'Market analysis tools'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '5',
    title: 'TikTok Downloader',
    description: 'Tool untuk mendownload video TikTok tanpa watermark. Mendukung download batch dan konversi format.',
    thumbnail: '/images/tiktok_downloader.png',
    category: 'Tools',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/tiktok-downloader',
    demoUrl: 'https://tiktok-dl.example.com',
    languages: ['Python', 'JavaScript'],
    technologies: ['FastAPI', 'React', 'FFmpeg', 'Redis'],
    features: [
      'Download tanpa watermark',
      'Batch download',
      'Format conversion',
      'Video quality selection',
      'Audio extraction',
      'URL batch processing'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '6',
    title: 'Keyboard Checker',
    description: 'Aplikasi web untuk mengecek fungsi keyboard dan mendeteksi tombol yang rusak atau tidak berfungsi.',
    thumbnail: '/images/keyboard-checker.png',
    category: 'Tools',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/keyboard-checker',
    demoUrl: 'https://keyboard-test.example.com',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['Web APIs'],
    features: [
      'Deteksi keypress realtime',
      'Visual keyboard layout',
      'Key combination testing',
      'Response time testing',
      'Multiple keyboard layouts',
      'Test result export'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '7',
    title: 'Bubble Game',
    description: 'Game casual berbasis web dengan grafis menarik dan gameplay addictive. Dibuat dengan vanilla JavaScript.',
    thumbnail: '/images/bubble-game.jpeg',
    category: 'Game Development',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/bubble-game',
    demoUrl: 'https://bubble-game.example.com',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['Canvas API'],
    features: [
      'Animasi smooth',
      'Multiple level',
      'Score tracking',
      'Sound effects',
      'Touch support',
      'Leaderboard system'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '8',
    title: 'URL Shortener',
    description: 'Aplikasi pemendek URL modern yang dibangun dengan Next.JS 14, supabase, dan tailwindcss. Dilengkapi dengan fitur autentikasi, pelacakan klik, dan manajemen link yang lengkap',
    thumbnail: '/images/nextjs-url-shortener.png',
    category: 'Full Stack',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/nextjs-url-shortener',
    demoUrl: 'https://url-shortener.bimadev.xyz',
    languages: ['TypeScript'],
    technologies: ['Next.JS', 'Supabase', 'TailwindCSS', 'BimsUI', 'Framer Motion'],
    features: [
      'Autentikasi pengguna',
      'Pelacakan klik',
      'Manajemen link',
      'Dashboard admin',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '10',
    title: 'Portofolio Cosmos',
    description: 'Website portofolio personal dengan tema luar angkasa yang menakjubkan. Dilengkapi dengan animasi galaksi, planet, dan elemen kosmik lainnya.',
    thumbnail: '/images/portofolio-cosmos.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/portofolio-cosmos',
    demoUrl: 'https://portofolio-cosmos.vercel.app',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Three.js'],
    features: [
      'Animasi luar angkasa yang interaktif',
      'Efek parallax untuk menciptakan kedalaman',
      'Visualisasi 3D dengan Three.js',
      'Mode gelap/terang dengan tema kosmik',
      'Responsif di semua perangkat',
      'Optimasi performa dengan Next.js',
      'Transisi halaman yang mulus'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '11',
    title: 'Portofolio Cyberpunk',
    description: 'Website portofolio dengan tema cyberpunk futuristik. Menampilkan desain neon, glitch effect, dan estetika retro-futuristik yang khas.',
    thumbnail: '/images/portofolio-cyberpunk.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/portofolio-cyberpunk',
    demoUrl: 'https://portofolio-cyberpunk.vercel.app',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'GSAP', 'CSS Grid'],
    features: [
      'Efek glitch dan distorsi digital',
      'Animasi neon yang dinamis',
      'UI dengan estetika cyberpunk',
      'Efek hover futuristik',
      'Responsif di semua perangkat',
      'Navigasi interaktif dengan animasi',
      'Integrasi dengan API GitHub'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '12',
    title: 'Portofolio Hacker Terminal',
    description: 'Website portofolio unik dengan antarmuka terminal hacker. Pengunjung dapat berinteraksi dengan website melalui perintah terminal seperti pengalaman CLI.',
    thumbnail: '/images/portofolio-terminal.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/portofolio-hacker-terminal',
    demoUrl: 'https://portofolio-terminal.vercel.app',
    languages: ['TypeScript', 'JavaScript'],
    technologies: ['React', 'Next.js', 'XTerm.js', 'TailwindCSS', 'Node.js'],
    features: [
      'Antarmuka terminal yang interaktif',
      'Perintah kustom untuk navigasi',
      'Simulasi hacking dan animasi kode',
      'Riwayat perintah dan autocomplete',
      'Easter eggs tersembunyi',
      'Mode akses admin dengan password',
      'Responsif di semua perangkat'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  }
];

export const categories = [
  'Semua',
  'Web Development',
  'Mobile Apps',
  'Full Stack',
  'Backend',
  'Frontend',
  'Game Development',
  'AI Tools',
  'Tools',
] as const;

export type Category = typeof categories[number]; 