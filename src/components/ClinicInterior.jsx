// src/components/ClinicInterior.jsx
import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { motion, AnimatePresence } from 'framer-motion'

// صور من داخل العيادة
const CLINIC_IMAGES = [
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.09 PM (1).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.09 PM.jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.10 PM (1).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.10 PM (2).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.10 PM (3).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.10 PM (4).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.10 PM.jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.11 PM (1).jpeg',
  '/images/inshe/WhatsApp Image 2026-05-18 at 12.13.11 PM.jpeg',
]

export default function ClinicInterior() {
  const { isAr } = useLang()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoplayRef = useRef(null)

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length)
    }, 5000) // تبديل الصورة كل 5 ثواني

    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length)
    resetAutoplay()
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + CLINIC_IMAGES.length) % CLINIC_IMAGES.length)
    resetAutoplay()
  }

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC_IMAGES.length)
    }, 5000)
  }

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // سحب لليسار = الصورة التالية
        nextImage()
      } else {
        // سحب لليمين = الصورة السابقة
        prevImage()
      }
    }
  }

  return (
    <section id="clinic-interior" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy relative inline-block">
            {isAr ? 'من داخل عيادتنا' : 'Inside Our Clinic'}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full"></span>
          </h2>
          <p className="mt-8 text-clinic-gray max-w-2xl mx-auto text-sm md:text-base">
            {isAr 
              ? 'تعرف على مرافق عيادتنا الحديثة والمجهزة بأحدث التقنيات الطبية'
              : 'Discover our modern facilities equipped with the latest medical technology'}
          </p>
        </motion.div>

        {/* عرض الصور */}
        <div 
          className="relative group max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_100px_rgb(0,0,0,0.1)] bg-navy/5 border border-white/50 aspect-[4/5] md:aspect-video flex items-center justify-center cursor-grab active:cursor-grabbing">
            
            {/* خلفية مموهة */}
            <div className="absolute inset-0 z-0">
              <img 
                src={CLINIC_IMAGES[currentIndex]} 
                alt={isAr ? 'العيادة من الداخل' : 'Clinic Interior'} 
                className="w-full h-full object-cover blur-2xl opacity-30 scale-110"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={CLINIC_IMAGES[currentIndex]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                alt="Clinic Interior"
                className="relative z-10 w-full h-full object-contain pointer-events-none"
              />
            </AnimatePresence>

            {/* أزرار التنقل */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <span className="text-2xl">{isAr ? '›' : '‹'}</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <span className="text-2xl">{isAr ? '‹' : '›'}</span>
            </button>
          </div>

          {/* مؤشرات النقاط */}
          <div className="flex justify-center gap-2 mt-8">
            {CLINIC_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gold w-8' 
                    : 'bg-navy/30 hover:bg-navy/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
