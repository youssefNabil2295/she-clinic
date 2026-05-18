// src/pages/Home.jsx
import { useEffect } from 'react'
import Hero        from '../components/Hero'
import Services    from '../components/Services'
import Gallery     from '../components/Gallery'  
import VideoGallery from '../components/VideoGallery'
import ClinicInterior from '../components/ClinicInterior'
import Reviews     from '../components/Reviews'
import BookingForm from '../components/BookingForm'
import SEO         from '../components/SEO'
import SchemaMarkup from '../components/SchemaMarkup'
import { useLang } from '../context/LangContext'
import { UI }      from '../data/content'
import { motion }  from 'framer-motion'

export default function Home() {
  const { lang } = useLang()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const seoData = {
    ar: {
      title: 'عيادة شي كلينك | أفضل عيادة ليزر وتجميل بمصر - Nasr City',
      description: 'اكتشفي أفضل عيادة تجميل وليزر في مصر. خدمات متقدمة: ليزر إزالة الشعر، فيلر، بوتوكس، علاجات بشرة. احجزي استشارتك المجانية الآن!',
      keywords: 'عيادة تجميل، ليزر، علاجات البشرة، فيلر، بوتوكس، مدينة نصر، القاهرة، مصر'
    },
    en: {
      title: 'She Clinic - Best Laser & Aesthetic Clinic in Egypt | Nasr City',
      description: 'Discover the best laser and aesthetic clinic in Egypt. Advanced treatments: laser hair removal, fillers, botox, skin care. Book your free consultation today!',
      keywords: 'laser clinic, aesthetic clinic, beauty treatments, skin care, Cairo, Nasr City, Egypt'
    }
  }

  const current = seoData[lang] || seoData.en

  return (
    <>
      <SEO 
        title={current.title}
        description={current.description}
        keywords={current.keywords}
        canonical="https://www.sheclinic.com/"
        ogImage="/images/logo1.jpg"
      />
      <SchemaMarkup type="LocalBusiness" />
      
      <Hero />
      <Services />
      <VideoGallery />
      <ClinicInterior />
      <Gallery />      
      <div className="gold-divider" />
      <Reviews />
      <section id="booking" className="bg-offwhite py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy relative inline-block">
              {UI.bookingTitle[lang]}
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.05)] p-8 md:p-12 border border-gray-100"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
      <div className="gold-divider" />
    </>
  )
}