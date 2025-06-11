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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSolutionSection />
      <GallerySection />
      <WhyChooseUsSection />
      <PopularSuitsSection />
      <BespokeVsHireSection />
      <BookingSection />
      <FAQSection />
      <TestimonialsSection />
      <LocationSection />
    </main>
  )
} 