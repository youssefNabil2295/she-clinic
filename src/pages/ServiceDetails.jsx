// src/pages/ServiceDetails.jsx
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { SERVICES, DOCTOR } from '../data/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function ServiceDetails() {
  const { id } = useParams()
  const { lang, isAr } = useLang()
  const navigate = useNavigate()

  const service = SERVICES.find(s => s.id === id)
  
  // State للسلايدر
  const [activeImg, setActiveImg] = useState(0)

  // ✅ SEO — تحديث عنوان الصفحة والـ meta description لكل خدمة
  useEffect(() => {
    if (service) {
      // عنوان الصفحة
      document.title = service.seoTitle[lang]

      // meta description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.content = service.seoDesc[lang]

      // canonical
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = `${window.location.origin}/service/${service.id}`
    }

    return () => {
      document.title = 'She Clinic | أفضل عيادة ليزر وتجميل في مصر'
    }
  }, [service, lang])

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-navy text-xl">{isAr ? 'الخدمة غير موجودة' : 'Service not found'}</p>
        <Link to="/" className="text-gold underline">{isAr ? 'العودة للرئيسية' : 'Back to Home'}</Link>
      </div>
    )
  }

  const instructions = service.instructions?.[lang] || []

  // تحديد الصورة الحالية (سواء كانت مصفوفة أو صورة واحدة)
  const currentImage = Array.isArray(service.priceImages) 
    ? service.priceImages[activeImg] 
    : service.priceImage;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy via-navy/95 to-navy/80 text-white pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6" aria-label="breadcrumb">
            <Link to="/" className="hover:text-gold transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-gold transition-colors">
              {isAr ? 'الخدمات' : 'Services'}
            </Link>
            <span>/</span>
            <span className="text-gold">{service.name[lang]}</span>
          </nav>

          {/* Icon + H1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                {service.icon}
              </div>
              <div>
                {/* ✅ H1 واضح لـ SEO */}
                <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {service.h1[lang]}
                </h1>
              </div>
            </div>
            <p className="text-white/70 text-base max-w-2xl mt-3">
              {service.desc[lang]}
            </p>
          </motion.div>

        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ===== صورة الأسعار (Slider Support) ===== */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gold/10 px-5 py-3 border-b border-gold/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <h2 className="font-bold text-navy text-base">
                    {isAr ? 'قائمة الأسعار' : 'Price List'}
                  </h2>
                </div>
                {/* عداد الصور إذا كان سلايدر */}
                {Array.isArray(service.priceImages) && (
                  <span className="text-[10px] font-bold bg-navy text-white px-2 py-0.5 rounded-full">
                    {activeImg + 1} / {service.priceImages.length}
                  </span>
                )}
              </div>
              
              <div className="p-3 relative group">
                <div className="relative overflow-hidden rounded-xl bg-gray-50 min-h-[300px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      alt={isAr ? `أسعار ${service.name.ar}` : `${service.name.en} prices`}
                      className="w-full h-auto object-contain max-h-[600px] rounded-lg shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    {/* Placeholder لما الصورة مش موجودة */}
                    <div
                      className="hidden absolute inset-0 flex-col items-center justify-center gap-3 text-navy/40 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg"
                    >
                      <span className="text-5xl">📋</span>
                      <p className="text-sm font-medium">{isAr ? 'صورة الأسعار قريباً' : 'Price image coming soon'}</p>
                    </div>
                  </AnimatePresence>

                  {/* أزرار التنقل (فقط إذا كان هناك مصفوفة صور) */}
                  {Array.isArray(service.priceImages) && service.priceImages.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImg(p => (p === 0 ? service.priceImages.length - 1 : p - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 shadow-md rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        {isAr ? '→' : '←'}
                      </button>
                      <button 
                        onClick={() => setActiveImg(p => (p === service.priceImages.length - 1 ? 0 : p + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 shadow-md rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        {isAr ? '←' : '→'}
                      </button>
                    </>
                  )}
                </div>

                {/* مؤشرات النقط (Dots) */}
                {Array.isArray(service.priceImages) && service.priceImages.length > 1 && (
                  <div className="flex justify-center gap-1.5 mt-3">
                    {service.priceImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${activeImg === i ? 'w-4 bg-gold' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ===== التعليمات كنص (ما قبل وما بعد) ===== */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* تعليمات ما قبل الجلسة (Instructions) */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-navy/5 px-5 py-3 border-b border-navy/10 flex items-center gap-2">
                <span className="text-xl">📋</span>
                <h2 className="font-bold text-navy text-base">
                  {isAr ? 'تعليمات ما قبل الجلسة' : 'Pre-Session Instructions'}
                </h2>
              </div>
              <div className="p-5">
                {instructions.length > 0 ? (
                  <ul className="space-y-3">
                    {instructions.map((tip, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-navy/80 text-sm leading-relaxed">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-navy/40 text-sm italic">{isAr ? 'لا توجد تعليمات خاصة قبل الجلسة.' : 'No specific pre-session instructions.'}</p>
                )}
              </div>
            </div>

            {/* تعليمات ما بعد الجلسة (Aftercare) */}
            {service.aftercare && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-gold">
                <div className="bg-gold/5 px-5 py-3 border-b border-gold/10 flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <h2 className="font-bold text-navy text-base">
                    {isAr ? 'تعليمات ما بعد الجلسة' : 'Post-Session Aftercare'}
                  </h2>
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    {(service.aftercare[lang] || []).map((tip, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.08 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100"
                      >
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-navy/90 text-sm leading-relaxed font-medium">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ملاحظة تحذيرية */}
            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 shadow-sm">
              <span className="text-red-500 text-xl flex-shrink-0 animate-pulse">⚠️</span>
              <p className="text-red-800 text-xs leading-relaxed font-medium">
                {isAr
                  ? 'في حالة حدوث أي احمرار شديد، حكة قوية، تورم غير طبيعي، أو تغير مفاجئ في لون الجلد، يرجى التواصل فوراً مع العيادة.'
                  : 'In case of severe redness, intense itching, abnormal swelling, or sudden skin color change, please contact the clinic immediately.'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== زر الحجز ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-navy to-navy/80 rounded-2xl p-8 text-center text-white shadow-xl"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {isAr ? `احجزي جلسة ${service.name.ar} الآن` : `Book Your ${service.name.en} Session Now`}
          </h2>
          <p className="text-white/60 text-sm mb-6">
            {isAr
              ? 'تواصلي معنا عبر واتساب لحجز موعدك أو الاستفسار عن التفاصيل'
              : 'Contact us via WhatsApp to book your appointment or inquire about details'}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${DOCTOR.phone}?text=${encodeURIComponent(isAr ? `مرحباً، أريد حجز جلسة ${service.name.ar}` : `Hello, I'd like to book a ${service.name.en} session`)}`}
              target="_blank"
              rel="noopener noreferrer"
              id={`book-whatsapp-${service.id}`}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.704a.75.75 0 0 0 .986.871l5.624-2.021A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.696-.525-5.228-1.437l-.374-.222-3.88 1.394 1.12-3.763-.241-.389A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {isAr ? 'احجزي على واتساب' : 'Book on WhatsApp'}
            </a>

            <Link
              to="/#booking"
              id={`book-form-${service.id}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300 text-base"
            >
              📅 {isAr ? 'نموذج الحجز' : 'Booking Form'}
            </Link>
          </div>
        </motion.div>

        {/* زر الرجوع */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-navy/50 hover:text-gold transition-colors text-sm inline-flex items-center gap-1"
          >
            ← {isAr ? 'العودة' : 'Go Back'}
          </button>
        </div>

      </div>
    </div>
  )
}