// src/components/TopBanner.jsx
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const BANNERS = [
  { id: 1, image: '/images/2/banner-1.jpeg' },
  { id: 2, image: '/images/2/banner-2.jpeg' },
  { id: 3, image: '/images/2/banner-3.jpeg' },
  { id: 4, image: '/images/2/banner-4.jpeg' },
  { id: 5, image: '/images/2/banner-5.jpg' },
  { id: 6, image: '/images/2/banner-6.jpg' },
  { id: 7, image: '/images/2/banner-7.jpg' },
  { id: 8, image: '/images/2/banner-8.jpg' },
  { id: 9, image: '/images/2/banner-9.jpeg' },
  { id: 10, image: '/images/2/banner-10.jpg' },
]


export default function TopBanner() {
  const { isAr } = useLang()
  const navigate = useNavigate()

  const [itemsPerSlide, setItemsPerSlide] = useState(2)
  const [currentGroup, setCurrentGroup] = useState(0)

  // Check screen size
  useEffect(() => {
    const checkSize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  // تجميع الصور في مجموعات (صورة للموبايل، صورتين للكمبيوتر)
  const groups = []
  for (let i = 0; i < BANNERS.length; i += itemsPerSlide) {
    groups.push(BANNERS.slice(i, i + itemsPerSlide))
  }

  // التبديل التلقائي كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % groups.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [groups.length])

  const nextSlide = () => setCurrentGroup((prev) => (prev + 1) % groups.length)
  const prevSlide = () => setCurrentGroup((prev) => (prev - 1 + groups.length) % groups.length)

  // ✅ وظيفة للذهاب لقسم الحجز
  const goToBooking = () => {
    // لو مش في الصفحة الرئيسية، روحلها
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const bookingSection = document.getElementById('booking')
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    } else {
      const bookingSection = document.getElementById('booking')
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const currentImages = groups[currentGroup] || []

  return (
    <div className="relative w-full overflow-hidden z-40 px-2 pt-2" style={{ marginTop: '64px' }}>
      <div className="relative rounded-xl overflow-hidden bg-clinic-soft h-[400px] md:h-[600px]">

        {/* الصور مع أنيميشن */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex gap-2"
          >
            {currentImages.map((banner) => (
              <img
                key={banner.id}
                src={banner.image}
                alt="Special offer"
                className={`${itemsPerSlide === 1 ? 'w-full' : 'w-1/2'} h-full object-cover cursor-pointer rounded-lg hover:opacity-90 transition`}
                onClick={goToBooking}
              />
            ))}
            {/* لو الرقم فردي وخلصت الصور في الديسكتوب، نحط مكان فاضي */}
            {itemsPerSlide === 2 && currentImages.length === 1 && (
              <div className="w-1/2 h-full bg-clinic-soft rounded-lg flex items-center justify-center text-clinic-gray">
                {isAr ? 'عرض قادم' : 'Coming Soon'}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* الأسهم */}
        {groups.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition z-10"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition z-10"
            >
              ›
            </button>
          </>
        )}

        {/* النقاط */}
        {groups.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {groups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentGroup(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentGroup ? 'bg-gold w-6' : 'bg-white/60 w-2'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* الشريط المتحرك النصي تحت الصور */}
      <div className="bg-clinic-gold py-3 mt-3 overflow-hidden rounded-lg">
        <div className="whitespace-nowrap animate-marquee inline-block">
          <span className="text-navy font-bold text-sm md:text-base mx-8">
            🎉 {isAr ? 'خصم 25% عند الحجز من الموقع! احجزي الآن واستفيدي بالعرض' : '25% OFF when booking from website! Book now and save'} 🎉
          </span>
          <span className="text-navy font-bold text-sm md:text-base mx-8">
            🎉 {isAr ? 'خصم 25% عند الحجز من الموقع! احجزي الآن واستفيدي بالعرض' : '25% OFF when booking from website! Book now and save'} 🎉
          </span>
          <span className="text-navy font-bold text-sm md:text-base mx-8">
            🎉 {isAr ? 'خصم 25% عند الحجز من الموقع! احجزي الآن واستفيدي بالعرض' : '25% OFF when booking from website! Book now and save'} 🎉
          </span>
        </div>
      </div>
    </div>
  )
}