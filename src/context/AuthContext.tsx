'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient_browser } from '@/utils/supabase'
import { User, Session, Provider } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useToast } from './ToastContext'

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signInWithSocial: (provider: Provider, redirectTo?: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [prevAuthState, setPrevAuthState] = useState<boolean | null>(null)
  const router = useRouter()
  const supabase = createClient_browser()

  useEffect(() => {
    const getSession = async () => {
      setIsLoading(true)
      
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
        setPrevAuthState(!!session)
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const isAuthenticated = !!session
      
      // Jika sebelumnya tidak ada session dan sekarang ada (login)
      if (prevAuthState === false && isAuthenticated) {
        // Toast akan ditampilkan di halaman setelah redirect
        if (typeof window !== 'undefined') {
          localStorage.setItem('showWelcomeToast', 'true')
        }
      }
      
      // Jika sebelumnya ada session dan sekarang tidak ada (logout)
      if (prevAuthState === true && !isAuthenticated) {
        // Tidak perlu menyimpan di localStorage karena kita akan menampilkan toast sebelum redirect
      }
      
      setSession(session)
      setUser(session?.user ?? null)
      setPrevAuthState(isAuthenticated)
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router, prevAuthState])

  // Efek untuk menampilkan toast selamat datang setelah login
  useEffect(() => {
    // Kita perlu menggunakan dynamic import untuk useToast karena circular dependency
    const showWelcomeToast = async () => {
      if (typeof window !== 'undefined' && localStorage.getItem('showWelcomeToast') === 'true') {
        const { useToast } = await import('./ToastContext')
        const { showToast } = useToast()
        showToast(`Selamat datang, ${user?.email?.split('@')[0] || 'Pengguna'}! 👋`, 'success')
        localStorage.removeItem('showWelcomeToast')
      }
    }
    
    if (user) {
      showWelcomeToast()
    }
  }, [user])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    return { error }
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    
    return { error }
  }

  const signInWithSocial = async (provider: Provider, redirectTo?: string) => {
    const callbackUrl = new URL('/auth/callback', window.location.origin)
    
    // Tambahkan parameter redirect jika ada
    if (redirectTo) {
      callbackUrl.searchParams.set('redirect', redirectTo)
    }
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: callbackUrl.toString()
      }
    })
    
    return { error }
  }

  const signOut = async () => {
    // Tampilkan toast terima kasih sebelum logout
    const { useToast } = await import('./ToastContext')
    const { showToast } = useToast()
    showToast('Terima kasih sudah berkunjung! Sampai jumpa kembali 👋', 'info')
    
    // Delay sedikit untuk memastikan toast muncul sebelum redirect
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    await supabase.auth.signOut()
    router.push('/')
  }

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signInWithSocial,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 