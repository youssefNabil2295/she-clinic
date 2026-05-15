// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { NAV_LINKS } from '../data/content'
import { motion, AnimatePresence } from 'framer-motion'

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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gold/30' : 'bg-white border-b-2 border-gold/10'}`}
    >
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>

        <button onClick={goToHome} className="font-display font-bold text-navy text-xl hover:text-gold transition-colors">
          She Clinic
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleNavigation(link.hash)}
              className="text-navy/70 hover:text-gold text-sm font-medium transition-colors pb-0.5 hover:border-b-2 hover:border-gold"
            >
              {link[lang]}
            </button>
          ))}
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

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block h-[3px] w-7 bg-black transition-all duration-300 ease-in-out rounded-full ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-[3px] w-7 bg-black transition-all duration-300 ease-in-out rounded-full ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[3px] w-7 bg-black transition-all duration-300 ease-in-out rounded-full ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-[0_20px_60px_rgb(0,0,0,0.1)] border border-gray-100 p-4 flex flex-col gap-2 z-50 overflow-hidden"
          >
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleNavigation(link.hash)}
              className={`flex items-center gap-3 text-navy font-bold text-base py-3 px-4 rounded-xl hover:bg-clinic-soft transition-colors ${isAr ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
              {link[lang]}
            </button>
          ))}
          <div className="h-px bg-gray-100 my-1 w-full"></div>
          <button 
            onClick={() => handleNavigation('booking')}
            className="font-bold text-sm px-5 py-3 rounded-xl text-center w-full mt-1"
            style={{ backgroundColor: '#C9A84C', color: 'white' }}
          >
            ✨ {isAr ? 'احجز الآن' : 'Book Now'}
          </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}