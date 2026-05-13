// src/components/VideoGallery.jsx
import { useLang } from '../context/LangContext'
import { VIDEOS } from '../data/content'
import { motion } from 'framer-motion'

export default function VideoGallery() {
  const { isAr } = useLang()

  if (!VIDEOS || VIDEOS.length === 0) return null;

  return (
    <section id="videos" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block">
            {isAr ? 'فيديوهات العيادة' : 'Our Videos'}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-black group relative cursor-pointer"
            >
              <video 
                src={video} 
                controls 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
