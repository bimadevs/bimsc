'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../components/Header'
import { Provider } from '@supabase/supabase-js'
import Image from 'next/image'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isFromDownload, setIsFromDownload] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null)
  const [socialLoading, setSocialLoading] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signUp, signInWithSocial } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || '/'
  const message = searchParams.get('message')

  useEffect(() => {
    // Cek apakah user diarahkan dari halaman download
    const fromPath = redirectUrl
    if (fromPath && (fromPath.includes('/api/download') || 
        (fromPath.includes('/source-code/') && fromPath.includes('download')))) {
      setIsFromDownload(true)
    }

    // Cek apakah ada pesan dari middleware
    if (message) {
      setNotificationMessage(message)
    }
  }, [redirectUrl, message])

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

    try {
      const { error } = await signUp(email, password)
      
      if (error) {
        throw error
      }
      
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat registrasi')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignUp = async (provider: Provider) => {
    try {
      setSocialLoading(provider)
      setError(null)
      
      const { error } = await signInWithSocial(provider, redirectUrl)
      
      if (error) {
        throw error
      }
      
      // Tidak perlu redirect karena Supabase akan menangani redirect
    } catch (err: any) {
      setError(err.message || `Terjadi kesalahan saat registrasi dengan ${provider}`)
      setSocialLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Header />
      
      {/* Cosmic Background with Stars */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
      
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
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-xl"
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
            <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent transform -rotate-45" />
          </div>
        ))}
      </div>
      
      {/* Distant Planet */}
      <div className="fixed top-1/3 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-800/30 to-indigo-900/30 blur-sm -z-5 pointer-events-none">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent"></div>
          <div className="absolute w-full h-4 bg-blue-500/10 blur-sm top-1/4 transform -rotate-12"></div>
        </div>
      </div>
      
      {/* Orbital Rings */}
      <div className="fixed bottom-1/3 right-0 translate-x-1/2 w-96 h-96 border border-blue-500/10 rounded-full -z-5 pointer-events-none animate-spin-slow" style={{ animationDuration: '40s' }}></div>
      <div className="fixed top-1/4 left-1/4 w-64 h-64 border border-indigo-500/10 rounded-full -z-5 pointer-events-none animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
      
      <main className="container mx-auto px-4 py-8 pt-24 md:pt-32 relative z-10">
        <div className="max-w-md mx-auto mt-8 relative">
          {/* Floating Astronaut */}
          {/* <div className="absolute -top-16 -left-16 opacity-60 pointer-events-none hidden md:block z-0">
            <div className="relative w-40 h-40 animate-float" style={{ animationDuration: '6s' }}>
              <Image 
                src="/images/rocket.png" 
                alt="Floating Rocket" 
                width={160} 
                height={160}
                className="object-contain"
              />
            </div>
          </div> */}
          
          {/* Register Form Card */}
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden z-10">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 blur-sm -z-10"></div>
            
            {/* Card Content */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 mb-2">Bergabung dengan Misi</h1>
              <p className="text-slate-400">
                Daftarkan diri untuk menjelajahi galaksi source code
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
                  <h3 className="text-xl font-medium text-green-400 mb-2">Registrasi Berhasil!</h3>
                  <p className="text-slate-400 mb-4">
                    Silakan periksa email Anda untuk konfirmasi. Setelah mengkonfirmasi email, Anda dapat login ke akun Anda.
                  </p>
                  <Link 
                    href="/login" 
                    className="py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all"
                  >
                    Pergi ke Halaman Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {(isFromDownload || notificationMessage) && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6 text-blue-400 text-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium mb-1">Registrasi Diperlukan</p>
                        <p>{notificationMessage || 'Anda perlu membuat akun terlebih dahulu untuk mendownload source code. Setelah registrasi dan login, Anda akan diarahkan kembali ke halaman download.'}</p>
                      </div>
                    </div>
                  </div>
                )}

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

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('google')}
                      disabled={!!socialLoading}
                      className="relative overflow-hidden group py-3 px-4 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg font-medium border border-slate-700/50 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {/* Animated Particles */}
                      <div className="absolute inset-0 w-full h-full">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:animate-twinkle"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {socialLoading === 'google' ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                      )}
                      <span className="relative z-10">Google</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('github')}
                      disabled={!!socialLoading}
                      className="relative overflow-hidden group py-3 px-4 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg font-medium border border-slate-700/50 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {/* Animated Particles */}
                      <div className="absolute inset-0 w-full h-full">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:animate-twinkle"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {socialLoading === 'github' ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      <span className="relative z-10">GitHub</span>
                    </button>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700/50"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-900/80 text-slate-400">Atau daftar dengan email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                      Password
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
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Minimal 6 karakter"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                      Konfirmasi Password
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
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Ulangi password"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
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
                    <span className="relative z-10">{isLoading ? 'Memproses...' : 'Daftar'}</span>
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-400 text-sm">
                    Sudah punya akun?{' '}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
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