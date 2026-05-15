// src/components/Reviews.jsx
// ============================================================
//  ⭐ قسم آراء العملاء — عدّل البيانات في REVIEWS_DATA أدناه
// ============================================================
import { useLang } from '../context/LangContext'
import { motion } from 'framer-motion'

// ✏️ أضف أو عدّل التعليقات هنا
const REVIEWS_DATA = [
  {
    id: 1,
    name: { ar: 'سارة محمد', en: 'Sara Mohamed' },
    rating: 5,
    date: { ar: 'مارس 2025', en: 'March 2025' },
    text: {
      ar: 'تجربة رائعة جداً! الدكتورة محترفة والنتائج فاقت توقعاتي. جلسات الليزر كانت مريحة جداً والنتيجة ممتازة.',
      en: 'Amazing experience! The doctor is very professional and the results exceeded my expectations. Laser sessions were very comfortable.'
    },
    service: { ar: 'ليزر إزالة الشعر', en: 'Laser Hair Removal' }
  },
  {
    id: 2,
    name: { ar: 'نور أحمد', en: 'Nour Ahmed' },
    rating: 5,
    date: { ar: 'أبريل 2025', en: 'April 2025' },
    text: {
      ar: 'أفضل عيادة جربتها. الفريق محترم جداً والنظافة عالية جداً. الفيلر طلع طبيعي جداً وأنا راضية كتير.',
      en: 'Best clinic I\'ve tried. The team is very respectful and cleanliness standards are very high. The filler looks very natural.'
    },
    service: { ar: 'الفيلر', en: 'Filler' }
  },
  {
    id: 3,
    name: { ar: 'هنا عبدالله', en: 'Hana Abdullah' },
    rating: 5,
    date: { ar: 'فبراير 2025', en: 'February 2025' },
    text: {
      ar: 'تنظيف البشرة والأوكسيجينيو غير حياتي! بشرتي بقت ناعمة ومشرقة من أول جلسة. هتفضل ترجعي هناك.',
      en: 'Skin cleaning and Oxygeneo changed my life! My skin became smooth and glowing from the first session. Will definitely keep going back.'
    },
    service: { ar: 'تنظيف البشرة', en: 'Skin Cleaning' }
  },
  {
    id: 4,
    name: { ar: 'ياسمين خالد', en: 'Yasmine Khaled' },
    rating: 5,
    date: { ar: 'مايو 2025', en: 'May 2025' },
    text: {
      ar: 'البوتوكس كان طبيعي جداً ما حدش حس بيه. الدكتورة متخصصة وشرحت كل حاجة بالتفصيل قبل ما تبدأ.',
      en: 'The Botox looked very natural, nobody noticed. The doctor is specialized and explained everything in detail before starting.'
    },
    service: { ar: 'البوتوكس', en: 'Botox' }
  },
  {
    id: 5,
    name: { ar: 'رنا إبراهيم', en: 'Rana Ibrahim' },
    rating: 5,
    date: { ar: 'يناير 2025', en: 'January 2025' },
    text: {
      ar: 'الديرمابن أزال آثار حب الشباب عندي بشكل ملحوظ جداً. كنت مش متوقعة النتيجة دي بعد 3 جلسات بس.',
      en: 'Dermapen significantly reduced my acne scars. I wasn\'t expecting such great results in only 3 sessions.'
    },
    service: { ar: 'الديرمابن', en: 'Dermapen' }
  },
  {
    id: 6,
    name: { ar: 'دينا سامي', en: 'Dina Sami' },
    rating: 5,
    date: { ar: 'مارس 2025', en: 'March 2025' },
    text: {
      ar: 'الفراكشنال ليزر عمل معايا عجب! البشرة اتجددت خالص والملمس تحسن كتير. أنصح كل بنت تجربها.',
      en: 'Fractional laser worked wonders for me! My skin is completely renewed and the texture improved a lot. I recommend it to every girl.'
    },
    service: { ar: 'الفراكشنال ليزر', en: 'Fractional Laser' }
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`text-sm ${i <= rating ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { lang, isAr } = useLang()

  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {isAr ? 'آراء عملاءنا' : 'Client Reviews'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy relative inline-block">
            {isAr ? 'ماذا يقولون عنّا' : 'What They Say About Us'}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full" />
          </h2>

          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-md rounded-2xl px-5 py-3">
              <span className="text-2xl">⭐</span>
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className="text-2xl font-bold text-navy leading-none">4.9</div>
                <div className="text-xs text-navy/50">{isAr ? 'تقييم Google' : 'Google Rating'}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-md rounded-2xl px-5 py-3">
              <span className="text-2xl">💬</span>
              <div className={isAr ? 'text-right' : 'text-left'}>
                <div className="text-2xl font-bold text-navy leading-none">+500</div>
                <div className="text-xs text-navy/50">{isAr ? 'تقييم حقيقي' : 'Real Reviews'}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex flex-col gap-4 ${isAr ? 'text-right' : 'text-left'}`}
            >
              {/* الهيدر */}
              <div className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                {/* أفاتار */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-navy/20 flex items-center justify-center text-lg font-bold text-navy flex-shrink-0">
                  {review.name[lang].charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy text-sm truncate">{review.name[lang]}</p>
                  <p className="text-xs text-navy/40">{review.date[lang]}</p>
                </div>
                {/* نجوم */}
                <StarRating rating={review.rating} />
              </div>

              {/* النص */}
              <p className="text-navy/70 text-sm leading-relaxed flex-grow">
                "{review.text[lang]}"
              </p>

              {/* الخدمة */}
              <div className={`flex ${isAr ? 'justify-end' : 'justify-start'}`}>
                <span className="inline-flex items-center gap-1 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                  ✦ {review.service[lang]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر موقع العيادة */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://maps.app.goo.gl/jx4rT8Xfyf3CEw7B9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-navy font-semibold px-6 py-3 rounded-xl shadow-sm hover:border-gold hover:text-gold hover:shadow-md transition-all duration-300 text-sm"
          >
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isAr ? 'موقع العيادة على الخريطة' : 'Clinic Location on Maps'}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
