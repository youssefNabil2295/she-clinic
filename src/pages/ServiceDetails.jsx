// src/pages/ServiceDetails.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { SERVICES, DOCTOR } from '../data/content'
import { useState } from 'react'

// معلومات إضافية لكل خدمة (توعية، صور، نصائح)
const SERVICE_DETAILS = {
  1: { // ليزر
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
    ],
    benefits: {
      en: ['Safe for all skin types', 'Permanent results', 'Painless sessions', 'Quick recovery'],
      ar: ['آمن لجميع أنواع البشرة', 'نتائج دائمة', 'جلسات بدون ألم', 'تعافي سريع'],
    },
    tips: {
      en: 'Avoid sun exposure 2 weeks before treatment. Shave the area 24 hours before session.',
      ar: 'تجنبي التعرض للشمس لمدة أسبوعين قبل الجلسة. احلقي المنطقة قبل ٢٤ ساعة من الجلسة.',
    }
  },
  2: { // بشرة
    images: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
    ],
    benefits: {
      en: ['Deep cleansing', 'Hydration boost', 'Remove blackheads', 'Glowing skin'],
      ar: ['تنظيف عميق', 'ترطيب مكثف', 'إزالة الرؤوس السوداء', 'بشرة مشرقة'],
    },
    tips: {
      en: 'Drink plenty of water after treatment. Avoid makeup for 24 hours.',
      ar: 'اشربي الكثير من الماء بعد الجلسة. تجنبي المكياج لمدة ٢٤ ساعة.',
    }
  },
  3: { // جراحات
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
    ],
    benefits: {
      en: ['Natural results', 'Experienced surgeons', 'Modern techniques', 'Full aftercare'],
      ar: ['نتائج طبيعية', 'أطباء جراحون ذو خبرة', 'تقنيات حديثة', 'رعاية كاملة بعد العملية'],
    },
    tips: {
      en: 'Follow post-op instructions carefully. Attend all follow-up appointments.',
      ar: 'اتبعي تعليمات ما بعد العملية بعناية. احضري جميع مواعيد المتابعة.',
    }
  },
  4: { // حقن
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
    ],
    benefits: {
      en: ['Instant results', 'Minimal downtime', 'Natural look', 'Long lasting'],
      ar: ['نتائج فورية', 'فترة تعافي بسيطة', 'شكل طبيعي', 'نتائج تدوم طويلاً'],
    },
    tips: {
      en: 'Avoid blood thinners 2 weeks before. Do not massage the area for 24 hours.',
      ar: 'تجنبي مميعات الدم لمدة أسبوعين قبل. لا تدلكي المنطقة لمدة ٢٤ ساعة.',
    }
  },
}

export default function ServiceDetails() {
  const { id } = useParams()
  const { lang, isAr } = useLang()
  const navigate = useNavigate()
  const [currentImage, setCurrentImage] = useState(0)

  const service = SERVICES.find(s => s.id === parseInt(id))
  const details = SERVICE_DETAILS[id]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-navy">{isAr ? 'الخدمة غير موجودة' : 'Service not found'}</p>
      </div>
    )
  }

  const images = details?.images || []
  const benefits = details?.benefits?.[lang] || []
  const tips = details?.tips?.[lang] || ''

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* زر العودة */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gold hover:text-gold-dark transition"
        >
          ← {isAr ? 'العودة إلى الرئيسية' : 'Back to Home'}
        </button>

        {/* العنوان */}
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          {service.icon} {service.name[lang]}
        </h1>
        <p className="text-navy/60 text-lg mb-8">{service.desc[lang]}</p>

        {/* كروت الصور مع أسهم التقليب */}
        {images.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative">
              <img 
                src={images[currentImage]} 
                alt={service.name[lang]}
                className="w-full h-96 object-cover"
              />
              
              {/* أسهم التقليب */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl transition"
                  >
                    ›
                  </button>
                  
                  {/* نقاط المؤشر */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition ${
                          idx === currentImage ? 'bg-gold w-4' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* الفوائد */}
        {benefits.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-navy mb-4">
              ✨ {isAr ? 'فوائد الخدمة' : 'Benefits'}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-navy/70">
                  <span className="text-gold">✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* نصائح وتوعية */}
        {tips && (
          <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <h3 className="font-bold text-navy mb-2">
              💡 {isAr ? 'نصائح مهمة' : 'Important Tips'}
            </h3>
            <p className="text-navy/70">{tips}</p>
          </div>
        )}

        {/* زر الحجز */}
        <div className="flex gap-4 mt-8">
          <a 
            href={`https://wa.me/${DOCTOR.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold text-navy font-bold text-center py-3 rounded-lg hover:bg-gold-dark transition"
          >
            📅 {isAr ? 'احجز استشارة الآن' : 'Book Consultation Now'}
          </a>
          <button 
            onClick={() => navigate('/')}
            className="px-6 border border-gold text-gold rounded-lg hover:bg-gold hover:text-navy transition"
          >
            {isAr ? 'رجوع' : 'Back'}
          </button>
        </div>
      </div>
    </div>
  )
}