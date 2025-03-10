export interface SourceCode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  downloadCount: number;
  githubUrl: string;
  demoUrl?: string;
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
    thumbnail: '/images/realtime-chat.jpg',
    category: 'Backend',
    downloadCount: 128,
    githubUrl: 'https://github.com/bimadevs/realtime-chat-golang',
    technologies: ['Go', 'WebSocket', 'Redis', 'Docker', 'PostgreSQL'],
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
    thumbnail: 'https://github.com/bimadevs/pilihku-E-Voting/docs/screenshots/login.png',
    category: 'Full Stack',
    downloadCount: 245,
    githubUrl: 'https://github.com/bimadevs/pilihku-E-Voting',
    demoUrl: 'https://pilihku-demo.example.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Blockchain'],
    features: [
      'Sistem autentikasi multi-level',
      'Enkripsi data suara',
      'Dashboard admin komprehensif',
      'Verifikasi pemilih',
      'Hasil pemilihan realtime',
      'Audit trail lengkap'
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
    thumbnail: '/images/content-generator.jpg',
    category: 'AI Tools',
    downloadCount: 367,
    githubUrl: 'https://github.com/bimadevs/autogeneratorkontenenglish',
    demoUrl: 'https://auto-content-gen.example.com',
    technologies: ['Python', 'OpenAI API', 'Flask', 'React', 'TailwindCSS'],
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
    thumbnail: '/images/crypto-tracker.jpg',
    category: 'Web Development',
    downloadCount: 189,
    githubUrl: 'https://github.com/bimadevs/crypto_tracker',
    demoUrl: 'https://crypto-tracker-demo.example.com',
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
    thumbnail: '/images/tiktok-downloader.jpg',
    category: 'Tools',
    downloadCount: 523,
    githubUrl: 'https://github.com/bimadevs/tiktok-downloader',
    demoUrl: 'https://tiktok-dl.example.com',
    technologies: ['Python', 'FastAPI', 'React', 'FFmpeg', 'Redis'],
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
    thumbnail: '/images/keyboard-checker.jpg',
    category: 'Tools',
    downloadCount: 156,
    githubUrl: 'https://github.com/bimadevs/keyboard-checker',
    demoUrl: 'https://keyboard-test.example.com',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
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
    thumbnail: '/images/bubble-game.jpg',
    category: 'Game Development',
    downloadCount: 234,
    githubUrl: 'https://github.com/bimadevs/bubble-game',
    demoUrl: 'https://bubble-game.example.com',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
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