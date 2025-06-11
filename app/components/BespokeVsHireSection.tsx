'use client'

const BespokeVsHireSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Something Special for the Groom?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We understand every groom is unique. While our hire collection is perfect for the wedding party, 
            we offer <strong className="text-white">made-to-measure and bespoke tailoring</strong> for grooms who want something truly special.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bespoke for Groom */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">For the Groom</h3>
              <p className="text-lg font-medium text-white">Made-to-Measure & Bespoke</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Personal consultation and design</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Perfect fit guaranteed with multiple fittings</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Premium fabrics and exclusive styles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Yours to keep forever</span>
              </li>
            </ul>
            
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Starting from</div>
              <div className="text-3xl font-bold text-amber-400 mb-1">£899</div>
              <div className="text-sm text-gray-400">Made-to-measure</div>
            </div>
          </div>

          {/* Hire for Party */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">For the Party</h3>
              <p className="text-lg font-medium text-white">Premium Hire Collection</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Extensive size range available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Professional fitting service</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Coordinated with groom's outfit</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Hassle-free return after the wedding</span>
              </li>
            </ul>
            
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Starting from</div>
              <div className="text-3xl font-bold text-blue-400 mb-1">£179</div>
              <div className="text-sm text-gray-400">3-piece hire</div>
            </div>
          </div>
        </div>

        {/* Combined CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Perfect Combination</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Combine our bespoke groom service with hire for your party – giving you the perfect outfit 
              while keeping costs manageable for everyone else. We'll ensure everything coordinates beautifully.
            </p>
            
            <button 
              onClick={scrollToBooking}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Discuss Your Requirements
            </button>
            
            <p className="text-sm text-gray-400 mt-4">
              Free consultation • No obligation • Expert advice
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BespokeVsHireSection 