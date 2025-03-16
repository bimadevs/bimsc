'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { createClient_browser } from '@/utils/supabase'
import Header from '../components/Header'
import Image from 'next/image'

// Tambahkan konfigurasi untuk mencegah static generation
export const dynamic = 'force-dynamic'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasSession, setHasSession] = useState(false)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient_browser()
  
  useEffect(() => {
    // Cek apakah ada session untuk reset password
    const checkSession = async () => {
      try {
        // Cek apakah kita berada di client-side
        if (typeof window === 'undefined') {
          return
        }
        
        // Cek apakah ada hash di URL (tanda dari Supabase auth)
        if (window.location.hash) {
          setHasSession(true)
        } else {
          // Jika tidak ada hash, redirect ke halaman forgot password
          router.push('/forgot-password')
        }
      } catch (error) {
        console.error('Error checking session:', error)
        setError('Terjadi kesalahan saat memeriksa sesi. Silakan coba lagi.')
      }
    }
    
    checkSession()
  }, [router])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setError(null)
    
    // Validasi password
    if (password.length < 6) {
      setError('Password harus minimal 6 karakter')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok')
      return
    }
    
    setLoading(true)
    
    try {
      // Gunakan Supabase client langsung untuk update password
      const { error } = await supabase.auth.updateUser({
        password: password
      })
      
      if (error) {
        setError(error.message)
      } else {
        setSuccess(true)
        // Redirect ke halaman login setelah 3 detik
        setTimeout(() => {
          router.push('/login?message=Password berhasil diubah. Silakan login dengan password baru Anda.')
        }, 3000)
      }
    } catch (error: any) {
      setError(error.message || 'Terjadi kesalahan saat mengubah password')
    } finally {
      setLoading(false)
    }
  }
  
  if (!hasSession && typeof window !== 'undefined') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 pt-24 md:pt-32">
        <div className="max-w-md w-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800 shadow-xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">Mengalihkan...</h1>
            <p className="text-slate-400 mt-2">Anda akan dialihkan ke halaman lupa password.</p>
          </div>
        </div>
      </div>
    )
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
          <div className="absolute top-10 -right-8 opacity-50 pointer-events-none hidden md:block z-0">
            <div className="relative w-32 h-32 animate-float" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white opacity-80">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800 shadow-xl relative overflow-hidden z-10">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-lg opacity-20 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm -z-10" />
            
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white">Reset Password</h1>
              <p className="text-slate-400 mt-2">Masukkan password baru untuk akun Anda</p>
            </div>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-md mb-4">
                Password berhasil diubah! Anda akan dialihkan ke halaman login...
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-1">
                  Password Baru
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Minimal 6 karakter"
                  required
                  disabled={loading || success}
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-400 mb-1">
                  Konfirmasi Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Masukkan kembali password baru"
                  required
                  disabled={loading || success}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={loading || success}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Kembali ke halaman login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 