export interface SourceCode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  isNew?: boolean;
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
    title: 'Go URL Shortener',
    description: 'Layanan pemendek URL yang powerful dibangun dengan Go, Redis, dan PostgreSQL. Dilengkapi dengan API RESTful dan dashboard admin.',
    thumbnail: '/images/url-shortener.png',
    category: 'Backend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/go-url-shorten',
    technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'RESTful API'],
    features: [
      'Pemendek URL dengan custom alias',
      'Dashboard admin untuk manajemen URL',
      'Rate limiting dan proteksi spam',
      'Analytics dan tracking klik',
      'API documentation dengan Swagger',
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
    demoUrl: 'https://pilihku-demo.example.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Blockchain'],
    features: [
      'Sistem autentikasi dan verifikasi pemilih',
      'Dashboard admin untuk manajemen pemilihan',
      'Enkripsi data suara dengan blockchain',
      'Laporan hasil pemilihan real-time',
      'Responsive design untuk mobile dan desktop',
      'Audit trail untuk keamanan'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '3',
    title: 'NextJS E-Commerce Template',
    description: 'Template e-commerce modern dengan NextJS dan TailwindCSS. Siap pakai untuk toko online dengan fitur lengkap.',
    thumbnail: '/images/ecommerce.png',
    category: 'Frontend',
    isNew: true,
    githubUrl: 'https://github.com/bimadevs/nextjs-ecommerce',
    demoUrl: 'https://nextjs-ecommerce-demo.example.com',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Stripe', 'Prisma'],
    features: [
      'Katalog produk dengan filter dan pencarian',
      'Keranjang belanja dengan state management',
      'Checkout dengan Stripe integration',
      'Autentikasi pengguna',
      'Dashboard admin',
      'Responsive design'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '4',
    title: 'Flutter Weather App',
    description: 'Aplikasi cuaca dengan UI yang menarik dibangun dengan Flutter. Mendukung lokasi saat ini dan pencarian kota.',
    thumbnail: '/images/weather-app.png',
    category: 'Mobile Apps',
    githubUrl: 'https://github.com/bimadevs/flutter-weather',
    technologies: ['Flutter', 'Dart', 'OpenWeatherMap API', 'Bloc Pattern', 'Geolocator'],
    features: [
      'Prakiraan cuaca untuk 7 hari',
      'Deteksi lokasi otomatis',
      'Pencarian kota',
      'Animasi UI yang menarik',
      'Mode gelap dan terang',
      'Penyimpanan lokasi favorit'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '5',
    title: 'Laravel Blog CMS',
    description: 'Content Management System untuk blog dengan Laravel. Dilengkapi dengan editor WYSIWYG dan manajemen pengguna.',
    thumbnail: '/images/laravel-cms.png',
    category: 'Full Stack',
    githubUrl: 'https://github.com/bimadevs/laravel-blog-cms',
    demoUrl: 'https://laravel-cms-demo.example.com',
    technologies: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpine.js', 'CKEditor'],
    features: [
      'Dashboard admin yang intuitif',
      'Editor WYSIWYG untuk konten',
      'Manajemen kategori dan tag',
      'SEO optimization tools',
      'Sistem komentar dengan moderasi',
      'Analytics dan reporting'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '6',
    title: 'React Native Chat App',
    description: 'Aplikasi chat realtime dengan React Native dan Firebase. Mendukung pesan teks, gambar, dan notifikasi.',
    thumbnail: '/images/chat-app.png',
    category: 'Mobile Apps',
    githubUrl: 'https://github.com/bimadevs/react-native-chat',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Push Notifications'],
    features: [
      'Chat realtime dengan Firebase',
      'Pengiriman gambar dan file',
      'Notifikasi push',
      'Status online/offline',
      'Read receipts',
      'Group chats'
    ],
    author: {
      name: 'Bimadev',
      github: 'bimadevs'
    }
  },
  {
    id: '7',
    title: 'Vue.js Dashboard Template',
    description: 'Template dashboard admin dengan Vue.js dan Tailwind CSS. Siap pakai untuk berbagai jenis aplikasi.',
    thumbnail: '/images/vue-dashboard.png',
    category: 'Frontend',
    githubUrl: 'https://github.com/bimadevs/vue-dashboard',
    demoUrl: 'https://vue-dashboard-demo.example.com',
    technologies: ['Vue.js', 'Vuex', 'TailwindCSS', 'Chart.js', 'Vue Router'],
    features: [
      'Multiple dashboard layouts',
      'Interactive charts dan graphs',
      'Data tables dengan sorting dan filtering',
      'Form components',
      'Authentication flow',
      'Dark mode support'
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