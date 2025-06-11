'use client'

const WhyChooseUsSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: "👔",
      title: "Outfits for Every Style",
      description: "From Morning Suits to Tweed, Dinner Suits to Lounge – we have the perfect look for your wedding theme."
    },
    {
      icon: "📍",
      title: "Local & Convenient",
      description: "Visit us in Crowthorne, trusted across Berkshire, Surrey & Hampshire with easy parking and flexible appointments."
    },
    {
      icon: "👨‍👨‍👧‍👦",
      title: "Group Friendly",
      description: "Dress the whole wedding party in one easy fitting session. We handle groups of any size with expertise."
    },
    {
      icon: "🧵",
      title: "Tailored for You",
      description: "In-house alterations ensure the perfect fit. Our expert tailors guarantee you'll look your absolute best."
    },
    {
      icon: "💬",
      title: "Expert Guidance",
      description: "We've dressed 1000s of grooms – you're in good hands. 30+ years of experience at your service."
    }
  ]

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Grooms Choose Black Tie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three decades of experience dressing grooms across Berkshire, Surrey, and Hampshire. 
            Here's what sets us apart.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make Your Wedding Suits One Less Thing to Worry About?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join hundreds of couples who trusted us with their special day.
            </p>
            <button 
              onClick={scrollToBooking}
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection 