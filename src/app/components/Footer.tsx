import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp URL - Ganti dengan nomor WhatsApp Anda
  const whatsappUrl = 'https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20untuk%20membuat%20website%20%2F%20aplikasi.%20Bisakah%20Anda%20membantu%3F';

  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800/50">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>

      {/* Stars Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Orbital Ring */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-indigo-500/10 rounded-full -z-5 pointer-events-none" style={{ transform: 'translateX(-50%) translateY(-80%)' }}></div>

      {/* Distant Planet */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-800/20 to-indigo-900/20 blur-sm -z-5 pointer-events-none">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Freelance Promo Banner */}
        <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-green-900/30 border border-green-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/code-pattern.png')] bg-repeat opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-500 w-full h-full">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Jasa Pembuatan Website & Aplikasi</h3>
              <p className="text-slate-300 mb-4">
                Butuh website atau aplikasi untuk bisnis Anda? Saya menawarkan jasa pembuatan website dan aplikasi dengan teknologi modern seperti React, Next.js, Laravel, TailwindCSS, dan Node.js. Desain responsive, performa tinggi, dan SEO-friendly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/10 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded border border-green-500/20">Website Bisnis</span>
                <span className="bg-green-500/10 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded border border-green-500/20">E-commerce</span>
                <span className="bg-green-500/10 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded border border-green-500/20">Portofolio</span>
                <span className="bg-green-500/10 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded border border-green-500/20">Dashboard Admin</span>
                <span className="bg-green-500/10 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded border border-green-500/20">Mobile Apps</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg shadow-green-500/20 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 relative group">
              <span className="relative z-10">BimSC</span>
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <p className="text-slate-400 text-sm backdrop-blur-sm bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
              Platform berbagi source code berkualitas untuk developer Indonesia. Temukan berbagai source code untuk mempercepat development project Anda.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20dengan%20website%20BimSC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition-colors relative group"
                aria-label="WhatsApp"
              >
                <div className="absolute -inset-2 rounded-full bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/bimadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors relative group"
                aria-label="Twitter"
              >
                <div className="absolute -inset-2 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/bimadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors relative group"
                aria-label="LinkedIn"
              >
                <div className="absolute -inset-2 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/source-code" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Source Code</span>
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Kategori</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Tentang Kami</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Kontak</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="backdrop-blur-sm bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-semibold mb-4">Kategori Populer</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/source-code?category=Web Development" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Web Development</span>
                </Link>
              </li>
              <li>
                <Link href="/source-code?category=Full Stack" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Full Stack</span>
                </Link>
              </li>
              <li>
                <Link href="/source-code?category=AI Tools" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>AI Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/source-code?category=Game Development" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Game Development</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="backdrop-blur-sm bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Kebijakan Privasi</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Syarat & Ketentuan</span>
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Lisensi</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-teal-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                  <span>Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} BimSC. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/sitemap" className="text-slate-400 hover:text-purple-400 transition-colors">
                Sitemap
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/cookies" className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/accessibility" className="text-slate-400 hover:text-teal-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
