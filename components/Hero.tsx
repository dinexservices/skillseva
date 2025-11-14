'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const mentors = [
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68a75f8d0cb9979055a6b907_aashi%20agarwal.webp",
    name: "Aashi Agarwal",
    role: "Chief of Staff · Adya Care",
    logoOnly: false
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686eb8028dfcf488b77bfbf7_Himanshu.png",
    name: "Himanshu N Dubey",
    role: "Associate Director · EY",
    logoOnly: false
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686eb7786c0f03d5f5bcdda2_Ravish.png",
    name: "Ravish Kumar",
    role: "VCs & Startups Lead · Google",
    logoOnly: false
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686eb95215ab2541a2016845_Shitij.png",
    name: "Shitij Jain",
    role: "Former Head of Media · Apple",
    logoOnly: false
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686eb807d967d5a05493ce6f_Himanshu%20brand.svg",
    name: "Boardroom Labs",
    role: "Design Your Path · Mini sprint",
    logoOnly: true
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68978ade9827aec266c55fca_adya%20care.svg",
    name: "Adya Care",
    role: "Healthcare Leadership Residency",
    logoOnly: true
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68a422516ecc984e2b6fe982_google.svg",
    name: "Google x SkillSeva",
    role: "Strategic Growth Clinics",
    logoOnly: true
  },
  {
    image: "https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686eb958a3af1d9fd77ba202_Shitij%20brand.svg",
    name: "Apple Alumni Circle",
    role: "Leadership in Media Labs",
    logoOnly: true
  },
]

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

      <div className="hero__marquee" aria-label="Featured mentors from SkillSeva">
        <div className="marquee">
          <div className="marquee__track">
            {mentors.map((mentor, index) => (
              <article key={index} className="mentor-card">
                <Image
                  src={mentor.image}
                  alt={`Portrait of ${mentor.name}`}
                  width={250}
                  height={156}
                  className={mentor.logoOnly ? "mentor-card__logo-only" : ""}
                  unoptimized
                />
                <div className="mentor-card__info">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="marquee__track" aria-hidden="true">
            {mentors.map((mentor, index) => (
              <article key={`duplicate-${index}`} className="mentor-card">
                <Image
                  src={mentor.image}
                  alt=""
                  width={250}
                  height={156}
                  className={mentor.logoOnly ? "mentor-card__logo-only" : ""}
                  unoptimized
                />
                <div className="mentor-card__info">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

