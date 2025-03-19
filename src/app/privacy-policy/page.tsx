import Header from '../components/Header';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-slate-400 mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Informasi yang Kami Kumpulkan</h2>
              <p className="text-slate-400">
                SpaceCode Hub mengumpulkan beberapa informasi pribadi untuk meningkatkan pengalaman pengguna dan menyediakan layanan yang lebih baik. Informasi yang kami kumpulkan meliputi:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Alamat email (jika Anda berlangganan newsletter)</li>
                <li>Data penggunaan website (melalui cookies dan analytics)</li>
                <li>Informasi profil GitHub (jika Anda menghubungkan akun)</li>
                <li>Riwayat unduhan source code</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Penggunaan Informasi</h2>
              <p className="text-slate-400">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Menyediakan dan meningkatkan layanan kami</li>
                <li>Mengirimkan update dan newsletter (jika Anda berlangganan)</li>
                <li>Menganalisis penggunaan website untuk peningkatan performa</li>
                <li>Menyesuaikan konten berdasarkan preferensi pengguna</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Keamanan Data</h2>
              <p className="text-slate-400">
                Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi Anda:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Enkripsi SSL/TLS untuk semua transmisi data</li>
                <li>Penyimpanan data yang aman dengan enkripsi</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Pemantauan keamanan secara regular</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Cookies dan Teknologi Pelacakan</h2>
              <p className="text-slate-400">
                SpaceCode Hub menggunakan cookies dan teknologi pelacakan serupa untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Menjaga status login pengguna</li>
                <li>Menganalisis penggunaan website</li>
                <li>Menyimpan preferensi pengguna</li>
                <li>Meningkatkan performa website</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Hak Pengguna</h2>
              <p className="text-slate-400">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Mengakses data pribadi Anda</li>
                <li>Meminta koreksi data yang tidak akurat</li>
                <li>Meminta penghapusan data</li>
                <li>Membatasi penggunaan data</li>
                <li>Menarik persetujuan penggunaan data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Perubahan Kebijakan</h2>
              <p className="text-slate-400">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan di website. Penggunaan berkelanjutan atas layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Kontak</h2>
              <p className="text-slate-400">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di:
              </p>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                <p className="text-slate-400">Email: <a href="mailto:bimadev06@gmail.com" className="text-purple-400 hover:text-purple-500 transition-colors">bimadev06@gmail.com</a></p>
                <p className="text-slate-400">WhatsApp: <a href="https://wa.me/6282254044783" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-colors">0822-5404-4783</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 