import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BrandMarquee from '@/components/BrandMarquee'
import Stats from '@/components/Stats'
import GreenSection from '@/components/GreenSection'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/MetvyAdvantage'
import NotSureSection from '@/components/NotSureSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Stats />
        <BrandMarquee />

        <Programs />
        <NotSureSection />
        <Testimonials />
        {/* <BlogSection /> */}
      </main>

    </>
  )
}

