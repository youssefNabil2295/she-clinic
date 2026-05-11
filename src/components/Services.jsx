// src/components/Services.jsx
import { useLang } from '../context/LangContext'
import { SERVICES, UI } from '../data/content'
import { Link } from 'react-router-dom'

export default function Services() {
  const { lang, isAr } = useLang()
  
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block">
            {UI.servicesTitle[lang]}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(service => (
            <Link 
              key={service.id}
              to={`/service/${service.id}`}
              className="bg-white border-2 border-gold/30 rounded-2xl p-6 text-center 
                hover:border-gold hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                cursor-pointer block"
            >
              <span className="text-5xl block mb-4">{service.icon}</span>
              <h3 className="font-bold text-navy text-lg mb-2">{service.name[lang]}</h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-3">{service.desc[lang]}</p>
              <span className="inline-block text-gold text-sm font-semibold">
                {isAr ? 'اعرف المزيد →' : 'Learn more →'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}