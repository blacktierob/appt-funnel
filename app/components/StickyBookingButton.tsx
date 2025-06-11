'use client'

import { BOOKING_URL } from '../config/constants'

const StickyBookingButton = () => {
  const handleBookingClick = () => {
    // Track mobile conversion
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Mobile Sticky Button',
        value: 1,
        currency: 'GBP'
      })
    }
    
    // Open Cowlendar booking
    window.open(BOOKING_URL, '_blank')
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <button
        onClick={handleBookingClick}
        className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform active:scale-95 shadow-xl text-lg"
      >
        📞 Book Now - Free Consultation
      </button>
    </div>
  )
}

export default StickyBookingButton 