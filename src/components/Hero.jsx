// src/components/Hero.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR, IMAGES, UI } from '../data/content'
import { motion } from 'framer-motion'

export default function Hero() {
  const { lang, isAr } = useLang()

  function scrollTo(hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[500px] md:min-h-[600px] overflow-hidden pt-16 bg-navy">

      
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.doctorHero} 
          alt="She Clinic"
          className="w-full h-full object-cover"
        />
        {/* تدرج لوني خفيف من الأسفل لضمان وضوح زر الحجز */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Booking Button at bottom right */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20"
      >
        <button onClick={() => scrollTo('booking')}
          className="flex items-center gap-3 bg-gold text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-2xl hover:bg-white hover:text-gold hover:-translate-y-1 transition-all duration-300">
          <span className="text-xl">📅</span> 
          <span>{UI.bookNow[lang]}</span>
        </button>
      </motion.div>
    </section>
  )
}