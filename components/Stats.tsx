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
    <section ref={sectionRef} className={`max-w-content mx-auto px-4 py-32 opacity-0 translate-y-10 transition-all duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <div className="w-full flex flex-col items-center">
        <div className="grid gap-8 text-center w-full max-w-[900px]">
          <div className="w-full mx-auto grid gap-4">
            <h2 className="text-[2.75rem] md:text-[3.5rem] leading-[1.1] font-normal text-text-primary">
              <span className="text-brand-accent italic font-instrument">SkillSeva</span> is for{' '}
              <span className="text-brand-accent italic font-instrument">anyone and everyone</span>, who wants{' '}
              <span className="text-brand-accent italic font-instrument">real skills not just certificates.</span>
            </h2>
            <p className="text-[0.95rem] text-text-secondary m-0 tracking-tight">Our community at a glance</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {facts.map((fact, index) => (
              <div key={index} className="p-8 pb-10 rounded-[12px] bg-white border border-black/10 hover:border-brand-accent/30 transition-all duration-300 flex flex-col items-start gap-1 shadow-sm">
                <div className="flex items-center gap-0.5">
                  <div className="text-[2.75rem] font-medium text-brand-accent tracking-tight">{fact.number}</div>
                  <div className="text-[2.25rem] font-medium text-brand-accent mb-1.5">{fact.suffix}</div>
                </div>
                <p className="text-[0.9rem] text-text-secondary font-normal tracking-wide">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

