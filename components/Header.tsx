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
            src="/Untitled_design__7_-removebg-preview.png" 
            alt="SkillSeva logo"
            width={50}
            height={50}
            unoptimized
          />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link className="site-nav__link" href="#programs">Programs</Link>
          <Link className="site-nav__link" href="#community">Community</Link>
          <Link className="site-nav__link" href="#impact">Impact</Link>
        </nav>
        <Link className="site-header__cta" href="#apply">Join the waitlist</Link>
      </div>
    </header>
  )
}

