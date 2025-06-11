'use client'

import { YEARS_EXPERIENCE, IMAGES } from '../config/constants'

const HeroSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Dress the Groom & His Party in Style –{' '}
              <span className="gradient-text">Without the Stress</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Award-winning wedding suit hire for Berkshire, Surrey, and Hampshire. 
              <strong className="text-gray-900"> Fittings. Styling. Sorted.</strong>
            </p>
            
            <button 
              onClick={scrollToBooking}
              className="btn-primary text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 mb-8 animate-bounce-gentle shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Your Appointment Today
            </button>
            
            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  ★★★★★
                </div>
                <span>Google Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <span>{YEARS_EXPERIENCE} Years Experience</span>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <span>Family-Owned & Venue Recommended</span>
            </div>
            
            {/* Award logos section */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-70">
              <div className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  Award Logo
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  Award Logo
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  Award Logo
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  Award Logo
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative animate-slide-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.hero.main}
                alt="Elegant groom and groomsmen in morning suits"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = IMAGES.hero.fallback
                }}
              />
            </div>
            
            {/* Floating testimonial card - hidden on mobile */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex text-yellow-400 text-sm mb-1">★★★★★</div>
              <p className="text-sm text-gray-700 font-medium">
                "The suits looked perfect on the day – couldn't have been easier!"
              </p>
              <p className="text-xs text-gray-500 mt-1">– James M., Surrey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 