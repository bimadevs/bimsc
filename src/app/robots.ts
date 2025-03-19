import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/auth/',
        '/admin/',
        '/private/',
        '/profile/',
        '/settings/',
      ],
    },
    sitemap: 'https://bimsc.vercel.app/sitemap.xml',
  }
} 