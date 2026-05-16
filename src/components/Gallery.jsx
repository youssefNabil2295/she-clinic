// src/components/Gallery.jsx
import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { motion, AnimatePresence } from 'framer-motion'

// إنشاء مصفوفة الـ 65 صورة ديناميكياً بناءً على الأسماء الجديدة
const IMAGES = Array.from({ length: 65 }, (_, i) => {
  const index = i + 1;
  // الصورة رقم 4 هي الوحيدة بامتداد jfif
  const ext = index === 4 ? 'jfif' : 'jpg';
  return `/images/galery/gallery-${index}.${ext}`;
});

export default function Gallery() {
  const { isAr } = useLang()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-offwhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy relative inline-block">
            {isAr ? 'معرض الحالات الواقعية' : 'Real Results Gallery'}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full"></span>
          </h2>
          <p className="mt-8 text-clinic-gray max-w-2xl mx-auto text-sm md:text-base">
            {isAr 
              ? 'نفتخر بمشاركة نتائجنا الحقيقية لعملائنا، حيث تلتقي الخبرة الطبية بالدقة الجمالية.'
              : 'Proudly sharing real results from our clients, where medical expertise meets aesthetic precision.'}
          </p>
        </motion.div>

        {/* عرض الصور */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_100px_rgb(0,0,0,0.1)] bg-navy/5 border border-white/50 aspect-[4/5] md:aspect-video flex items-center justify-center">
            
            {/* خلفية مموهة لملء الفراغات (لجعل الصورة تبدو كاملة) */}
            <div className="absolute inset-0 z-0">
              <img 
                src={IMAGES[currentIndex]} 
                alt="" 
                className="w-full h-full object-cover blur-2xl opacity-30 scale-110"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={IMAGES[currentIndex]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                alt="Clinic Results"
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

            {/* عداد الصور */}
            <div className="absolute top-6 right-6 z-20 bg-navy/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full border border-white/20">
              {currentIndex + 1} / {IMAGES.length}
            </div>
          </div>

          {/* التصفح السريع (Dots) */}
          <div className="flex justify-center flex-wrap gap-1.5 mt-8 max-w-2xl mx-auto">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-gold w-6' : 'bg-gray-300 w-1.5 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}