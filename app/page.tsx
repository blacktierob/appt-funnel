import HeroSection from './components/HeroSection'
import ProblemSolutionSection from './components/ProblemSolutionSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import GallerySection from './components/GallerySection'
import PopularSuitsSection from './components/PopularSuitsSection'
import BespokeVsHireSection from './components/BespokeVsHireSection'
import BookingSection from './components/BookingSection'
import FAQSection from './components/FAQSection'
import TestimonialsSection from './components/TestimonialsSection'
import LocationSection from './components/LocationSection'
import StickyBookingButton from './components/StickyBookingButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 md:pb-0">
      <HeroSection />
      <ProblemSolutionSection />
      <WhyChooseUsSection />
      <GallerySection />
      <PopularSuitsSection />
      <BespokeVsHireSection />
      <BookingSection />
      <FAQSection />
      <TestimonialsSection />
      <LocationSection />
      <StickyBookingButton />
    </main>
  )
} 