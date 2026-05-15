// src/components/Services.jsx
import { useLang } from '../context/LangContext'
import { SERVICES, UI } from '../data/content'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Services() {
  const { lang, isAr } = useLang()

  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            {isAr ? 'ما نقدمه لكِ' : 'What We Offer'}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy relative inline-block">
            {UI.servicesTitle[lang]}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full"></span>
          </h2>
          <p className="text-navy/60 mt-8 max-w-xl mx-auto text-base">
            {isAr
              ? 'اضغطي على أي قسم لمعرفة الأسعار والتعليمات'
              : 'Tap any section to view prices & instructions'}
          </p>
        </motion.div>

        {/* الشبكة */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <Link
                to={`/service/${service.id}`}
                className="group relative flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md border border-transparent
                  hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-pointer h-full overflow-hidden"
              >
                {/* خط علوي ذهبي */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* الأيقونة */}
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-3xl mb-4
                  group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-400 shadow-sm">
                  {service.icon}
                </div>

                {/* الاسم */}
                <h3 className="font-bold text-navy text-base leading-tight mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.name[lang]}
                </h3>

                {/* الوصف */}
                <p className="text-navy/55 text-xs leading-relaxed flex-grow">
                  {service.desc[lang]}
                </p>

                {/* رابط */}
                <span className="mt-4 inline-flex items-center gap-1 text-gold text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {isAr ? 'عرض التفاصيل' : 'View Details'} <span>←</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}