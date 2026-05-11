// src/components/Hero.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR, IMAGES, UI } from '../data/content'

export default function Hero() {
  const { lang, isAr } = useLang()

  function scrollTo(hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[420px] md:min-h-[480px] overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #FFF5F0 0%, #FFE8DC 30%, #F5E6D3 60%, #F0E0D0 100%)' }}>
      
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center py-16 md:py-20">
        <div className={`max-w-md z-10 relative ${isAr ? 'text-right' : 'text-left'}`}>
        
        
          <button onClick={() => scrollTo('booking')}
            className="inline-flex items-start gap-5 bg-clinic-gold-dark text-navy font-bold px-7 py-3 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
            ✨ {UI.bookNow[lang]}
          </button>
        </div>
      </div>

      {/* الصورة */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.doctorHero} 
          alt="She Clinic"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </section>
  )
}