import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  // Cek apakah variabel lingkungan tersedia
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL and Anon Key must be provided')
    // Lanjutkan request tanpa autentikasi
    return NextResponse.next()
  }
  
  // Inisialisasi Supabase client dengan cookies dari request
  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
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
  const protectedPaths = ['/profile', '/my-source-code', '/api/download']
  
  // Cek apakah path saat ini memerlukan autentikasi
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Cek apakah ini adalah request untuk download
  const isDownloadRequest = request.nextUrl.pathname.includes('/api/download') || 
                           (request.nextUrl.pathname.includes('/source-code/') && 
                            request.nextUrl.searchParams.has('download'))

  // Jika path memerlukan autentikasi atau ini adalah request download dan user belum login, redirect ke halaman login
  if ((isProtectedPath || isDownloadRequest) && !session) {
    const redirectUrl = new URL('/login', request.url)
    
    // Tambahkan parameter redirect untuk mengarahkan kembali ke halaman sebelumnya setelah login
    if (isDownloadRequest && request.nextUrl.pathname.includes('/source-code/')) {
      // Jika ini adalah request download dari halaman detail source code
      const sourceCodeId = request.nextUrl.pathname.split('/').pop()
      redirectUrl.searchParams.set('redirect', `/source-code/${sourceCodeId}`)
      redirectUrl.searchParams.set('message', 'Silakan login untuk mendownload source code')
    } else {
      // Untuk request lainnya
      redirectUrl.searchParams.set('redirect', request.nextUrl.pathname + request.nextUrl.search)
    }
    
    return NextResponse.redirect(redirectUrl)
  }

  // Jika user sudah login dan mencoba mengakses halaman login/register, redirect ke homepage
  if (session && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Konfigurasi path yang akan diproses oleh middleware
export const config = {
  matcher: [
    '/login',
    '/register',
    '/api/download/:path*',
    '/source-code/:path*',
  ],
} 