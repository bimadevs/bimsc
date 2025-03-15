'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import Header from '../components/Header'
import Link from 'next/link'

export default function Profile() {
  const { user, isLoading } = useAuth()
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [github, setGithub] = useState('')
  const [website, setWebsite] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    // Simulasi mengambil data profil dari database
    // Dalam implementasi nyata, ini akan mengambil data dari Supabase
    setTimeout(() => {
      setName('User')
      setBio('Developer Indonesia yang senang berbagi source code.')
      setGithub('username')
      setWebsite('https://example.com')
    }, 1000)
  }, [])

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    
    // Simulasi menyimpan data ke database
    // Dalam implementasi nyata, ini akan menyimpan data ke Supabase
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      setSuccessMessage('Profil berhasil diperbarui!')
      
      // Menghilangkan pesan sukses setelah 3 detik
      setTimeout(() => {
        setSuccessMessage(null)
      }, 3000)
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-16">
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

        <div className="max-w-4xl mx-auto mt-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/dashboard" className="hover:text-purple-400 transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-white">Profil</span>
          </div>

          {/* Profile Header */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                  {name ? name.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {name || 'Pengguna BimSC'}
                </h1>
                <p className="text-slate-400 mb-4">
                  {user?.email}
                </p>
                
                {bio && !isEditing && (
                  <p className="text-slate-300 mb-6 max-w-2xl">
                    {bio}
                  </p>
                )}

                {!isEditing && (
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {github && (
                      <a
                        href={`https://github.com/${github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Website
                      </a>
                    )}
                    
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg font-medium border border-purple-500/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit Profil
                    </button>
                  </div>
                )}

                {successMessage && (
                  <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-sm">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Edit Profile Form */}
          {isEditing && (
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Edit Profil</h2>
              
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-slate-300 mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ceritakan tentang diri Anda"
                  />
                </div>

                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-slate-300 mb-2">
                    Username GitHub
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-700 bg-slate-800 text-slate-400">
                      github.com/
                    </span>
                    <input
                      id="github"
                      type="text"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-r-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-2">
                    Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Account Settings */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Pengaturan Akun</h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <p className="text-slate-400">{user?.email}</p>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors">
                  Ubah Email
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Password</h3>
                  <p className="text-slate-400">Terakhir diubah: Tidak pernah</p>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors">
                  Ubah Password
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Hapus Akun</h3>
                  <p className="text-slate-400">Tindakan ini tidak dapat dibatalkan</p>
                </div>
                <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg font-medium border border-red-500/20 transition-colors">
                  Hapus Akun
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 