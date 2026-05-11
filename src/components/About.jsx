// src/components/About.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR, IMAGES, UI } from '../data/content'

export default function About() {
  const { lang, isAr } = useLang()
  return (
    <>
      <div className="gold-divider" />
      <section id="about" className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className={isAr ? 'order-2 text-right' : 'order-1'}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{UI.aboutTitle[lang]}</h2>
            <p className="text-navy/60 leading-relaxed text-sm md:text-base">{DOCTOR.about[lang]}</p>
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
          </div>
          <div className={isAr ? 'order-1' : 'order-2'}>
            <img 
              src={IMAGES.doctorAbout} 
              alt={DOCTOR.name[lang]}
              className="w-full max-w-2xl h-auto object-contain rounded-xl shadow-xl mx-auto"
              onError={e => { 
                e.target.style.display='none'; 
                e.target.nextSibling.style.display='flex' 
              }}
            />
            <div className="w-full h-72 md:h-80 rounded-xl shadow-xl items-center justify-center text-8xl"
              style={{ display:'none', background:'linear-gradient(135deg,#C8DFF0,#DDEAF5)' }}>
              ✨💆‍♀️
            </div>
          </div>
        </div>
      </section>
      <div className="gold-divider" />
    </>
  )
}