import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Tambahkan konfigurasi untuk mencegah static generation
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const redirectTo = requestUrl.searchParams.get('redirect') || '/'

  if (code) {
    const cookieStore = cookies()
    
    // Cek apakah variabel lingkungan tersedia
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase URL and Anon Key must be provided')
      // Redirect ke halaman utama jika konfigurasi tidak tersedia
      return NextResponse.redirect(new URL('/', request.url))
    }
    
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )

    await supabase.auth.exchangeCodeForSession(code)
  }

  // Tambahkan parameter untuk menampilkan toast selamat datang
  const finalRedirectUrl = new URL(redirectTo, request.url)
  finalRedirectUrl.searchParams.set('showWelcome', 'true')

  // URL untuk redirect setelah autentikasi berhasil
  return NextResponse.redirect(finalRedirectUrl)
} 