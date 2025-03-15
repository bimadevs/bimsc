export default async function TestLoadingPage() {
  // Simulasi loading dengan delay 5 detik
  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Halaman Berhasil Dimuat</h1>
        <p className="text-slate-400">
          Jika Anda melihat halaman ini, berarti komponen Loading sudah berfungsi dengan baik.
        </p>
      </div>
    </div>
  );
} 