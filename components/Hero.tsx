'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import FloatingIcons from './FloatingIcons'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className={`max-w-content mx-auto px-4 pt-48 pb-20 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-600 ease-out relative ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
      id="home"
    >
      {/* Background Gradients from Bottom */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-brand-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-accent-highlight/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[0%] right-[-10%] w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <FloatingIcons />
      <div className="grid gap-6 relative z-10 w-full">
        <p className="text-sm font-semibold tracking-[0.05em] uppercase text-brand-accent px-5 py-2.5 border border-brand-accent/20 rounded-full bg-brand-accent-soft inline-block mx-auto mb-4 w-fit">
          BUILD SKILLS THAT PAY
        </p>
        <h1 className="text-[clamp(2rem,3.8vw+1rem,3.6rem)] leading-[1.1] font-medium tracking-[-0.02em] m-0 mx-auto">
          Learn directly from industry professionals <br /> and turn your <span className="text-brand-accent italic">skills into real income.</span>
        </h1>
        <p className="text-[1.1rem] leading-[1.6] text-text-secondary max-w-[800px] mx-auto">
          SkillSeva is a cohort-based learning platform designed to help students <br /> and early professionals learn practical, job-ready skills through real <br /> projects, mentorship, and community.
        </p>
        <div className="flex gap-5 justify-center mt-4">
          <Link className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-base border-none cursor-pointer transition-all duration-200 bg-gradient-to-br from-brand-accent to-brand-accent-highlight text-white shadow-[0_18px_45px_rgba(89,39,157,0.2)] hover:-translate-y-0.5 hover:shadow-[0_25px_60px_rgba(89,39,157,0.3)]" href="#programs">Explore our programs</Link>
          <button className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-base cursor-pointer transition-all duration-200 bg-transparent text-text-secondary border border-black/12 hover:text-text-primary hover:border-black/25 hover:bg-black/5" type="button">Book a Call</button>
        </div>
        <dl className="flex flex-row gap-6 justify-center mt-8 w-full items-center md:items-stretch">
          <div className="flex-1 w-full max-w-[320px] md:max-w-[240px] p-7 rounded-[20px] border border-brand-accent/12 bg-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-white/90">
            <dt className="text-[2.25rem] font-medium leading-none text-brand-accent">1000+</dt>
            <dd className="m-0 mt-2 text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-text-secondary">Learners Trained</dd>
          </div>
          <div className="flex-1 w-full max-w-[320px] md:max-w-[240px] p-7 rounded-[20px] border border-brand-accent/12 bg-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-white/90">
            <dt className="text-[2.25rem] font-medium leading-none text-brand-accent">5000+</dt>
            <dd className="m-0 mt-2 text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-text-secondary">Hours of Live Learning</dd>
          </div>
          <div className="flex-1 w-full max-w-[320px] md:max-w-[240px] p-7 rounded-[20px] border border-brand-accent/12 bg-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-white/90">
            <dt className="text-[2.25rem] font-medium leading-none text-brand-accent">7</dt>
            <dd className="m-0 mt-2 text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-text-secondary">Active Cohorts Running</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

