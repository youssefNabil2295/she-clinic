// src/pages/Home.jsx
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      
      {/* ✅ أضف هذا القسم عشان يشتغل التمرير من العروض */}
      <section id="booking" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <BookingForm />
        </div>
      </section>
    </>
  )
}