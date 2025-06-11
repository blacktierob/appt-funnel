import { GOOGLE_REVIEWS_RATING, TOTAL_REVIEWS, YEARS_EXPERIENCE } from '../config/constants'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "Reading, Berkshire",
      wedding: "August 2023",
      rating: 5,
      text: "Absolutely outstanding service! Michael and his 8 groomsmen all looked incredible. The team handled our large group effortlessly and the morning suits were perfection. Couldn't recommend Black Tie more highly.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c5e2e4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma & James Wilson",
      location: "Guildford, Surrey",
      wedding: "June 2023",
      rating: 5,
      text: "From our first appointment to collecting the suits, everything was seamless. The alterations were spot-on and James looked like a million dollars. The whole experience was stress-free during an already hectic time!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Charlotte & David Thompson",
      location: "Winchester, Hampshire",
      wedding: "September 2023",
      rating: 5,
      text: "The team went above and beyond for our Scottish Highland wedding. The kilts and formal wear were immaculate, and they even helped coordinate with our Scottish relatives. Truly exceptional service.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Lucy & Robert Martinez",
      location: "Crowthorne, Berkshire", 
      wedding: "May 2023",
      rating: 5,
      text: "As locals, we'd heard great things about Black Tie, but they exceeded all expectations. The vintage tweed suits were perfect for our rustic barn wedding. Professional, friendly, and reasonably priced.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Kate & Alexander Roberts",
      location: "Camberley, Surrey",
      wedding: "July 2023", 
      rating: 5,
      text: "Last-minute panic booking (3 weeks before the wedding!) but Black Tie came through brilliantly. The navy three-piece suits looked amazing and everything fit perfectly on the day. Lifesavers!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't Just Take Our Word for It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real couples, real weddings, real results. Here's what grooms and brides are saying 
            about their Black Tie experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {testimonial.rating}/5 stars
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                    <p className="text-gray-500">{testimonial.wedding} Wedding</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Over 200+ Happy Couples
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Your perfect wedding suit experience is just one appointment away.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                <span>{GOOGLE_REVIEWS_RATING}/5 Average Rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white opacity-30"></div>
              <span>{TOTAL_REVIEWS} Google Reviews</span>
              <div className="hidden sm:block w-px h-6 bg-white opacity-30"></div>
              <span>{YEARS_EXPERIENCE} Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 