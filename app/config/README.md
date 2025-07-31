# Content Reference Guide

## 📝 How to Customize Your Landing Page

This folder contains centralized configuration files that make it easy to update your entire landing page from one place.

### 🎯 Quick Start

1. **Edit `content.ts`** - This is your main content file
2. **Edit `constants.ts`** - This contains technical configurations
3. **Update images** - Place your images in the `public/images/` folder
4. **Deploy** - Your changes will be live!

### 📁 File Structure

```
app/config/
├── content.ts      # All text content, links, and image paths
├── constants.ts    # Technical configurations (booking URLs, tracking IDs)
└── README.md       # This guide
```

### 🔧 How to Update Content

#### **Business Information**
```typescript
// In content.ts
export const BUSINESS = {
  name: 'Your Business Name',
  phone: 'Your Phone Number',
  email: 'your@email.com',
  // ... etc
}
```

#### **Booking Link**
```typescript
// In constants.ts
export const BOOKING_URL = 'https://your-booking-link.com'
```

#### **Images**
1. Place your images in `public/images/`
2. Update the paths in `content.ts`:
```typescript
// In content.ts
export const HERO = {
  image: {
    src: '/images/your-hero-image.jpg',
    fallback: 'https://fallback-image-url.com'
  }
}
```

### 📋 What You Can Customize

#### **Text Content**
- ✅ All headings and titles
- ✅ Descriptions and subtitles
- ✅ Button text and CTAs
- ✅ Testimonials and reviews
- ✅ FAQ questions and answers
- ✅ Contact information

#### **Links & URLs**
- ✅ Booking appointment links
- ✅ Website URLs
- ✅ Social media links
- ✅ Contact information

#### **Images**
- ✅ Hero section images
- ✅ Gallery photos
- ✅ Product/suit images
- ✅ Award logos
- ✅ Social proof images

#### **Business Details**
- ✅ Company name and tagline
- ✅ Phone numbers and email
- ✅ Address and location
- ✅ Opening hours
- ✅ Years of experience
- ✅ Review ratings

### 🎨 Content Sections Available

1. **HERO** - Main headline, subtitle, CTA button
2. **PROBLEM_SOLUTION** - Pain points and solutions
3. **GALLERY** - Wedding photos and captions
4. **WHY_CHOOSE_US** - Feature benefits and icons
5. **POPULAR_SUITS** - Product showcase
6. **BESPOKE_HIRE** - Service options and pricing
7. **BOOKING_SECTION** - Call-to-action content
8. **FAQ** - Questions and answers
9. **TESTIMONIALS** - Customer reviews
10. **LOCATION** - Store details and contact
11. **SEO** - Meta tags and descriptions

### 🚀 Pro Tips

1. **Keep it consistent** - Use the same tone and style throughout
2. **Test your links** - Make sure all booking and contact links work
3. **Optimize images** - Use high-quality images that load quickly
4. **Update regularly** - Keep testimonials and reviews current
5. **Track performance** - Update your tracking IDs in `constants.ts`

### 🔄 Making Changes

1. Edit the relevant section in `content.ts`
2. Save the file
3. Your changes will be reflected immediately
4. Commit and push to deploy

### 📞 Need Help?

- **Technical issues**: Check the main README.md
- **Content suggestions**: Review successful landing page examples
- **Image optimization**: Use tools like TinyPNG or Squoosh
- **SEO optimization**: Update the SEO section in content.ts

---

**Happy customizing!** 🎉 