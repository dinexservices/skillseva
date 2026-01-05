'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`hero ${isVisible ? 'hero--visible' : ''}`} id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">Cohort-based learning · India's top operators</p>
        <h1 className="hero__heading">
          Accelerate your career by learning from the <span className="hero__highlight">top 1%</span>
        </h1>
        <p className="hero__summary">
          Join a community where professionals at every stage experience rapid growth, guided by the expertise of the top minds in their fields. Our immersive, cohort-driven learning approach ensures lasting impact and measurable success.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" href="#programs">Explore our programs</Link>
          <button className="btn btn--ghost" type="button">Talk to an advisor</button>
        </div>
        <dl className="hero__metrics">
          <div className="metric">
            <dt>4000+</dt>
            <dd>hours of live mentorship</dd>
          </div>
          <div className="metric">
            <dt>9.4/10</dt>
            <dd>average learner rating</dd>
          </div>
          <div className="metric">
            <dt>18</dt>
            <dd>industries represented</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

