import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(request: NextRequest) {
  // Inisialisasi Supabase client dengan cookies dari request
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          // Middleware tidak dapat mengatur cookies
          // Ini hanya untuk memenuhi interface
        },
        remove(name: string, options: any) {
          // Middleware tidak dapat menghapus cookies
          // Ini hanya untuk memenuhi interface
        },
      },
    }
  )

  // Cek apakah user sudah login
  const { data: { session } } = await supabase.auth.getSession()

  // Daftar path yang memerlukan autentikasi
  const protectedPaths = ['/dashboard', '/profile', '/my-source-code']
  
  // Cek apakah path saat ini memerlukan autentikasi
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Jika path memerlukan autentikasi dan user belum login, redirect ke halaman login
  if (isProtectedPath && !session) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Jika user sudah login dan mencoba mengakses halaman login/register, redirect ke dashboard
  if (session && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Konfigurasi path yang akan diproses oleh middleware
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/my-source-code/:path*',
    '/login',
    '/register',
  ],
} 