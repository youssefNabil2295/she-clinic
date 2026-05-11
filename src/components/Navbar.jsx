// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const { lang, isAr, toggle } = useLang()
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollToSection = (hash) => {
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (hash) => {
    setMenuOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(hash)
      }, 200)
    } else {
      scrollToSection(hash)
    }
  }

  const goToHome = () => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white border-b-2 border-gold/50 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <button onClick={goToHome} className="font-display font-bold text-navy text-xl hover:text-gold transition-colors">
          She Clinic
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavigation('hero')} className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold">
            {NAV_LINKS.find(l => l.hash === 'hero')?.[lang] || (isAr ? 'الرئيسية' : 'Home')}
          </button>
          <button onClick={() => handleNavigation('about')} className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold">
            {NAV_LINKS.find(l => l.hash === 'about')?.[lang] || (isAr ? 'عن العيادة' : 'About')}
          </button>
          <button onClick={() => handleNavigation('services')} className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold">
            {NAV_LINKS.find(l => l.hash === 'services')?.[lang] || (isAr ? 'الخدمات' : 'Services')}
          </button>
          <button onClick={() => handleNavigation('gallery')} className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold">
            {NAV_LINKS.find(l => l.hash === 'gallery')?.[lang] || (isAr ? 'المعرض' : 'Gallery')}
          </button>
          <button onClick={() => handleNavigation('booking')} className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold">
            {NAV_LINKS.find(l => l.hash === 'booking')?.[lang] || (isAr ? 'الحجز' : 'Booking')}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="border border-gold text-gold font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-gold hover:text-white transition-all"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>

          {/* زر الحجز - تم إصلاح ظهور النص */}
          <button 
            onClick={() => handleNavigation('booking')}
            className="hidden md:flex items-center gap-2 font-bold text-sm px-5 py-2 rounded-lg shadow transition-all"
            style={{ backgroundColor: '#C9A84C', color: 'white' }}
          >
            <span>✨</span>
            <span>{isAr ? 'احجز الآن' : 'Book Now'}</span>
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gold/30 px-6 py-5 flex flex-col gap-4">
          <button onClick={() => handleNavigation('hero')} className={`text-navy/80 hover:text-gold font-medium ${isAr ? 'text-right' : 'text-left'}`}>
            {NAV_LINKS.find(l => l.hash === 'hero')?.[lang] || (isAr ? 'الرئيسية' : 'Home')}
          </button>
          <button onClick={() => handleNavigation('about')} className={`text-navy/80 hover:text-gold font-medium ${isAr ? 'text-right' : 'text-left'}`}>
            {NAV_LINKS.find(l => l.hash === 'about')?.[lang] || (isAr ? 'عن العيادة' : 'About')}
          </button>
          <button onClick={() => handleNavigation('services')} className={`text-navy/80 hover:text-gold font-medium ${isAr ? 'text-right' : 'text-left'}`}>
            {NAV_LINKS.find(l => l.hash === 'services')?.[lang] || (isAr ? 'الخدمات' : 'Services')}
          </button>
          <button onClick={() => handleNavigation('gallery')} className={`text-navy/80 hover:text-gold font-medium ${isAr ? 'text-right' : 'text-left'}`}>
            {NAV_LINKS.find(l => l.hash === 'gallery')?.[lang] || (isAr ? 'المعرض' : 'Gallery')}
          </button>
          <button onClick={() => handleNavigation('booking')} className={`text-navy/80 hover:text-gold font-medium ${isAr ? 'text-right' : 'text-left'}`}>
            {NAV_LINKS.find(l => l.hash === 'booking')?.[lang] || (isAr ? 'الحجز' : 'Booking')}
          </button>
          <button 
            onClick={() => handleNavigation('booking')}
            className="font-bold text-sm px-5 py-2.5 rounded-lg text-center"
            style={{ backgroundColor: '#C9A84C', color: 'white' }}
          >
            ✨ {isAr ? 'احجز الآن' : 'Book Now'}
          </button>
        </div>
      )}
    </header>
  )
}