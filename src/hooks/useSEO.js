// src/hooks/useSEO.js
import { useEffect } from 'react'

/**
 * Custom hook للتحكم في SEO tags
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.keywords - Meta keywords
 * @param {string} config.canonical - Canonical URL
 * @param {string} config.ogImage - OG image URL
 * @param {string} config.ogType - OG type (default: 'website')
 */
export function useSEO({
  title,
  description,
  keywords = '',
  canonical = 'https://www.sheclinic.com',
  ogImage = '/images/logo1.jpg',
  ogType = 'website',
  author = 'She Clinic'
} = {}) {
  useEffect(() => {
    // Update title
    document.title = title

    // Helper to update meta tags
    const setMeta = (name, content, isProperty = false) => {
      const attrName = isProperty ? 'property' : 'name'
      const selector = `meta[${attrName}="${name}"]`
      let element = document.querySelector(selector)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, name)
        document.head.appendChild(element)
      }

      element.content = content
    }

    // Update canonical
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    // Update all meta tags
    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('author', author)
    setMeta('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:image', ogImage, true)
    setMeta('og:type', ogType, true)
    setMeta('og:url', canonical, true)

    // Twitter
    setMeta('twitter:card', 'summary_large_image', true)
    setMeta('twitter:title', title, true)
    setMeta('twitter:description', description, true)
    setMeta('twitter:image', ogImage, true)

  }, [title, description, keywords, canonical, ogImage, ogType, author])
}
