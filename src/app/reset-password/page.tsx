'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../components/Header'
import Image from 'next/image'

// Tambahkan konfigurasi untuk mencegah static generation
export const dynamic = 'force-dynamic'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [hash, setHash] = useState<string | null>(null)
  const { updatePassword } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Mendapatkan hash dari URL
    const hashFromUrl = searchParams.get('hash')
    if (hashFromUrl) {
      setHash(hashFromUrl)
    } else {
      setError('Link reset password tidak valid atau telah kedaluwarsa')
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validasi password
    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok')
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password harus minimal 6 karakter')
      setIsLoading(false)
      return
    }

    if (!hash) {
      setError('Link reset password tidak valid atau telah kedaluwarsa')
      setIsLoading(false)
      return
    }

    try {
      const { error } = await updatePassword(password, hash)
      
      if (error) {
        throw error
      }
      
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat mengubah password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Header />
      
      {/* Cosmic Background with Stars */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>
      
      {/* Stars Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(100)].map((_, i) => (
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

      {/* Distant Galaxies */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Meteors */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-meteor"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            <div className="w-1 h-20 bg-gradient-to-b from-indigo-500 to-transparent transform -rotate-45" />
          </div>
        ))}
      </div>
      
      {/* Distant Planet */}
      <div className="fixed bottom-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-800/30 to-purple-900/30 blur-sm -z-5 pointer-events-none">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-indigo-400/10 to-transparent"></div>
          <div className="absolute w-full h-4 bg-indigo-500/10 blur-sm top-1/4 transform -rotate-12"></div>
        </div>
      </div>
      
      {/* Orbital Rings */}
      <div className="fixed top-1/3 right-1/3 w-96 h-96 border border-indigo-500/10 rounded-full -z-5 pointer-events-none animate-spin-slow" style={{ animationDuration: '40s' }}></div>
      <div className="fixed bottom-1/3 left-1/3 w-64 h-64 border border-purple-500/10 rounded-full -z-5 pointer-events-none animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
      
      <main className="container mx-auto px-4 py-8 pt-24 md:pt-32 relative z-10">
        <div className="max-w-md mx-auto mt-8 relative">
          {/* Floating Space Object */}
          <div className="absolute -top-16 -left-16 opacity-60 pointer-events-none hidden md:block z-0">
            <div className="relative w-40 h-40 animate-float" style={{ animationDuration: '6s' }}>
              <Image 
                src="/images/planet.png" 
                alt="Floating Planet" 
                width={160} 
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Reset Password Form Card */}
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden z-10">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-sm -z-10"></div>
            
            {/* Card Content */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 mb-2">Atur Ulang Password</h1>
              <p className="text-slate-400">
                Buat password baru untuk akun Anda
              </p>
            </div>

            {success ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-green-400 mb-2">Password Berhasil Diubah!</h3>
                  <p className="text-slate-400 mb-4">
                    Password Anda telah berhasil diubah. Silakan login dengan password baru Anda.
                  </p>
                  <Link 
                    href="/login" 
                    className="py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all"
                  >
                    Pergi ke Halaman Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-red-400 text-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                      Password Baru
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Minimal 6 karakter"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                      Konfirmasi Password Baru
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Ulangi password baru"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !hash}
                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {/* Animated Stars in Button */}
                    <div className="absolute inset-0 w-full h-full">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:animate-twinkle"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                    <span className="relative z-10">{isLoading ? 'Memproses...' : 'Ubah Password'}</span>
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-400 text-sm">
                    Ingat password Anda?{' '}
                    <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      Login sekarang
                    </Link>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 