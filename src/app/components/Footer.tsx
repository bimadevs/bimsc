import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                href="https://github.com/bimadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors relative group"
                aria-label="GitHub"
              >
                <div className="absolute -inset-2 rounded-full bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
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
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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