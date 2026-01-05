import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import GreenSection from '@/components/GreenSection'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/MetvyAdvantage'
import Quiz from '@/components/Quiz'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <GreenSection />
        <Programs />
        <Quiz />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}

