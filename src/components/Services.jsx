// src/components/Services.jsx
import { useLang } from '../context/LangContext'
import { SERVICES, UI } from '../data/content'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Services() {
  const { lang, isAr } = useLang()
  
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy relative inline-block">
            {UI.servicesTitle[lang]}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/service/${service.id}`}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gold/10
                hover:shadow-2xl hover:border-gold/40 hover:-translate-y-2 transition-all duration-500
                cursor-pointer block h-full flex flex-col items-center group overflow-hidden"
            >
              {/* شريط علوي رفيع للزينة */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold/50 via-gold to-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-20 h-20 rounded-full border-2 border-gold/20 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="font-bold text-navy text-xl mb-3 group-hover:text-gold transition-colors duration-300">{service.name[lang]}</h3>
              <p className="text-navy/70 text-sm leading-relaxed mb-6 flex-grow font-medium">{service.desc[lang]}</p>
              
              <div className="w-full h-[1px] bg-gold/10 mb-4 group-hover:bg-gold/30 transition-colors duration-300"></div>
              
              <span className="inline-flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-3 transition-all duration-300">
                {isAr ? 'اعرف المزيد' : 'Learn more'} <span className="text-lg">→</span>
              </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}