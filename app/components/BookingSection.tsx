'use client'

import { useState } from 'react'
import { BOOKING_URL } from '../config/constants'
import { BUSINESS, BOOKING_SECTION } from '../config/content'

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    groomPartySize: '',
    notes: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track form submission
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Appointment Booking',
        value: 1,
        currency: 'GBP'
      })
    }
    
    // Redirect to Cowlendar booking link
    window.open(BOOKING_URL, '_blank')
    
    setIsSubmitted(true)
  }

  const handleBookingClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
    
    // Open Cowlendar booking in new tab
    window.open(BOOKING_URL, '_blank')
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Thank You for Your Interest!
              </h3>
              <p className="text-green-700 mb-6">
                You should now see our booking calendar in a new tab. Please select your preferred appointment time.
              </p>
              <p className="text-sm text-green-600">
                If the booking page didn't open, 
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline ml-1 font-semibold"
                >
                  click here to book your appointment
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Fitting Today
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Ready to get your wedding suits sorted? Click below to select your preferred appointment time.
          </p>
          
          <div className="bg-white rounded-2xl p-8 text-gray-900 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="mr-2">⚠️</span>
                Appointments fill fast during peak wedding season!
              </div>
            </div>
            
            <button
              onClick={handleBookingClick}
              className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold py-6 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl mb-6"
            >
              Book Your Appointment Now
            </button>
            
            <div className="text-sm text-gray-600 space-y-2">
              <p>✓ Choose your preferred date and time</p>
              <p>✓ Instant confirmation</p>
              <p>✓ Free consultation and fitting</p>
            </div>
            
            <hr className="my-6" />
            
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                {BOOKING_SECTION.alternativeContact.title}
              </p>
              <a 
                href={`tel:${BUSINESS.phone}`} 
                className="font-semibold text-slate-800 hover:underline text-lg"
              >
                Call us: {BUSINESS.phone}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection 