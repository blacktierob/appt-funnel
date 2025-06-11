'use client'

import { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you offer fittings for large groups?",
      answer: "Absolutely! We regularly handle wedding parties of 10, 15, even 20+ groomsmen. We can arrange group fitting sessions or individual appointments – whatever works best for your schedule. Our spacious fitting rooms and experienced team make large groups stress-free."
    },
    {
      question: "What if someone lives out of town?",
      answer: "No problem at all. Many of our grooms have wedding parties spread across the country. We can guide remote members through our sizing process, arrange postal measurements, or schedule individual appointments when they're visiting the area."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking 3-4 months before your wedding, especially for peak season (May-September). However, we've helped grooms with as little as 2 weeks notice! The earlier you book, the more time we have to ensure everything is perfect."
    },
    {
      question: "Do you do alterations in-house?",
      answer: "Yes! All alterations are handled by our expert in-house tailors. This means faster turnaround times, better quality control, and the perfect fit guaranteed. Most alterations are completed within 7-10 days."
    },
    {
      question: "Can we buy instead of hire?",
      answer: "Certainly! While most grooms choose to hire for cost-effectiveness, we offer a full purchase service for those who prefer to buy. Our sales team can discuss both options and help you decide what's best for your budget and future needs."
    },
    {
      question: "What happens if something doesn't fit on the day?",
      answer: "With 30+ years of experience, poor fits are extremely rare. However, we include a final fitting 1-2 weeks before your wedding to ensure everything is perfect. Emergency alterations on the day are available if absolutely necessary."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from grooms across Berkshire, Surrey & Hampshire
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span 
                    className={`text-2xl text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed animate-slide-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default FAQSection 