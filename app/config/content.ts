// ============================================================================
// CONTENT REFERENCE FILE
// ============================================================================
// This file contains all text content, links, and image paths used throughout
// the landing page. Update these values to customize the entire site.
// ============================================================================

// ============================================================================
// BUSINESS INFORMATION
// ============================================================================
export const BUSINESS = {
  name: 'Black Tie Menswear',
  tagline: 'Expert Wedding Suit Hire & Bespoke Tailoring',
  phone: '01344778883',
  email: 'info@blacktiemenswear.co.uk',
  website: 'https://www.blacktiemenswear.co.uk',
  address: {
    street: 'High Street, Crowthorne',
    postcode: 'Berkshire RG45 7AZ',
    full: 'High Street, Crowthorne, Berkshire RG45 7AZ'
  },
  hours: 'Mon-Sat: 9am-5:30pm',
  yearsExperience: '30+',
  totalReviews: '200+',
  googleRating: '4.9'
}

// ============================================================================
// BOOKING & CONTACT
// ============================================================================
export const BOOKING = {
  url: 'https://app.cowlendar.com/cal/67b20d2ee7c3240c3a4ee690/50520564859189',
  phoneNumber: '01344778883',
  consultationText: 'Free consultation • No obligation • Expert advice'
}

// ============================================================================
// TRACKING & ANALYTICS
// ============================================================================
export const TRACKING = {
  gtmId: 'GTM-XXXXXXX', // Replace with actual GTM ID
  fbPixelId: 'YOUR_PIXEL_ID' // Replace with actual Facebook Pixel ID
}

// ============================================================================
// HERO SECTION
// ============================================================================
export const HERO = {
  title: 'Wedding Suits That Make Your Special Day Perfect',
  subtitle: 'Expert fitting, timeless styles, and personal service for grooms and groomsmen. Join hundreds of couples who trusted us with their wedding day.',
  ctaButton: 'Book Your Free Consultation',
  ctaSubtext: 'No obligation • Expert advice • Perfect fit guaranteed',
  
  // Floating testimonial card
  testimonial: {
    text: '"The suits looked perfect on the day – couldn\'t have been easier!"',
    author: 'James & Sarah',
    rating: '5 stars'
  },
  
  // Award logos section (placeholder)
  awards: {
    title: 'Award-Winning Service',
    logos: [
      // Add award logo image paths here
      // Example: '/images/awards/award1.png'
    ]
  },
  
  // Hero image
  image: {
    src: '/images/hero/hero-groom.jpg',
    fallback: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Groom in wedding suit'
  }
}

// ============================================================================
// PROBLEM & SOLUTION SECTION
// ============================================================================
export const PROBLEM_SOLUTION = {
  problem: {
    title: 'The DIY Struggle',
    description: 'Trying to coordinate groomsmen suits yourself can be a nightmare. Sizing issues, style disagreements, and last-minute panics are all too common.',
    icon: '❌',
    points: [
      'Sizing chaos and fitting disasters',
      'Style disagreements between groomsmen',
      'Last-minute stress and coordination issues',
      'Poor quality suits that don\'t last the day'
    ]
  },
  
  solution: {
    title: 'The Black Tie Experience',
    description: 'We take the stress out of wedding suit coordination with expert fittings, timeless options, and personal service from day one.',
    icon: '✅',
    points: [
      'Expert fitting service for perfect sizing',
      'Curated collection of timeless styles',
      'Personal coordination from start to finish',
      'Premium quality suits that look amazing'
    ]
  },
  
  conclusion: {
    text: 'From sizing chaos to style disagreements, getting the groomsmen sorted can be stressful. At Black Tie Menswear, we make it easy with expert fittings, timeless options, and personal service from day one.'
  }
}

// ============================================================================
// GALLERY SECTION
// ============================================================================
export const GALLERY = {
  title: 'See Our Grooms in Action',
  subtitle: 'Real weddings, real grooms, real results',
  
  images: [
    {
      src: '/images/gallery/gallery-1.jpg',
      fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wedding party in suits',
      caption: 'Classic black tie elegance'
    },
    {
      src: '/images/gallery/gallery-2.jpg',
      fallback: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Groom and groomsmen',
      caption: 'Perfect coordination'
    },
    {
      src: '/images/gallery/gallery-3.jpg',
      fallback: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wedding ceremony',
      caption: 'Timeless style'
    },
    {
      src: '/images/gallery/gallery-4.jpg',
      fallback: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Groomsmen group',
      caption: 'Professional fitting service'
    },
    {
      src: '/images/gallery/gallery-5.jpg',
      fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Wedding reception',
      caption: 'Celebration ready'
    },
    {
      src: '/images/gallery/gallery-6.jpg',
      fallback: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Groom portrait',
      caption: 'Confidence in every detail'
    }
  ]
}

