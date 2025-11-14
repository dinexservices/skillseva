import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillSeva | Accelerate Your Career',
  description: 'SkillSeva brings the top 1% of operators together to mentor ambitious professionals through immersive cohort-based programs.',
  icons: {
    icon: '/SkillSeva Logo.png',
    apple: '/SkillSeva Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

