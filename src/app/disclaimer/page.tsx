import Header from '../components/Header';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Disclaimer
          </h1>
          
          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <p className="text-lg text-slate-400 mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Tujuan Platform</h2>
              <p className="text-slate-400">
                BimSC adalah platform yang dibuat dengan tujuan untuk berbagi source code yang merupakan bagian dari proses pembelajaran coding. Semua source code yang dibagikan di platform ini berasal dari project-project yang dibuat selama saya belajar dan mengembangkan kemampuan dalam bidang pemrograman dan development.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Sumber Source Code</h2>
              <p className="text-slate-400">
                Source code yang tersedia di BimSC adalah:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Project yang dibuat selama proses pembelajaran berbagai teknologi pemrograman</li>
                <li>Contoh implementasi dari tutorial dan course yang pernah diikuti</li>
                <li>Project experimental untuk mengeksplorasi fitur-fitur baru</li>
                <li>Latihan dan challenge yang diselesaikan untuk meningkatkan skill coding</li>
                <li>Portfolio projects yang dibuat untuk keperluan belajar dan dokumentasi</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Kualitas dan Kondisi Code</h2>
              <p className="text-slate-400">
                Mengingat bahwa source code ini dibuat untuk tujuan pembelajaran, необходимо untuk memahami bahwa:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Code mungkin belum mengikuti best practices secara menyeluruh</li>
                <li>Beberapa bagian code mungkin masih dapat dioptimalkan lebih lanjut</li>
                <li>Documentation mungkin tidak selengkap code production</li>
                <li>Security measures mungkin belum implements sepenuhnya</li>
                <li>Code dibuat pada berbagai level kemampuan, dari beginner hingga advanced</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Tujuan Edukatif</h2>
              <p className="text-slate-400">
                Platform ini berkomitmen untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Membantu developer lain dalam belajar dan memahami berbagai konsep coding</li>
                <li>Menyediakan contoh implementasi yang dapat dijadikan referensi</li>
                <li>Mendukung komunitas developer Indonesia dalam berbagi pengetahuan</li>
                <li>Menyajikan berbagai teknologi dan framework untuk inspirasi project</li>
                <li>Menciptakan lingkungan pembelajaran yang inklusif dan supportive</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Batasan Tanggung Jawab</h2>
              <p className="text-slate-400">
                Dengan menggunakan source code dari BimSC, Anda memahami bahwa:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Source code disediakan "apa adanya" tanpa jaminan apapun</li>
                <li>Anda bertanggung jawab untuk melakukan review dan testing sebelum menggunakan code</li>
                <li>Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan source code</li>
                <li>Disarankan untuk memahami code secara menyeluruh sebelum implementasi</li>
                <li>Update dan maintenance source code tidak dijamin secara berkala</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Lisensi dan Penggunaan</h2>
              <p className="text-slate-400">
                Setiap source code yang dibagikan dilengkapi dengan informasi lisensi yang sesuai. Pengguna diharapkan untuk:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Membaca dan memahami terms lisensi sebelum menggunakan source code</li>
                <li>Menghormati hak cipta dan atribusi yang ditentukan</li>
                <li>Tidak menggunakan source code untuk tujuan komersial jika tidak diizinkan</li>
                <li>Menyebutkan sumber saat menggunakan atau memodifikasi code</li>
                <li>Mengikuti guidelines yang tertera dalam repository masing-masing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Kontribusi dan Feedback</h2>
              <p className="text-slate-400">
                Kami mengundang komunitas untuk berkontribusi dalam perbaikan platform ini dengan cara:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2">
                <li>Memberikan feedback dan saran untuk improvement</li>
                <li>Melaporkan bug atau issues yang ditemukan</li>
                <li>Berkontribusi dengan source code berkualitas tinggi</li>
                <li>Membantu memperbaiki documentation</li>
                <li>Berbagi pengalaman dan insight tentang teknologi yang digunakan</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Perubahan Disclaimer</h2>
              <p className="text-slate-400">
                Disclaimer ini dapat diperbarui dari waktu ke waktu sesuai dengan perkembangan platform dan kebutuhan komunitas. Perubahan signifikan akan diumumkan melalui platform ini. Dengan terus menggunakan platform setelah perubahan, Anda menyetujui disclaimer yang telah diperbarui.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Kontak</h2>
              <p className="text-slate-400">
                Jika Anda memiliki pertanyaan terkait disclaimer ini atau ingin memberikan feedback:
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