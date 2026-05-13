// src/components/About.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR, IMAGES, UI } from '../data/content'
import { motion } from 'framer-motion'

export default function About() {
  const { lang, isAr } = useLang()
  return (
    <>
      <div className="gold-divider" />
      <section id="about" className="bg-transparent py-20 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={isAr ? 'order-2 text-right' : 'order-1'}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6 leading-tight">
              {UI.aboutTitle[lang]}
            </h2>
            <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
            <p className="text-navy/70 leading-relaxed text-base md:text-lg mb-8 font-light">
              {DOCTOR.about[lang]}
            </p>
            {/* إضافة قائمة بالأقسام */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-navy/70 text-sm">
                <span className="text-gold text-xl">✦</span>
                <span>{lang === 'ar' ? '🔬 وحدة الليزر المتطورة' : '🔬 Advanced Laser Unit'}</span>
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm">
                <span className="text-gold text-xl">✦</span>
                <span>{lang === 'ar' ? '💆‍♀️ عيادة البشرة والجلدية' : '💆‍♀️ Skin & Dermatology Clinic'}</span>
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm">
                <span className="text-gold text-xl">✦</span>
                <span>{lang === 'ar' ? '✨ جراحات التجميل الدقيقة' : '✨ Aesthetic & Plastic Surgery'}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${isAr ? 'order-1' : 'order-2'}`}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl bg-white">
              <img 
                src={IMAGES.doctorAbout} 
                alt={DOCTOR.name[lang]}
                className="w-full max-w-2xl h-auto object-cover hover:scale-105 transition-transform duration-700"
                onError={e => { 
                  e.target.style.display='none'; 
                  e.target.nextSibling.style.display='flex' 
                }}
              />
              <div className="w-full h-72 md:h-80 items-center justify-center text-8xl"
                style={{ display:'none', background:'linear-gradient(135deg,#FFFDFB,#FFF5E6)' }}>
                ✨💆‍♀️
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="gold-divider" />
    </>
  )
}