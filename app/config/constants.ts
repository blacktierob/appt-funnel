// ============================================================================
// TECHNICAL CONFIGURATION
// ============================================================================
// This file contains technical configurations like URLs, tracking IDs, and
// other system-level settings. For content changes, use content.ts instead.
// ============================================================================

// ============================================================================
// BOOKING & EXTERNAL LINKS
// ============================================================================
export const BOOKING_URL = 'https://app.cowlendar.com/cal/67b20d2ee7c3240c3a4ee690/50520564859189'

// ============================================================================
// TRACKING & ANALYTICS
// ============================================================================
export const GTM_ID = 'GTM-XXXXXXX' // Replace with actual GTM ID
export const FB_PIXEL_ID = 'YOUR_PIXEL_ID' // Replace with actual Facebook Pixel ID

// ============================================================================
// IMAGE FALLBACKS (for when local images fail to load)
// ============================================================================
export const IMAGE_FALLBACKS = {
  hero: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  suits: [
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ]
}

// ============================================================================
// DEPLOYMENT & BUILD SETTINGS
// ============================================================================
export const SITE_CONFIG = {
  name: 'Black Tie Menswear Landing Page',
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development'
} 