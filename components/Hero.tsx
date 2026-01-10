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
        <p className="hero__eyebrow">BUILD SKILLS THAT PAY</p>
        <h1 className="hero__heading">
          Learn directly from industry professionals <br /> and turn your <span className="hero__highlight italic-emphasis">skills into real income.</span>
        </h1>
        <p className="hero__summary">
          SkillSeva is a cohort-based learning platform designed to help students <br /> and early professionals learn practical, job-ready skills through real <br /> projects, mentorship, and community.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" href="#programs">Explore our programs</Link>
          <button className="btn btn--ghost" type="button">Book a Call</button>
        </div>
        <dl className="hero__metrics">
          <div className="metric">
            <dt>1000+</dt>
            <dd>Learners Trained</dd>
          </div>
          <div className="metric">
            <dt>5000+</dt>
            <dd>Hours of Live Learning</dd>
          </div>
          <div className="metric">
            <dt>7</dt>
            <dd>Active Cohorts Running</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

