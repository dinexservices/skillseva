'use client'

import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const facts = [
    {
      number: '500',
      suffix: '+',
      label: 'Active Members'
    },
    {
      number: '1000',
      suffix: '+',
      label: 'Live Sessions'
    },
    {
      number: '150',
      suffix: '%',
      label: 'Avg. skill rating gain'
    },
    {
      number: '10',
      suffix: '+',
      label: 'Active Mentors'
    }
  ]

  return (
    <section ref={sectionRef} className={`section section--stats ${isVisible ? 'section--stats-visible' : ''}`}>
      <div className="stats-wrapper">
        <div className="stats-content">
          <div className="stats-text">
            <h2 className="stats-heading">
              <span className="brand-purple-highlight italic-emphasis">SkillSeva</span> is for{' '}
              <span className="brand-purple-highlight italic-emphasis">anyone and everyone</span>, who wants{' '}
              <span className="brand-purple-highlight italic-emphasis">real skills not just certificates.</span>
            </h2>
            <p className="stats-subheading">Our community at a glance</p>
          </div>
          <div className="facts-bar">
            {facts.map((fact, index) => (
              <div key={index} className="facts-card">
                <div className="facts-number-wrap">
                  <div className="facts-number">{fact.number}</div>
                  <div className="facts-number-suffix">{fact.suffix}</div>
                </div>
                <p className="facts-label">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

