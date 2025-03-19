import Header from '../components/Header';

export default function License() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Lisensi
          </h1>
          
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-slate-400 mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Lisensi Platform</h2>
              <p className="text-slate-400">
                SpaceCode Hub adalah platform berbagi source code yang menghormati dan melindungi hak kekayaan intelektual. Semua konten di platform ini dilindungi oleh hukum hak cipta dan ketentuan lisensi yang berlaku.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Lisensi Source Code</h2>
              <p className="text-slate-400">
                Source code yang dibagikan di platform kami menggunakan lisensi berikut:
              </p>
              <div className="space-y-6">
                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">MIT License</h3>
                  <p className="text-slate-400 mb-4">
                    Lisensi yang sangat permisif yang memungkinkan penggunaan ulang dengan batasan minimal. Anda dapat:
                  </p>
                  <ul className="list-disc list-inside text-slate-400 space-y-2">
                    <li>Menggunakan kode untuk keperluan komersial</li>
                    <li>Memodifikasi kode sesuai kebutuhan</li>
                    <li>Mendistribusikan kode yang telah dimodifikasi</li>
                    <li>Menggunakan kode secara pribadi</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Apache License 2.0</h3>
                  <p className="text-slate-400 mb-4">
                    Lisensi yang memungkinkan penggunaan bebas dengan perlindungan paten. Ketentuan:
                  </p>
                  <ul className="list-disc list-inside text-slate-400 space-y-2">
                    <li>Mencantumkan pemberitahuan hak cipta</li>
                    <li>Mencantumkan pemberitahuan lisensi</li>
                    <li>Menyatakan perubahan signifikan</li>
                    <li>Menyertakan lisensi dalam distribusi</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">GNU GPL v3</h3>
                  <p className="text-slate-400 mb-4">
                    Lisensi copyleft yang menjamin kebebasan pengguna. Persyaratan:
                  </p>
                  <ul className="list-disc list-inside text-slate-400 space-y-2">
                    <li>Source code harus tersedia</li>
                    <li>Modifikasi harus menggunakan lisensi yang sama</li>
                    <li>Perubahan harus didokumentasikan</li>
                    <li>Pemberitahuan lisensi harus dipertahankan</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Penggunaan Source Code</h2>
              <p className="text-slate-400">
                Ketika menggunakan source code dari platform kami:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Perhatikan dan patuhi lisensi yang berlaku</li>
                <li>Berikan atribusi sesuai ketentuan lisensi</li>
                <li>Hormati hak cipta pembuat asli</li>
                <li>Dokumentasikan perubahan yang dilakukan</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Pembatasan</h2>
              <p className="text-slate-400">
                Beberapa pembatasan umum:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Tidak boleh menghapus pemberitahuan hak cipta</li>
                <li>Tidak boleh menggunakan merek dagang pemilik</li>
                <li>Tidak ada jaminan dari pembuat kode</li>
                <li>Penggunaan sepenuhnya merupakan risiko pengguna</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Kontak</h2>
              <p className="text-slate-400">
                Untuk pertanyaan tentang lisensi:
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <p className="text-slate-400">Email: license@spacecodehub.com</p>
                <p className="text-slate-400">Telegram: @SpaceCodeHub</p>
                <p className="text-slate-400">WhatsApp: <a href="https://wa.me/6282254044783" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-colors">0822-5404-4783</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 