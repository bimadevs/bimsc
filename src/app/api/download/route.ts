import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { sourceCodeData } from '@/data/sourceCodeData'

// Tambahkan konfigurasi untuk mencegah static generation
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Verifikasi autentikasi
    const cookieStore = cookies()
    
    // Cek apakah kita berada di build time
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined' && !cookieStore) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized. Silakan login untuk mendownload source code.' }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      return new NextResponse(
        JSON.stringify({ error: 'Server configuration error.' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
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

    // Cek apakah user sudah login
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized. Silakan login untuk mendownload source code.' }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Dapatkan ID source code dari query parameter
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: 'ID source code tidak ditemukan.' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Cari source code berdasarkan ID
    const sourceCode = sourceCodeData.find(item => item.id === id)
    if (!sourceCode) {
      return new NextResponse(
        JSON.stringify({ error: 'Source code tidak ditemukan.' }),
        { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Catat aktivitas download (bisa diimplementasikan nanti)
    // await logDownloadActivity(session.user.id, id)

    // Kembalikan URL GitHub untuk didownload
    return new NextResponse(
      JSON.stringify({
        success: true,
        githubUrl: sourceCode.githubUrl,
        title: sourceCode.title
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error in download API:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Terjadi kesalahan pada server.' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
} 