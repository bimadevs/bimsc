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
{/*               <a
                href="https://wa.me/6282254044783?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20di%20website%20BimSC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition-colors relative group"
                aria-label="WhatsApp Business"
              >
                <div className="absolute -inset-2 rounded-full bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.869.518 3.613 1.412 5.109l-1.375 4.497c-.103.335.003.692.222.941.193.218.463.341.743.341.097 0 .195-.013.29-.039l4.705-1.335c1.659 1.053 3.597 1.631 5.603 1.635h.004c5.522 0 9.999-4.477 9.999-9.999-.003-5.522-4.481-9.999-10.003-9.999zm.004 18.178h-.003c-1.679-.002-3.317-.467-4.735-1.349l-.335-.199-3.494.976.955-3.147-.216-.346c-.936-1.497-1.429-3.228-1.429-5.012 0-5.181 4.217-9.398 9.401-9.398 2.512.001 4.871.981 6.646 2.758 1.775 1.777 2.752 4.138 2.751 6.648-.002 5.181-4.219 9.398-9.4 9.398zm5.108-7.075c-.283-.142-1.687-.835-1.95-.931-.261-.096-.452-.143-.642.143-.19.286-.737.932-.904 1.122-.167.191-.334.214-.618.071-.286-.143-1.195-.44-2.277-1.405-.841-.751-1.408-1.677-1.573-1.959-.166-.286-.018-.44.125-.582.128-.128.286-.334.429-.501.143-.167.189-.286.284-.476.095-.191.048-.358-.024-.501-.071-.143-.642-1.544-.881-2.119-.232-.557-.467-.482-.642-.492l-.547-.01c-.191 0-.44.071-.69.358-.238.286-.91.89-.91.216 0 1.327.964 2.606 1.099 2.787.136.181 1.937 2.96 4.69 4.146 2.774 1.187 2.774.793 3.273.743.499-.048 1.687-.689 1.925-1.354.237-.668.237-1.236.166-1.354-.071-.119-.262-.186-.547-.328z" />
                </svg>
              </a> */}
              <a
                href="mailto:bimadev06@gmail.com"
                className="text-purple-400 hover:text-purple-500 transition-colors relative group"
                aria-label="Email"
              >
                <div className="absolute -inset-2 rounded-full bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/biimaa_jo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition-colors relative group"
                aria-label="Instagram"
              >
                <div className="absolute -inset-2 rounded-full bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/bimadevs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-500 transition-colors relative group"
                aria-label="LinkedIn"
              >
                <div className="absolute -inset-2 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
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
