// src/components/TopBanner.jsx
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useNavigate } from 'react-router-dom'  // ✅ أضف هذا

// استيراد الصور من مجلد src/img/2/
import offer1 from '../img/2/offer1.jpeg'
import offer2 from '../img/2/offer 2.jpeg'
import offer3 from '../img/2/offer 3.jpeg'
import offer4 from '../img/2/WhatsApp Image 2026-05-09 at 4.07.13 PM.jpeg'

const BANNERS = [
  {
    id: 1,
    image: offer1,
  },
  {
    id: 2,
    image: offer2,
  },
  {
    id: 3,
    image: offer3,
  },
  {
    id: 4,
    image: offer4,
  },
]

export default function TopBanner() {
  const { isAr } = useLang()
  const navigate = useNavigate()  // ✅ أضف هذا

  const [currentPair, setCurrentPair] = useState(0)

  // تجميع الصور في أزواج (كل زوج = صورتين)
  const pairs = []
  for (let i = 0; i < BANNERS.length; i += 2) {
    pairs.push(BANNERS.slice(i, i + 2))
  }

  // التبديل التلقائي كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % pairs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [pairs.length])

  const nextSlide = () => setCurrentPair((prev) => (prev + 1) % pairs.length)
  const prevSlide = () => setCurrentPair((prev) => (prev - 1 + pairs.length) % pairs.length)

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

  const currentImages = pairs[currentPair] || []

  return (
    <div className="relative w-full overflow-hidden z-40 px-2 pt-2" style={{ marginTop: '64px' }}>
      <div className="relative rounded-xl overflow-hidden">
        
        {/* صورتين جنب بعض */}
        <div className="flex gap-2">
          {currentImages.map((banner, idx) => (
            <img
              key={banner.id}
              src={banner.image}
              alt="Special offer"
              className="w-1/2 h-[600px]  cursor-pointer rounded-lg hover:opacity-90 transition"
              onClick={goToBooking}  // ✅ عند الضغط يودي لقسم الحجز
            />
          ))}
          {/* لو الرقم فردي وخلصت الصور، نحط مكان فاضي */}
          {currentImages.length === 1 && (
            <div className="w-1/2 h-[500px] bg-clinic-soft rounded-lg flex items-center justify-center text-clinic-gray">
              {isAr ? 'عرض قادم' : 'Coming Soon'}
            </div>
          )}
        </div>

        {/* الأسهم */}
        {pairs.length > 1 && (
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
        {pairs.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {pairs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPair(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPair ? 'bg-clinic-gold w-6' : 'bg-white/60 w-2'
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