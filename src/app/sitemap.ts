import { MetadataRoute } from 'next'
import { createClient_browser } from '@/utils/supabase'

// Interface untuk tipe data
interface SourceCode {
  id: string
  updated_at: string
}

interface Category {
  id: string
  updated_at: string
}

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient_browser()
  
  // Dapatkan semua source code
  const { data: sourceCodes } = await supabase
    .from('source_codes')
    .select('id, updated_at')
  
  // Dapatkan semua kategori
  const { data: categories } = await supabase
    .from('categories')
    .select('id, updated_at')

  // URL dasar website
  const baseUrl = 'https://sc.bimadev.xyz'

  // Halaman statis
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/source-code`,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/license`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.5,
    },
  ]

  // Halaman source code dinamis
  const sourceCodePages = ((sourceCodes || []) as SourceCode[]).map((sourceCode) => ({
    url: `${baseUrl}/source-code/${sourceCode.id}`,
    lastModified: new Date(sourceCode.updated_at),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  }))

  // Halaman kategori dinamis
  const categoryPages = ((categories || []) as Category[]).map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(category.updated_at),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.6,
  }))

  return [...staticPages, ...sourceCodePages, ...categoryPages]
} 