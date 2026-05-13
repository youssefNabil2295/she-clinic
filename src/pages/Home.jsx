// src/pages/Home.jsx
import { useEffect } from 'react'
import Hero        from '../components/Hero'
import About       from '../components/About'
import Services    from '../components/Services'
import Gallery     from '../components/Gallery'  
import VideoGallery from '../components/VideoGallery'
import BookingForm from '../components/BookingForm'
import { useLang } from '../context/LangContext'
import { UI }      from '../data/content'
import { motion }  from 'framer-motion'

export default function Home() {
  const { lang } = useLang()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Hero />
      <About />
      <Services />
      <VideoGallery />
      <Gallery />      
      <div className="gold-divider" />
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