import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

// Konfigurasi untuk client-side
export const createClient_browser = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    // Saat build time, kembalikan client dummy untuk mencegah error
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
      return {
        auth: {
          getSession: () => Promise.resolve({ data: { session: null } }),
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
          signInWithPassword: () => Promise.resolve({ error: null }),
          signUp: () => Promise.resolve({ error: null }),
          signInWithOAuth: () => Promise.resolve({ error: null }),
          signOut: () => Promise.resolve(),
          resetPasswordForEmail: () => Promise.resolve({ error: null }),
          updateUser: () => Promise.resolve({ error: null }),
        }
      } as any
    }
    console.error('Supabase URL and Anon Key must be provided')
  }
  
  return createBrowserClient(
    supabaseUrl!,
    supabaseKey!
  )
}

// Konfigurasi untuk server-side
export const supabase = (() => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    // Saat build time, kembalikan client dummy untuk mencegah error
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
      return {
        auth: {
          getSession: () => Promise.resolve({ data: { session: null } }),
        }
      } as any
    }
    console.error('Supabase URL and Anon Key must be provided')
    // Return dummy client untuk mencegah error
    return {} as any
  }
  
  return createClient(supabaseUrl, supabaseKey)
})() 