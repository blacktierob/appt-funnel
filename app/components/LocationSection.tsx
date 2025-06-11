import { BUSINESS_NAME, ADDRESS, PHONE_NUMBER, EMAIL, WEBSITE } from '../config/constants'

const LocationSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visit Our Crowthorne Showroom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of Berkshire, serving couples across 
            Surrey and Hampshire with easy parking and flexible appointment times.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {BUSINESS_NAME}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-slate-600 mt-1">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      {ADDRESS.street}<br />
                      {ADDRESS.postcode}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-slate-600 mt-1">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a 
                      href={`tel:${PHONE_NUMBER}`} 
                      className="text-slate-800 hover:underline font-medium"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-slate-600 mt-1">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href={`mailto:${EMAIL}`} 
                      className="text-slate-800 hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-slate-600 mt-1">🌐</div>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a 
                      href={WEBSITE} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:underline"
                    >
                      {WEBSITE.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment Only</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Evening and weekend appointments available by arrangement
              </p>
            </div>
          </div>
          
          {/* Map placeholder and directions */}
          <div className="space-y-6">
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.123456789!2d-0.8123456!3d51.3789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIyJzQ0LjAiTiAwwrA0OCc0NC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Tie Menswear Location"
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Getting Here</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">🚗</span>
                  Free parking available on High Street and nearby car parks
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚊</span>
                  Crowthorne Railway Station - 5 minute walk
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚌</span>
                  Regular bus services from Reading, Bracknell & Camberley
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  Easy access from M3, M4 & A329(M)
                </li>
              </ul>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default LocationSection 