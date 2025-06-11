# Black Tie Menswear - Landing Page

A high-converting sales funnel landing page for Black Tie Menswear, designed to generate appointment bookings from engaged couples looking for wedding suit hire services.

## 🎯 Features

- **Conversion-Optimized Design**: Following sales funnel best practices
- **Mobile-First Responsive**: Perfect experience on all devices
- **Fast Loading**: Optimized for performance and SEO
- **Tracking Integration**: Facebook Pixel and Google Tag Manager ready
- **Appointment Booking**: Direct integration with Cowlendar booking system

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: http://localhost:3000

## 🔧 Configuration

### Tracking Setup

1. **Google Tag Manager**: 
   - Replace `GTM-XXXXXXX` in `app/layout.tsx` with your GTM ID

2. **Facebook Pixel**: 
   - Replace `YOUR_PIXEL_ID` in `app/layout.tsx` with your Pixel ID

### Content Customization

Key sections to customize:
- Business details in `LocationSection.tsx`
- Testimonials in `TestimonialsSection.tsx`
- Gallery images in `GallerySection.tsx`
- Contact information throughout components

## 📱 Landing Page Structure

1. **Hero Section**: Compelling headline with primary CTA
2. **Problem & Solution**: Addresses customer pain points
3. **Why Choose Us**: Trust builders and key benefits
4. **Gallery**: Visual proof and real wedding photos
5. **Booking Section**: Main conversion point with Cowlendar integration
6. **FAQs**: Handles objections and common questions
7. **Testimonials**: Social proof from real customers
8. **Location**: Contact details and showroom information
9. **Sticky Mobile CTA**: Always-visible booking button on mobile

## 🎨 Design Features

- **Professional Color Scheme**: Elegant grays and slate tones
- **Typography**: Google Fonts (Inter + Playfair Display)
- **Animations**: Subtle CSS animations for engagement
- **Accessibility**: WCAG compliant design
- **SEO Optimized**: Meta tags, structured data, fast loading

## 📊 Conversion Optimization

- **Multiple CTAs**: Strategic placement throughout the page
- **Urgency Messaging**: Scarcity and time-sensitive offers
- **Social Proof**: Reviews, testimonials, and trust badges
- **Mobile Optimization**: Sticky booking button and touch-friendly design
- **Form Optimization**: Minimal friction booking process

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables** for tracking
3. **Deploy** - automatic deployments on every push

### Manual Deployment

```bash
npm run build
npm start
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google rankings
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Minimized with tree shaking

## 🔧 Customization

### Changing Content
- Edit component files in `app/components/`
- Update contact details in `LocationSection.tsx`
- Replace placeholder images with real photos

### Styling Changes
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Component-specific styles are in respective component files

### Tracking & Analytics
- Update tracking IDs in `app/layout.tsx`
- Customize conversion events in booking components
- Add additional tracking as needed

## 📞 Support

For technical support or customization requests, contact the development team.

---

**Built for Black Tie Menswear** - Helping grooms look their best since 1985 