// ============================================================================
// WHY CHOOSE US SECTION
// ============================================================================
export const WHY_CHOOSE_US = {
  title: 'Why Grooms Choose Black Tie',
  subtitle: 'Join hundreds of couples who trusted us with their special day',
  
  features: [
    {
      icon: '👔',
      title: 'Expert Fitting Service',
      description: 'Professional measurements and fittings ensure every suit fits perfectly'
    },
    {
      icon: '🎯',
      title: 'Timeless Style Collection',
      description: 'Curated selection of classic and contemporary wedding suit styles'
    },
    {
      icon: '🤝',
      title: 'Personal Service',
      description: 'Dedicated support from initial consultation to wedding day'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'High-quality fabrics and construction that look amazing all day'
    },
    {
      icon: '📅',
      title: 'Flexible Booking',
      description: 'Easy booking process with free consultations and no pressure'
    },
    {
      icon: '💎',
      title: '30+ Years Experience',
      description: 'Decades of expertise in wedding suit coordination and styling'
    }
  ],
  
  cta: {
    title: 'Ready to Make Your Wedding Suits One Less Thing to Worry About?',
    subtitle: 'Join hundreds of couples who trusted us with their special day.',
    buttonText: 'Book Your Appointment'
  }
}

// ============================================================================
// POPULAR SUITS SECTION
// ============================================================================
export const POPULAR_SUITS = {
  title: 'See Our Customers\' Favourites',
  subtitle: 'Most popular styles chosen by our couples',
  
  suits: [
    {
      name: 'Classic Black Tie',
      src: '/images/suits/suit-1.jpg',
      fallback: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Classic black tie suit',
      description: 'Timeless elegance for the traditional groom'
    },
    {
      name: 'Navy Three-Piece',
      src: '/images/suits/suit-2.jpg',
      fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Navy three-piece suit',
      description: 'Sophisticated style with modern appeal'
    },
    {
      name: 'Charcoal Grey',
      src: '/images/suits/suit-3.jpg',
      fallback: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Charcoal grey suit',
      description: 'Versatile choice for any wedding theme'
    },
    {
      name: 'Light Grey Morning Suit',
      src: '/images/suits/suit-4.jpg',
      fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Light grey morning suit',
      description: 'Traditional British wedding elegance'
    },
    {
      name: 'Midnight Blue',
      src: '/images/suits/suit-5.jpg',
      fallback: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Midnight blue suit',
      description: 'Rich, deep color for the modern groom'
    },
    {
      name: 'Cream Summer Suit',
      src: '/images/suits/suit-6.jpg',
      fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cream summer suit',
      description: 'Perfect for summer and outdoor weddings'
    }
  ],
  
  cta: {
    buttonText: 'See our Full Hirewear Collection',
    subtext: 'Browse our complete range of wedding suits'
  }
}

// ============================================================================
// BESPOKE VS HIRE SECTION
// ============================================================================
export const BESPOKE_HIRE = {
  title: 'Something Special for the Groom?',
  subtitle: 'We understand every groom is unique. While our hire collection is perfect for the wedding party, we offer made-to-measure and bespoke tailoring for grooms who want something truly special.',
  
  groom: {
    title: 'For the Groom',
    subtitle: 'Made-to-Measure & Bespoke',
    icon: '⭐',
    features: [
      'Personal consultation and design',
      'Perfect fit guaranteed with multiple fittings',
      'Premium fabrics and exclusive styles',
      'Yours to keep forever'
    ],
    pricing: {
      startingFrom: '£899',
      type: 'Made-to-measure'
    }
  },
  
  party: {
    title: 'For the Party',
    subtitle: 'Premium Hire Collection',
    icon: '👥',
    features: [
      'Extensive size range available',
      'Professional fitting service',
      'Coordinated with groom\'s outfit',
      'Hassle-free return after the wedding'
    ],
    pricing: {
      startingFrom: '£179',
      type: '3-piece hire'
    }
  },
  
  combination: {
    title: 'The Perfect Combination',
    description: 'Combine our bespoke groom service with hire for your party – giving you the perfect outfit while keeping costs manageable for everyone else. We\'ll ensure everything coordinates beautifully.',
    buttonText: 'Discuss Your Requirements',
    subtext: 'Free consultation • No obligation • Expert advice'
  }
}

