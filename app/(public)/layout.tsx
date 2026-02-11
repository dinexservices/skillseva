import SmoothScroll from '@/components/SmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScroll>
      <Header />
      {children}
      <Footer />
    </SmoothScroll>
  )
}
