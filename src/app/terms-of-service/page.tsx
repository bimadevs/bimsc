import Header from '../components/Header';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Syarat & Ketentuan
          </h1>
          
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-slate-400 mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Penerimaan Syarat</h2>
              <p className="text-slate-400">
                Dengan mengakses dan menggunakan SpaceCode Hub, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian apapun dari syarat ini, Anda tidak diperkenankan untuk menggunakan layanan kami.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Penggunaan Layanan</h2>
              <p className="text-slate-400">
                Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Menggunakan layanan sesuai dengan hukum yang berlaku</li>
                <li>Tidak menyalahgunakan atau memanipulasi platform</li>
                <li>Tidak melakukan tindakan yang dapat membahayakan platform</li>
                <li>Menghormati hak kekayaan intelektual</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Akun Pengguna</h2>
              <p className="text-slate-400">
                Ketika membuat akun di SpaceCode Hub:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Anda bertanggung jawab atas keamanan akun Anda</li>
                <li>Informasi yang diberikan harus akurat dan lengkap</li>
                <li>Anda tidak boleh menggunakan akun orang lain</li>
                <li>Anda harus memberitahu kami jika ada penggunaan tidak sah</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Konten Platform</h2>
              <p className="text-slate-400">
                Mengenai konten di platform:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Source code yang dibagikan harus original atau memiliki izin</li>
                <li>Kami berhak menghapus konten yang melanggar ketentuan</li>
                <li>Pengguna bertanggung jawab atas konten yang dibagikan</li>
                <li>Konten harus mematuhi standar komunitas kami</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Hak Kekayaan Intelektual</h2>
              <p className="text-slate-400">
                Ketentuan hak kekayaan intelektual:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Source code tetap milik pembuat aslinya</li>
                <li>Pengguna harus menghormati lisensi yang berlaku</li>
                <li>Dilarang mengklaim karya orang lain</li>
                <li>Atribusi harus diberikan sesuai ketentuan lisensi</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Batasan Tanggung Jawab</h2>
              <p className="text-slate-400">
                SpaceCode Hub tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Kerugian yang timbul dari penggunaan source code</li>
                <li>Kerusakan atau kehilangan data</li>
                <li>Gangguan layanan atau downtime</li>
                <li>Kesalahan atau ketidakakuratan konten</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Perubahan Ketentuan</h2>
              <p className="text-slate-400">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui platform dan berlaku sejak tanggal publikasi. Penggunaan berkelanjutan atas layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap ketentuan yang diperbarui.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Kontak</h2>
              <p className="text-slate-400">
                Untuk pertanyaan tentang syarat dan ketentuan ini:
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <p className="text-slate-400">Email: legal@spacecodehub.com</p>
                <p className="text-slate-400">Telegram: @SpaceCodeHub</p>
                <p className="text-slate-400">GitHub: github.com/bimadevs</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 