'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import WhatsAppModal from './WhatsAppModal'

import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  const getLinkClass = (path: string) => {
    const isLinkActive = path === '/' ? pathname === '/' : pathname.startsWith(path)
    return `text-[0.95rem] font-medium transition-colors ${isLinkActive ? 'text-[#111827]' : 'text-[#9ca3af] hover:text-[#111827]'}`
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <>
      <header className={`fixed top-0 z-[50] bg-white backdrop-blur-[100px]  w-full transition-all duration-300 ${isScrolled ? 'shadow-sm ' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between relative">
          <Link className={`inline-flex items-center transition-all duration-150 ease-out z-10 py-1 ${isScrolled ? 'transform-none' : 'scale-100'}`} href="/">
            <Image
              className="w-auto h-[35px] md:h-[40px] object-contain origin-center transition-transform duration-200"
              src="/SkillSeva Logo_3 (1).png"
              alt="SkillSeva logo"
              width={250}
              height={70}
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-6" aria-label="Primary">
              <Link className={getLinkClass('/')} href="/">Home</Link>
              <Link className={getLinkClass('/cohorts')} href="/cohorts">Cohorts</Link>

              <Link className={getLinkClass('/events')} href="/events">Events</Link>
              <Link className={getLinkClass('/media')} href="/media">Media</Link>
              <Link className={getLinkClass('/jobs')} href="/jobs">Job Board</Link>
            </nav>
            <Link
              className="px-6 py-2.5 rounded-full bg-brand-accent text-white font-semibold text-[0.9rem] transition-all hover:bg-brand-accent-highlight cursor-pointer transform hover:-translate-y-0.5"
              href="https://chat.whatsapp.com/I9HeXlWP75M4trxoG7cITO"
            >
              Community
            </Link>
          </div>

          <button
            className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[1000] ml-auto block"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-text-primary relative transition-colors duration-300 before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-text-primary before:transition-all before:duration-300 before:left-0 before:-top-2 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 after:left-0 after:-bottom-2 ${isMenuOpen ? 'bg-transparent before:rotate-45 before:top-0 after:-rotate-45 after:bottom-0' : ''}`}></span>
          </button>

          <div className={`fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-md z-[900] flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
            <nav className="flex flex-col gap-8 items-center text-center">
              <Link className="text-2xl font-medium text-text-primary decoration-0" href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link className="text-2xl font-medium text-text-primary decoration-0" href="/cohorts" onClick={() => setIsMenuOpen(false)}>Cohorts</Link>
              <Link className="text-2xl font-medium text-text-primary decoration-0" href="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link className="text-2xl font-medium text-text-primary decoration-0" href="/media" onClick={() => setIsMenuOpen(false)}>Media</Link>

              <Link className="text-2xl font-medium text-text-primary decoration-0" href="/jobs" onClick={() => setIsMenuOpen(false)}>Job Board</Link>

              <Link href="https://chat.whatsapp.com/I9HeXlWP75M4trxoG7cITO" className="text-xl font-semibold text-brand-accent px-6 py-3 border border-brand-accent rounded-full mt-4 bg-transparent cursor-pointer" onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}>Community</Link>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}

