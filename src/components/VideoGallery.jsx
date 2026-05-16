// src/components/VideoGallery.jsx
import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { VIDEOS } from '../data/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoGallery() {
  const { isAr } = useLang()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const itemsPerPage = 4;
  if (!VIDEOS || VIDEOS.length === 0) return null;

  const totalPages = Math.ceil(VIDEOS.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentVideos = VIDEOS.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section id="videos" className="py-16 md:py-24 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white relative inline-block"
          >
            {isAr ? 'قصص النجاح وفيديوهاتنا' : 'Success Stories & Videos'}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gold rounded-full"></span>
          </motion.h2>
          <p className="mt-8 text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            {isAr 
              ? 'شاهدي نتائجنا الواقعية واسمعي تجارب عملائنا من داخل العيادة.'
              : 'Watch our real results and hear from our clients directly from the clinic.'}
          </p>
        </div>

        {/* شبكة الفيديوهات (Style: Reels) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="wait">
            {currentVideos.map((video, idx) => (
              <motion.div 
                key={video} // Use video path as key for proper animation on page change
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black/20 group cursor-pointer border border-white/5"
              >
                <video 
                  src={video} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  preload="metadata"
                  muted
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center text-navy shadow-lg scale-75 group-hover:scale-100 transition-transform">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-[10px] text-white/90 font-medium text-center">
                    {isAr ? 'نتائج حقيقية ✨' : 'Real Results ✨'}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* أرقام الصفحات */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1)
                  document.getElementById('videos').scrollIntoView({ behavior: 'smooth' })
                }}
                className={`w-10 h-10 rounded-full font-bold transition-all duration-300 border ${
                  currentPage === i + 1 
                    ? 'bg-gold text-navy border-gold' 
                    : 'bg-transparent text-white border-white/20 hover:border-gold hover:text-gold'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-lg p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-4xl">&times;</button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-[450px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain shadow-inner"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
