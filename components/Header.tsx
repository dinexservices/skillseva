'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link className="brand" href="/">
          <Image
            className="brand__mark"
            src="/SkillSeva Logo_3 (1).png"
            alt="SkillSeva logo"
            width={400}
            height={120}
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link className="site-nav__link" href="/#programs">Programs</Link>
          <Link className="site-nav__link" href="/events">Events</Link>
          <Link className="site-nav__link" href="/jobs">Job Board</Link>
          <Link className="site-nav__link" href="/#community">Community</Link>
        </nav>
        <Link className="site-header__cta" href="#apply">Join the waitlist</Link>
      </div>
    </header>
  )
}

