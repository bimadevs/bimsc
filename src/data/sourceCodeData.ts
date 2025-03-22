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
    category: 'Full Stack',
    githubUrl: 'https://github.com/bimadevs/realtime-chat-golang',
    languages: ['Go'],
    technologies: ['Gorilla WebSocket', 'Fiber', 'SQLite3'],
    features: [
      'Chat realtime dengan WebSocket',
      'Sistem username untuk indentifikasi pengguna',
      'Responsif',
      'Penyimpanan pesan dengan SQLite3',
      'Penanda waktu pesan',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '2',
    title: 'PilihKu - Sistem E-Voting',
    description: 'Platform e-voting modern dan aman untuk pemilihan digital. Dilengkapi dengan sistem verifikasi',
    thumbnail: '/images/pilihku.png',
    category: 'Full Stack',
    githubUrl: 'https://github.com/bimadevs/pilihku-E-Voting',
    demoUrl: 'https://pilihku.bimadev.xyz',
    languages: ['TypeScript'],
    technologies: ['React', 'Node.js', 'Supabase', 'NextJs', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Sistem autentikasi multi-level',
      'Dashboard admin komprehensif',
      'Verifikasi pemilih',
      'Import data pemilih',
      'Export hasil pemilihan',
      'Hasil pemilihan realtime',
      'Countdown timer',
      'Pengumuman otomatis pada waktu yang ditentukan',
      'Jadwal pemilihan'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  //{
  //  id: '3',
  //  title: 'Auto Generator Konten English',
  //  description: 'Tool otomatis untuk menghasilkan konten bahasa Inggris dengan AI',
  //  thumbnail: '/images/generate-konten-eanglish.jpeg',
  //  category: 'AI Tools',
  //  isNew: true,
  //  githubUrl: 'https://github.com/bimadevs/autogeneratorkontenenglish',
  //  languages: ['Python', 'JavaScript'],
  //  technologies: ['Flask', 'React', 'TailwindCSS', 'Imagemagick', 'gTTS', 'moviepy'],
  //  features: [
  //    'Multiple content format',
  //    'Pembuatan video pembelajaran otomatis',
  //    'Text-to-Speech',
  //    'Efel visual dengan teks terjemahan dan penjelasan kata'
  //  ],
  //  author: {
  //    name: 'Bimadev',
  //    github: 'bimadevs'
  //  }
  //},
  {
    id: '4',
    title: 'Crypto Tracker',
    description: 'Aplikasi tracking cryptocurrency dengan fitur realtime price updates dan portfolio management.',
    thumbnail: '/images/crypto-tracker.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/crypto_tracker',
    demoUrl: 'crypto-tracker-rho-three.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'NextJs', 'CoinCap API', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Realtime price updates',
      'Fitur Pencarian',
      'Desain Responsif',
      'Historical data charts',
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
    githubUrl: 'https://github.com/bimadevs/tiktok-downloader',
    demoUrl: 'https://tiktok-dl.example.com',
    languages: ['HTML', 'JavaScript'],
    technologies: ['Tickydown API', 'TailwindCSS',],
    features: [
      'Download tanpa watermark',
      'Video quality selection',
      'Audio extraction',
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
    githubUrl: 'https://github.com/bimadevs/keyboard-checker',
    demoUrl: 'https://bimadevs.github.io/keyboard-checker',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: [],
    features: [
      'Deteksi keypress realtime',
      'Visual keyboard layout',
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
    githubUrl: 'https://github.com/bimadevs/bubble-game',
    demoUrl: 'https://bimadevs.github.io/bubble-game',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: [],
    features: [
      'Gameplay sederhana',
      'Multiple level',
      'Score tracking',
      'Endless fun',
      'Touch support',
      'Ringa dan Cepat'
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
    githubUrl: 'https://github.com/bimadevs/nextjs-url-shortener',
    demoUrl: 'https://url-shortener.bimadev.xyz',
    languages: ['TypeScript'],
    technologies: ['Next.JS', 'Supabase', 'TailwindCSS', 'BimsUI', 'Framer Motion'],
    features: [
      'Autentikasi pengguna',
      'Pelacakan klik',
      'Manajemen link',
      'Dashboard admin',
      'Custom Initial'
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
    githubUrl: 'https://github.com/bimadevs/portofolio-cosmos',
    demoUrl: 'https://portofolio-cosmos.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Desain futuristik dengan tema luar angkasa',
      'Animasi dan transisi yang halus menggunakan framer motion',
      'Responsif di semua perangkat',
      'Optimasi performa dengan Next.js',
      'Efek parallax dan interaksi mouse'
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
    githubUrl: 'https://github.com/bimadevs/portofolio-cyberpunk',
    demoUrl: 'https://portofolio-cyberpunk.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'GSAP', 'Framer Motion'],
    features: [
      'Efek glitch dan distorsi digital',
      'Animasi neon yang dinamis',
      'UI dengan estetika cyberpunk',
      'Efek hover futuristik',
      'Responsif di semua perangkat',
      'Navigasi interaktif dengan animasi',
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
    githubUrl: 'https://github.com/bimadevs/portofolio-hacker-terminal',
    demoUrl: 'https://portofolio-terminal.vercel.app',
    languages: ['TypeScript'],
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
  },
  {
    id: '13',
    title: 'Surreal Dreamscape',
    description: 'Website dengan tema surrealis yang menggabungkan elemen mimpi dan fantasi. Pengalaman visual yang unik dengan animasi dan efek yang tidak konvensional.',
    thumbnail: '/images/surreal-dreamscape.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/surreal-dreamscape',
    demoUrl: 'https://surreal-dreamscape.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'GSAP'],
    features: [
      'Animasi surrealis yang menakjubkan',
      'Efek distorsi dan morphing',
      'Interaksi mouse yang unik',
      'Transisi halaman yang mulus',
      'Elemen UI yang tidak konvensional',
      'Pengalaman storytelling visual',
      'Responsif di semua perangkat'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '14',
    title: 'Portofolio Anime Aesthetic',
    description: 'Website portofolio dengan tema anime Jepang yang stylish. Menampilkan elemen visual anime, warna-warna pastel, dan animasi yang terinspirasi dari anime.',
    thumbnail: '/images/portofolio-anime.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/portofolio-anime-aesthetic',
    demoUrl: 'https://portofolio-anime.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    features: [
      'Desain terinspirasi Jepang',
      'Palette warna pastel yang menarik',
      'Efek hover yang playful',
      'Transisi halaman yang smooth',
      'Responsif di semua perangkat'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '15',
    title: 'Portofolio Brutalist',
    description: 'Website portofolio dengan desain brutalis yang berani dan tidak konvensional. Menampilkan tipografi yang kuat, layout asimetris, dan estetika raw.',
    thumbnail: '/images/portofolio-brutalist.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/portofolio-brutalist',
    demoUrl: 'https://portofolio-brutalist.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    features: [
      'Desain brutalis yang berani',
      'Tipografi yang kuat dan ekspresif',
      'Layout asimetris dan tidak konvensional',
      'Kontras warna yang tinggi',
      'Animasi yang minimal namun impactful',
      'Navigasi yang unik',
      'Responsif dengan pendekatan mobile-first'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '16',
    title: 'Portofolio Steampunk',
    description: 'Website portofolio dengan tema steampunk yang menggabungkan elemen era Victorian dengan teknologi uap. Desain yang kaya dengan detail mekanis dan tekstur.',
    thumbnail: '/images/portofolio-steampunk.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/portofolio-steampunk',
    demoUrl: 'https://portofolio-steampunk.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    features: [
      'Desain dengan tema steampunk yang detail',
      'Animasi mekanis dan roda gigi',
      'Efek tekstur logam dan kayu',
      'UI dengan elemen Victorian',
      'Interaksi yang terinspirasi dari mesin',
      'Efek suara ambient steampunk',
      'Responsif di semua perangkat'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '17',
    title: 'Image-to-Code',
    description: 'Aplikasi web AI yang dapat mengkonversi gambar UI/desain menjadi kode HTML dan CSS. Menggunakan model vision-to-text untuk menganalisis komponen dan menghasilkan implementasi kode yang akurat.',
    thumbnail: '/images/image-to-code.png',
    category: 'AI Tools',
    githubUrl: 'https://github.com/bimadevs/image-to-code',
    demoUrl: 'https://imgtocode.streamlit.app',
    languages: ['Python'],
    technologies: ['Streamlit', 'Pillow', 'Goggle-generativeai'],
    features: [
      'Konversi gambar UI menjadi kode HTML dan CSS',
      'Analisis komponen desain otomatis',
      'Pengaturan responsivitas kode output',
      'Copy-paste kode langsung ke project',
      'Support berbagai framework CSS (Tailwind, Bootstrap, dll)',
      'Optimasi untuk berbagai jenis UI/UX design'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '18',
    title: 'Alquran Digital',
    description: 'Aplikasi web islami yang menyediakan berbagai fitur bermanfaat untuk mendukung ibadah sehari-hari.',
    thumbnail: '/images/haisyam-alquran-digital.png',
    category: 'Tools',
    isNew: true,
    githubUrl: 'https://github.com/Haisyam/Alquran-Digital',
    demoUrl: 'https://muslimdigital.vercel.app/',
    languages: ['JavaScript'],
    technologies: ['React', 'TailwindCSS', 'Quran API'],
    features: [
      'Akses Al-Quran lengkap dengan terjemahannya.',
      'UI yang mudah dibaca dengan tema yang dapat disesuaikan.',
      'Termasuk teks bahasa Arab, terjemahan, dan makna.',
      'Secara otomatis mengambil waktu sholat berdasarkan lokasi pengguna.',
      'Mendukung beberapa metode perhitungan untuk akurasi.',
    ],
    author: {
      name: 'Haisyam',
      github: 'Haisyam'
    }
  },
  {
    id: '19',
    title: 'Crypto Dashboard',
    description: 'Dashboard interaktif untuk memantau pergerakan harga cryptocurrency dengan visualisasi data yang kaya dan realtime updates.',
    thumbnail: '/images/crypto-dashboard.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-six-tau.vercel.app/',
    languages: ['TypeScript'],
    technologies: ['React', 'ShadCN UI', 'TailwindCSS', 'CoinGecko API', 'Recharts'],
    features: [
      'Monitoring harga realtime',
      'Visualisasi data dengan grafik interaktif',
      'Portfolio tracker',
      'Perbandingan harga antar mata uang',
      'Pemberitahuan harga',
      'Histori pergerakan harga',
      'Responsif untuk berbagai ukuran layar'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '20',
    title: 'Dancing Drawing Board',
    description: 'Aplikasi kanvas interaktif yang menggabungkan seni visual dengan animasi dan musik, menciptakan pengalaman menggambar yang dinamis.',
    thumbnail: '/images/dancing-drawing-board.png',
    category: 'Tools',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/dancing-drawing-board',
    demoUrl: 'https://dancing-drawing-board.vercel.app',
    languages: ['TypeScript'],
    technologies: ['React', 'Fabric.js', 'TailwindCSS'],
    features: [
      'Kanvas interaktif dengan efek visual dinamis',
      'Berbagai jenis brush dan alat menggambar',
      'Palet warna yang dapat disesuaikan',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '21',
    title: 'Generator Faktur',
    description: 'Aplikasi untuk membuat faktur dan kwitansi dengan mudah, cepat dan tampilan yang profesional, dilengkapi dengan sistem pengelolaan pelanggan.',
    thumbnail: '/images/generator-faktur.png',
    category: 'Tools',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/generator-faktur',
    demoUrl: 'https://generator-faktur.vercel.app',
    languages: ['JavaScript'],
    technologies: ['Laravel', 'Alpine.js', 'TailwindCSS', 'DomPDF', 'MySQL'],
    features: [
      'Pembuatan faktur dengan template profesional',
      'Ekspor ke PDF',
      'Penghitungan Otomatis',
      'Responsif',
      'Fill Dummy Data',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '22',
    title: 'Template Website Crypto',
    description: 'Template website responsif dan modern untuk proyek cryptocurrency, ICO, atau exchange dengan desain futuristik dan fitur-fitur yang dioptimalkan untuk industri crypto.',
    thumbnail: '/images/template-website-crypto.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/template-website-crypto',
    demoUrl: 'https://template-website-crypto.vercel.app',
    languages: ['TypeScript', 'CSS'],
    technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    features: [
      '✨ Desain Modern & Premium',
      '📱 Responsif Sepenuhnya',
      '🎭 Animasi Menarik',
      '🧩 Komponen Modular',
      '🎨 Styling Modern',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '23',
    title: 'Windows XP Replica',
    description: 'Replika sistem operasi Windows XP di web browser dengan tampilan dan fungsionalitas yang mirip, memberikan pengalaman nostalgia klasik Windows XP.',
    thumbnail: '/images/windows-xp-replica.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/windows-xp-replica',
    demoUrl: 'https://windows-xp-replica-coral.vercel.app/',
    languages: ['TypeScript'],
    technologies: ['React', 'TailwindCSS', 'Shadcn/UI'],
    features: [
      'Start menu dan taskbar fungsional',
      'Desktop dengan ikon yang dapat diinteraksi',
      'Aplikasi bawaan seperti Notepad, Calculator, dan Internet Explorer',
      'Sound effect klasik Windows XP',
      'Window management (minimize, maximize, close)',
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
];

export const categories = [
  'Semua',
  'Mobile Apps',
  'Full Stack',
  'Backend',
  'Frontend',
  'Game Development',
  'AI Tools',
  'Tools',
] as const;

export type Category = typeof categories[number]; 
