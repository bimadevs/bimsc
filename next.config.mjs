/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi untuk menangani environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  // Konfigurasi untuk menangani image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Konfigurasi untuk menangani redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // Konfigurasi untuk menangani static generation
  staticPageGenerationTimeout: 180,
  // Konfigurasi untuk menangani output
  output: 'standalone',
};

export default nextConfig;
