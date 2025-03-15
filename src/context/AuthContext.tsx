'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient_browser } from '@/utils/supabase'
import { User, Session, Provider } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signInWithSocial: (provider: Provider, redirectTo?: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  resetPasswordForEmail: (email: string, redirectTo: string) => Promise<{ error: any }>
  resetPassword: (password: string) => Promise<{ error: any }>
  showWelcomeToast: boolean
  setShowWelcomeToast: (show: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showWelcomeToast, setShowWelcomeToast] = useState(false)
  const router = useRouter()
  const supabase = createClient_browser()

  useEffect(() => {
    const getSession = async () => {
      setIsLoading(true)
      
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  // Efek untuk menampilkan toast selamat datang dari localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && user) {
      if (localStorage.getItem('showWelcomeToast') === 'true') {
        setShowWelcomeToast(true)
        localStorage.removeItem('showWelcomeToast')
      }
    }
  }, [user])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (!error) {
      // Set flag untuk menampilkan toast setelah login berhasil
      if (typeof window !== 'undefined') {
        localStorage.setItem('showWelcomeToast', 'true')
      }
    }
    
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
    try {
      await supabase.auth.signOut()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const resetPasswordForEmail = async (email: string, redirectTo: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo
    })
    
    return { error }
  }

  const resetPassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password
    })
    
    return { error }
  }

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signInWithSocial,
    signOut,
    resetPasswordForEmail,
    resetPassword,
    showWelcomeToast,
    setShowWelcomeToast
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