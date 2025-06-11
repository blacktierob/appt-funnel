const ProblemSolutionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Planning a wedding is tough enough. Let us handle the suits.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Problem side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 text-2xl">😰</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800">
                  The DIY Struggle
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-red-700 font-medium group-hover:text-red-800 transition-colors">
                    Sizing chaos with the groomsmen
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-red-700 font-medium group-hover:text-red-800 transition-colors">
                    Style disagreements and indecision
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-red-700 font-medium group-hover:text-red-800 transition-colors">
                    Multiple trips to different stores
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                  <span className="text-red-700 font-medium group-hover:text-red-800 transition-colors">
                    Last-minute panic about fit
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Solution side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-2xl">😌</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800">
                  The Black Tie Solution
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                  <span className="text-green-700 font-medium group-hover:text-green-800 transition-colors">
                    Expert fittings for the whole party
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                  <span className="text-green-700 font-medium group-hover:text-green-800 transition-colors">
                    Professional style guidance
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                  <span className="text-green-700 font-medium group-hover:text-green-800 transition-colors">
                    One convenient appointment
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-500 mr-3 text-xl font-bold">✓</span>
                  <span className="text-green-700 font-medium group-hover:text-green-800 transition-colors">
                    Perfect fit guaranteed
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed">
              "From sizing chaos to style disagreements, getting the groomsmen sorted can be stressful. 
              At Black Tie Menswear, we make it easy with expert fittings, timeless options, and personal service from day one."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolutionSection 