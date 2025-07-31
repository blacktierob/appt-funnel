'use client'

import { useState, useRef, useEffect } from 'react'
import { GALLERY } from '../config/content'

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const galleryImages = GALLERY.images

  const nextSlide = () => {
    if (isScrolling) return
    setIsScrolling(true)
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
    setTimeout(() => setIsScrolling(false), 500)
  }

  const prevSlide = () => {
    if (isScrolling) return
    setIsScrolling(true)
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
    setTimeout(() => setIsScrolling(false), 500)
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      const cardWidth = container.clientWidth * 0.8
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See Our Grooms in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real weddings, real grooms, perfectly dressed. Here's just a taste of our work across 
            Berkshire, Surrey, and Hampshire.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Feathered edges - hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
            disabled={isScrolling}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
            disabled={isScrolling}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 snap-center"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = image.fallback
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
                

              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 2) === index ? 'bg-slate-800' : 'bg-gray-300'
                }`}
                onClick={() => {
                  const container = scrollContainerRef.current
                  if (container) {
                    const scrollAmount = container.clientWidth * 0.8 * index * 2
                    container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
                  }
                }}
              />
            ))}
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default GallerySection 