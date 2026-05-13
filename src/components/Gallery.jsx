// src/components/Gallery.jsx
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { motion } from 'framer-motion'

const DEFAULT_IMAGES = [
  '/images/6.jpeg.jpg',
  '/images/7.jpeg.jpg',
  '/images/8.jpeg.jpg',
  '/images/9.jpeg.jpg',
  '/images/10.jpeg.jpg',
]

export default function Gallery() {
  const { isAr } = useLang()
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem('sheclinic_gallery')
    if (stored) {
      const parsed = JSON.parse(stored)
      // تحويل الصور المخزنة (لو كانت strings) إلى نفس الشكل
      const formatted = parsed.map(img => typeof img === 'string' ? img : img.url || img)
      setImages(formatted)
    } else {
      setImages(DEFAULT_IMAGES)
      localStorage.setItem('sheclinic_gallery', JSON.stringify(DEFAULT_IMAGES))
    }
  }, [])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return (
      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-navy/50">{isAr ? 'لا توجد صور حالياً' : 'No images yet'}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block">
            {isAr ? 'معرض الأعمال' : 'Gallery'}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* الصورة الرئيسية */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-96 md:h-[800px]  transition-all duration-300"
            />
          </div>

          {/* الأسهم */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition-all z-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition-all z-10"
          >
            ›
          </button>

          {/* نقاط المؤشر (dots) */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gold w-6' : 'bg-gray-300 w-2 hover:bg-gold/50'
                  }`}
              />
            ))}
          </div>

          {/* عداد الصور */}
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>


      </motion.div>
    </section>
  )
}