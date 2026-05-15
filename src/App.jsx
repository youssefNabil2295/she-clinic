import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import ServiceDetails from './pages/ServiceDetails'
import TopBanner from './components/TopBanner'


export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <TopBanner />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />

        </Routes>

      </main>

      <Footer />

      <WhatsAppFloat />

    </BrowserRouter>
  )
}
