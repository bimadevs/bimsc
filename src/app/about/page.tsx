import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Tentang SpaceCode Hub
          </h1>

          <div className="space-y-8">
            <section className="bg-slate-900 rounded-lg border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Visi Kami
              </h2>
              <p className="text-slate-400 leading-relaxed">
                SpaceCode Hub hadir sebagai platform berbagi source code yang bertujuan untuk membantu
                para developer Indonesia dalam mengembangkan aplikasi dan website. Kami percaya bahwa
                berbagi pengetahuan dan resource adalah kunci untuk memajukan ekosistem pengembangan
                software di Indonesia.
              </p>
            </section>

            <section className="bg-slate-900 rounded-lg border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Apa yang Kami Tawarkan
              </h2>
              <ul className="space-y-4">
                {[
                  'Source code berkualitas tinggi dengan dokumentasi lengkap',
                  'Berbagai kategori untuk berbagai kebutuhan development',
                  'Preview dan demo langsung untuk setiap project',
                  'Kemudahan dalam download dan implementasi',
                  'Update regular dengan source code terbaru',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <span className="text-purple-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-slate-900 rounded-lg border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Kontribusi
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Kami mengundang para developer untuk berkontribusi dalam pengembangan komunitas ini.
                Anda dapat berkontribusi dengan cara:
              </p>
              <ul className="space-y-4">
                {[
                  'Membagikan source code project Anda',
                  'Memberikan feedback dan saran perbaikan',
                  'Melaporkan bug atau masalah',
                  'Membantu dokumentasi',
                  'Berbagi pengalaman dan pengetahuan',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-400">
                    <span className="text-purple-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-slate-900 rounded-lg border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Hubungi Kami
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan, saran, atau ingin berkontribusi, jangan ragu untuk
                menghubungi kami melalui:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:contact@spacecodehub.com"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@spacecodehub.com
                </a>
                <a
                  href="https://github.com/spacecodehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 