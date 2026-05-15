// src/components/Gallery.jsx
import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { motion } from 'framer-motion'

// الصور موجودة في public/images/ بامتداد .jpeg.jpg
const IMAGES = [
  '/images/1.jpeg.jpg',
  '/images/2.jpeg.jpg',
  '/images/3.jpeg.jpg',
  '/images/4.jpeg.jpg',
  '/images/5.jpeg.jpg',
  '/images/6.jpeg.jpg',
  '/images/7.jpeg.jpg',
  '/images/8.jpeg.jpg',
  '/images/9.jpeg.jpg',
  '/images/10.jpeg.jpg',
  '/images/11.jpeg.jpg',
]

export default function Gallery() {
  const { isAr } = useLang()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)

  return (
    <section id="gallery" className="py-16 md:py-20 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block">
            {isAr ? 'معرض الأعمال' : 'Gallery'}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
          </h2>
        </div>
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <img
              src={IMAGES[currentIndex]}
              alt="Gallery"
              className="w-full h-96 md:h-[500px] object-cover"
              onError={(e) => {
                console.log('فشل تحميل الصورة:', IMAGES[currentIndex])
                e.target.src = 'https://via.placeholder.com/800x500?text=Image+Not+Found'
              }}
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white text-2xl"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white text-2xl"
          >
            ›
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-gold w-6' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>

          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {currentIndex + 1} / {IMAGES.length}
          </div>
        </div>
      </motion.div>
    </section>
  )
}