// src/components/LocationMap.jsx
import { useLang } from '../context/LangContext'
import { DOCTOR } from '../data/content'

export default function LocationMap() {
  const { isAr } = useLang()

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* العنوان */}
        <div className="text-center mb-10 flex flex-col items-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">
            {isAr ? 'موقعنا' : 'Our Location'}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy relative inline-block">
            {isAr ? 'كيف تصل إلينا؟' : 'How to Find Us?'}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold rounded-full"></span>
          </h2>
          <p className="text-navy/60 mt-6 max-w-xl mx-auto">
            {DOCTOR.address[isAr ? 'ar' : 'en']}
          </p>
          
          <a 
            href="https://maps.google.com/?q=T2+business+complex,+Nasr+City,+Cairo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-navy hover:bg-gold text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {isAr ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
          </a>
        </div>

        {/* الخريطة */}
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-gold/20 relative group">
          {/* طبقة شفافة قابلة للنقر فوق الخريطة */}
          <a 
            href="https://maps.google.com/?q=T2+business+complex,+Nasr+City,+Cairo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-navy/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
            aria-label="Open in Google Maps"
          >
            <div className="bg-white text-navy font-bold py-3 px-6 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {isAr ? 'الذهاب إلى خرائط جوجل' : 'Go to Google Maps'}
            </div>
          </a>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6491741548236!2d31.328328114620015!3d30.046903381881643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e58b8f2c209%3A0x9db2057d19c3b839!2sT2%20business%20complex!5e0!3m2!1sen!2seg!4v1716124500000!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="She Clinic Location Map"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </section>
  )
}
