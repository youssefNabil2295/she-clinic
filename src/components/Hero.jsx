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
      
      
        
        </div>
      </div>
      

      {/* صورة العيادة / الليزر */}
    <div className="absolute inset-0 z-0">
  <img 
    src={IMAGES.doctorHero} 
    alt="She Clinic"
    className="w-screen h-[500px] mt-4"
    
  />
  
    
      </div>

      
      
    </section>
    
  )
}