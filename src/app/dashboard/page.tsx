'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Header from '../components/Header'
import Link from 'next/link'

export default function Dashboard() {
  const { user, isLoading, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

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

        <div className="mt-16">
          {/* Dashboard Header */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-slate-400">
                  Selamat datang, <span className="text-purple-400">{user?.email}</span>
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/profile"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-colors"
                >
                  Profil
                </Link>
                <button
                  onClick={signOut}
                  className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg font-medium border border-red-500/20 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex border-b border-slate-800 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('my-source-code')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'my-source-code'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Source Code Saya
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'favorites'
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Favorit
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {activeTab === 'overview' && (
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Aktivitas Terbaru</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Akun Dibuat</h3>
                          <p className="text-slate-400 text-sm">Selamat datang di BimSC!</p>
                        </div>
                        <div className="ml-auto text-right">
                          <span className="text-slate-500 text-sm">Baru saja</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center py-8">
                      <p className="text-slate-500">Belum ada aktivitas lainnya</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'my-source-code' && (
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Source Code Saya</h2>
                    <Link
                      href="/upload-source-code"
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Upload Source Code
                    </Link>
                  </div>
                  
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-slate-800/80 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Belum ada source code</h3>
                    <p className="text-slate-400 mb-6 max-w-md mx-auto">
                      Anda belum mengupload source code apapun. Mulai bagikan karya Anda dengan komunitas!
                    </p>
                    <Link
                      href="/upload-source-code"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Upload Source Code Pertama
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Source Code Favorit</h2>
                  
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-slate-800/80 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Belum ada favorit</h3>
                    <p className="text-slate-400 mb-6 max-w-md mx-auto">
                      Anda belum menambahkan source code apapun ke favorit. Jelajahi source code dan tambahkan ke favorit!
                    </p>
                    <Link
                      href="/source-code"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Jelajahi Source Code
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* User Stats */}
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Statistik</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
                    <div className="text-sm text-slate-400">Source Code</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">0</div>
                    <div className="text-sm text-slate-400">Favorit</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">0</div>
                    <div className="text-sm text-slate-400">Unduhan</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">0</div>
                    <div className="text-sm text-slate-400">Kontribusi</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Akses Cepat</h2>
                
                <div className="space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Profil Saya</span>
                  </Link>
                  
                  <Link
                    href="/upload-source-code"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Upload Source Code</span>
                  </Link>
                  
                  <Link
                    href="/my-source-code"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Source Code Saya</span>
                  </Link>
                  
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Pengaturan</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 