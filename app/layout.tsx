import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://skillseva.com'),
  title: {
    default: 'SkillSeva | Accelerate Your Career',
    template: '%s | SkillSeva',
  },
  description: 'SkillSeva brings the top 1% of operators together to mentor ambitious professionals through immersive cohort-based programs.',
  keywords: ['SkillSeva', 'Cohorts', 'Mentorship', 'Career Growth', 'MERN Stack', 'UI/UX Design'],
  authors: [{ name: 'SkillSeva' }],
  creator: 'SkillSeva',
  publisher: 'SkillSeva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skillseva.com',
    siteName: 'SkillSeva',
    title: 'SkillSeva | Accelerate Your Career',
    description: 'SkillSeva brings the top 1% of operators together to mentor ambitious professionals through immersive cohort-based programs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillSeva | Accelerate Your Career',
    description: 'SkillSeva brings the top 1% of operators together to mentor ambitious professionals through immersive cohort-based programs.',
    creator: '@skillseva',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className} style={{ margin: 0, padding: 0 }}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