// ============================================================================
// BOOKING SECTION
// ============================================================================
export const BOOKING_SECTION = {
  title: 'Ready to Get Started?',
  subtitle: 'Book your free consultation today',
  
  primaryCta: {
    title: 'Book Your Free Consultation',
    subtitle: 'Expert advice, no obligation, perfect fit guaranteed',
    buttonText: 'Book Appointment Now',
    subtext: 'Free consultation • No pressure • Expert advice'
  },
  
  alternativeContact: {
    title: 'Prefer to speak to someone first?',
    subtitle: 'Call us directly for a chat about your requirements',
    phoneNumber: '01344778883',
    availability: 'Available Mon-Sat: 9am-5:30pm'
  }
}

// ============================================================================
// FAQ SECTION
// ============================================================================
export const FAQ = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our wedding suit service',
  
  questions: [
    {
      question: 'How far in advance should we book?',
      answer: 'We recommend booking at least 3-4 months before your wedding date to ensure availability and allow time for fittings and any alterations.'
    },
    {
      question: 'What\'s included in the hire service?',
      answer: 'Our hire service includes the complete suit (jacket, trousers, waistcoat), shirt, tie, and professional fitting service. We also offer accessories like cufflinks and pocket squares.'
    },
    {
      question: 'Do you offer alterations?',
      answer: 'Yes, we provide complimentary alterations to ensure the perfect fit. Our expert tailors will make any necessary adjustments during your fittings.'
    },
    {
      question: 'What if someone can\'t attend the fitting?',
      answer: 'We can work with measurements taken elsewhere, or we offer a remote fitting service where we guide you through taking measurements at home.'
    },
    {
      question: 'When do we collect the suits?',
      answer: 'Suits are typically collected 1-2 days before the wedding to ensure they\'re fresh and pressed. We\'ll coordinate the timing with you.'
    },
    {
      question: 'What happens if there\'s an issue on the day?',
      answer: 'We provide emergency contact numbers and are available on your wedding day if you need any assistance. Our team is committed to ensuring everything goes perfectly.'
    }
  ]
}

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================
export const TESTIMONIALS = {
  title: 'What Our Couples Say',
  subtitle: 'Real reviews from real couples',
  
  featured: {
    text: '"The suits looked perfect on the day – couldn\'t have been easier! The team made the whole process so smooth and stress-free."',
    author: 'James & Sarah',
    rating: '5 stars',
    date: 'March 2024'
  },
  
  stats: {
    title: 'Join Over 200+ Happy Couples',
    rating: '4.9',
    totalReviews: '200+',
    yearsExperience: '30+',
    subtitle: 'Trusted by couples across Berkshire and beyond'
  },
  
  reviews: [
    {
      text: '"Professional service from start to finish. The suits were perfect and the team made everything so easy."',
      author: 'Michael & Emma',
      rating: '5 stars'
    },
    {
      text: '"Excellent quality suits and amazing customer service. Highly recommend for any wedding!"',
      author: 'David & Lisa',
      rating: '5 stars'
    },
    {
      text: '"The fitting service was brilliant and the suits looked amazing on all the groomsmen."',
      author: 'Tom & Rachel',
      rating: '5 stars'
    }
  ]
}

// ============================================================================
// LOCATION SECTION
// ============================================================================
export const LOCATION = {
  title: 'Visit Our Store',
  subtitle: 'Come and see our collection in person',
  
  address: {
    street: 'High Street, Crowthorne',
    postcode: 'Berkshire RG45 7AZ',
    full: 'High Street, Crowthorne, Berkshire RG45 7AZ'
  },
  
  contact: {
    phone: '01344778883',
    email: 'info@blacktiemenswear.co.uk',
    website: 'https://www.blacktiemenswear.co.uk'
  },
  
  hours: {
    title: 'Opening Hours',
    days: 'Monday - Saturday',
    times: '9:00am - 5:30pm',
    note: 'Closed Sundays'
  },
  
  services: [
    'Free parking available',
    'Easy access from M4 and M3',
    'Wheelchair accessible',
    'Private fitting rooms'
  ]
}

// ============================================================================
// FOOTER
// ============================================================================
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} ${BUSINESS.name}. All rights reserved.`,
  links: [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Contact Us', url: '/contact' }
  ]
}

// ============================================================================
// META TAGS & SEO
// ============================================================================
export const SEO = {
  title: 'Wedding Suit Hire Berkshire | Black Tie Menswear',
  description: 'Expert wedding suit hire and bespoke tailoring in Berkshire. Professional fitting service, timeless styles, and personal service for grooms and groomsmen.',
  keywords: 'wedding suit hire, bespoke tailoring, groomsmen suits, Berkshire, Crowthorne, wedding suits, suit hire, made to measure',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@blacktiemenswear'
} 