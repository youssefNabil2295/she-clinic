// src/pages/Home.jsx
import Hero        from '../components/Hero'
import About       from '../components/About'
import Services    from '../components/Services'
import Gallery     from '../components/Gallery'  
import BookingForm from '../components/BookingForm'
import { useLang } from '../context/LangContext'
import { UI }      from '../data/content'

export default function Home() {
  const { lang } = useLang()
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />      
      <div className="gold-divider" />
      <section id="booking" className="bg-offwhite py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="section-title-line mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy whitespace-nowrap">
              {UI.bookingTitle[lang]}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gold/20">
            <BookingForm />
          </div>
        </div>
      </section>
      <div className="gold-divider" />
    </>
  )
}