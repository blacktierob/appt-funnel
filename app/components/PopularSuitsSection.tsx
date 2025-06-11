'use client'

import { useState, useRef, useEffect } from 'react'
import { IMAGES } from '../config/constants'

const PopularSuitsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const popularSuits = IMAGES.suits

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
      const cardWidth = 320 // approximate card width
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
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See Our Customers' Favourites
          </h2>
                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Our most popular suit styles, loved by grooms across Berkshire, Surrey & Hampshire. 
             Explore our range of classic and contemporary designs.
           </p>
        </div>
        
                 {/* Carousel Container */}
         <div className="relative">
           {/* Feathered edges */}
           <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
           
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
            {popularSuits.map((suit, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden snap-center group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={suit.src}
                    alt={suit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = suit.fallback
                    }}
                  />
                </div>
                
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {suit.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {suit.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(popularSuits.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 2) === index ? 'bg-slate-800' : 'bg-gray-300'
                }`}
                onClick={() => {
                  const container = scrollContainerRef.current
                  if (container) {
                    const scrollAmount = 320 * index * 2
                    container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
                  }
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Full Collection CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const bookingSection = document.getElementById('booking')
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
          >
            See our Full Hirewear Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularSuitsSection 