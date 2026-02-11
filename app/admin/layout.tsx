import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel | SkillSeva',
  description: 'SkillSeva Admin Panel',
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
