/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'www.blacktiemenswear.co.uk'],
    formats: ['image/webp', 'image/avif'],
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig 