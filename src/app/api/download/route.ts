import { NextRequest, NextResponse } from 'next/server'
import { sourceCodeData } from '@/data/sourceCodeData'

// Tambahkan konfigurasi untuk mencegah static generation
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
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