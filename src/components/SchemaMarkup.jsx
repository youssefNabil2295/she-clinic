// src/components/SchemaMarkup.jsx
import { useEffect } from 'react'
import { DOCTOR } from '../data/content'

export default function SchemaMarkup({ type = 'LocalBusiness' }) {
  useEffect(() => {
    let schema = {}

    if (type === 'LocalBusiness') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': 'https://www.sheclinic.com',
        'name': 'She Clinic',
        'image': 'https://www.sheclinic.com/images/logo1.jpg',
        'description': 'Advanced laser treatments, skin care, and aesthetic procedures in Nasr City, Egypt.',
        'url': 'https://www.sheclinic.com',
        'telephone': '+20 128 888 1178',
        'email': 'info@sheclinic.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'T2 Business Complex, 3rd Floor, Clinic 3, Aviation Street',
          'addressLocality': 'Nasr City',
          'addressRegion': 'Cairo',
          'postalCode': '',
          'addressCountry': 'EG'
        },
        'sameAs': [
          'https://www.instagram.com/she_clinic_official/',
          'https://www.facebook.com/sheclinic1',
          'https://www.tiktok.com/@she_clinic_official'
        ],
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          'opens': '11:00',
          'closes': '21:00'
        },
        'priceRange': '$$',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '250'
        }
      }
    } else if (type === 'Service') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'She Clinic',
        'url': 'https://www.sheclinic.com',
        'areaServed': 'EG'
      }
    }

    // Add or update script tag
    let script = document.querySelector('script[type="application/ld+json"]#schema-markup')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'schema-markup'
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(schema)

  }, [type])

  return null
}
