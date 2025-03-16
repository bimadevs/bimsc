'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import Header from '../components/Header'
import Image from 'next/image'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { resetPasswordForEmail } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await resetPasswordForEmail(
        email, 
        `${window.location.origin}/reset-password`
      )
      
      if (error) {
        throw error
      }
      
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat mengirim email reset password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24 md:pt-32">
        {/* Stars Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
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
                animationDelay: `${Math.random() * 10}s`
              }}
            >
              <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent transform -rotate-45" />
            </div>
          ))}
        </div>
        
        <div className="max-w-md mx-auto mt-8 relative">
          {/* Floating Astronaut - Positioned to not overlap with navbar */}
          <div className="absolute -top-8 -right-8 opacity-30 pointer-events-none hidden md:block z-0">
            <div className="relative w-24 h-24 animate-float" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white opacity-80">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Rest of the forgot password form */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800 shadow-xl relative overflow-hidden z-10">
            <div className="text-center mb-8 pt-10">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 mb-2">Lupa Password</h1>
              <p className="text-slate-400">
                Masukkan email Anda untuk menerima link reset password
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
                  <h3 className="text-xl font-medium text-green-400 mb-2">Email Terkirim!</h3>
                  <p className="text-slate-400 mb-4">
                    Kami telah mengirimkan link reset password ke email Anda. Silakan periksa kotak masuk atau folder spam Anda.
                  </p>
                  <Link 
                    href="/login" 
                    className="py-2 px-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-indigo-600 transition-all"
                  >
                    Kembali ke Login
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
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
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
                    <span className="relative z-10">{isLoading ? 'Mengirim...' : 'Kirim Link Reset'}</span>
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-400 text-sm">
                    Ingat password Anda?{' '}
                    <Link href="/login" className="text-teal-400 hover:text-teal-300 transition-colors">
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