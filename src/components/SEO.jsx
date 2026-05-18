// src/components/SEO.jsx
import { useEffect } from 'react'

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://www.sheclinic.com',
  ogImage = '/images/logo1.jpg',
  ogType = 'website',
  keywords = ''
}) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector)
      
      if (!element) {
        element = document.createElement('meta')
        if (property) element.setAttribute('property', name)
        else element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      
      element.content = content
    }

    // Update canonical
    let canonical_link = document.querySelector('link[rel="canonical"]')
    if (!canonical_link) {
      canonical_link = document.createElement('link')
      canonical_link.rel = 'canonical'
      document.head.appendChild(canonical_link)
    }
    canonical_link.href = canonical

    // Update meta tags
    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:image', ogImage, true)
    updateMeta('og:type', ogType, true)
    updateMeta('og:url', canonical, true)
    updateMeta('twitter:title', title, true)
    updateMeta('twitter:description', description, true)
    updateMeta('twitter:image', ogImage, true)

  }, [title, description, canonical, ogImage, ogType, keywords])

  return null
}
