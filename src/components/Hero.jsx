// src/components/Hero.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR, IMAGES, UI } from '../data/content'
import { motion } from 'framer-motion'

export default function Hero() {
  const { lang, isAr } = useLang()

  function scrollTo(hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { num: '+5000', label: { ar: 'عميلة سعيدة', en: 'Happy Clients' } },
    { num: '4.9★', label: { ar: 'تقييم Google', en: 'Google Rating' } },
    { num: '+11', label: { ar: 'خدمة متخصصة', en: 'Specialized Services' } },
    { num: 'FDA', label: { ar: 'شهادات معتمدة', en: 'FDA Approved' } },
  ]

  return (
    <section id="hero" className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${isAr ? 'md:flex-row-reverse' : ''}`}>

          {/* ====== الصورة ====== */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            {/* الإطار الذهبي الزخرفي */}
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-3xl blur-xl" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />

            {/* الصورة */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gold/20">
              <img
                src={IMAGES.doctorAbout}
                alt={isAr ? 'عيادة She Clinic من الداخل' : 'She Clinic Interior'}
                className="w-full h-64 sm:h-80 md:h-[440px] object-cover object-center"
              />
              {/* gradient خفيف فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />

              {/* Badge فوق الصورة */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span className="text-navy text-xs font-bold">
                  {isAr ? 'أفضل عيادة في مصر' : 'Best Clinic in Egypt'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ====== النص والـ CTA ====== */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`w-full md:w-1/2 ${isAr ? 'text-right' : 'text-left'}`}
          >
            {/* الشارة */}
            <div className={`inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5 ${isAr ? 'flex-row-reverse' : ''}`}>
              <span className="text-gold text-sm">✦</span>
              <span className="text-gold font-semibold text-sm tracking-wide">
                {isAr ? 'عيادة ليزر وتجميل | مدينة نصر' : 'Laser & Beauty Clinic | Nasr City'}
              </span>
            </div>

            {/* العنوان */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
              {isAr ? (
                <>
                  <span className="text-gold">She Clinic</span>
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl">حيث الجمال يلتقي بالدقة</span>
                </>
              ) : (
                <>
                  <span className="text-gold">She Clinic</span>
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl">Where Beauty Meets Precision</span>
                </>
              )}
            </h1>

            <p className="text-navy/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              {DOCTOR.about[lang]}
            </p>

            {/* أزرار الـ CTA */}
            <div className={`flex flex-wrap gap-3 mb-10 ${isAr ? 'justify-end' : 'justify-start'}`}>
              <button
                onClick={() => scrollTo('booking')}
                className="flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                📅 {UI.bookNow[lang]}
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="flex items-center gap-2 border-2 border-navy/20 text-navy font-semibold px-6 py-3 rounded-xl hover:border-gold hover:text-gold transition-all duration-300 text-sm"
              >
                {isAr ? '🔬 خدماتنا' : '🔬 Our Services'}
              </button>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                >
                  <div className="text-xl font-bold text-gold">{stat.num}</div>
                  <div className="text-xs text-navy/60 mt-0.5">{stat.label[lang]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* فاصل ذهبي */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  )
}