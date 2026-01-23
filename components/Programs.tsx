'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Programs() {
  const [activeTab, setActiveTab] = useState('On-going')

const ongoing = [  
    {
      title: 'UI/UX Design Cohort',
      description: 'Master Design Thinking & User Experience with our comprehensive 12-week program.',
        image: '/shaily.png',
    
      link: '/cohorts/skillseva-ui-ux-design-cohort',
      alt: 'UI/UX Design Cohort'
    }
  ]

   const upcoming= [  {
      title: 'MERN Stack Cohort',
      description: 'Master Full Stack Development with Web Fundamentals, JavaScript, and MERN stack.',
      image: '/fullstack.png',
      link: '/cohorts/skillseva-mern-stack-cohort',
      alt: 'MERN Stack Cohort'
    }]


  return (
    <section id="programs" className="max-w-content mx-auto px-4 grid gap-12 py-20">
      <div className="px-4 md:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid gap-16 p-0">
            <div className="grid gap-6 max-w-[1200px] text-center mx-auto justify-items-center">
              <h2 className="text-[clamp(2rem,3.5vw+1rem,3.5rem)] leading-[1.1] font-normal m-0 text-text-primary max-w-[1200px] w-full" aria-label="Your Industry, Your Path">
                Choose Your Industry <span className="text-brand-accent italic">Define Your Path</span>
              </h2>
              <div className="mt-2 max-w-[748px] w-full">
                <p className="text-[1 rem] leading-[1.6] text-text-secondary m-0">
                  Whether you want a job, freelance clients, or build your own startup, SkillSeva helps you get there.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="grid gap-8">
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap border-b border-[#f5f7ff]/10 pb-4">
                  <div className='flex gap-4'>
                    <button
                      className={`bg-transparent py-3 px-6 text-base font-medium cursor-pointer transition-colors border-0 border-b-2 mb-[-2px] ${activeTab === 'On-going' ? 'text-text-primary border-brand-accent' : 'text-text-muted border-transparent hover:text-text-primary'}`}
                      onClick={() => setActiveTab('On-going')}
                      role="tab"
                      aria-selected={activeTab === 'On-going'}
                    >
                      <div>Ongoing cohort</div>
                    </button>
                    <button
                      className={`bg-transparent py-3 px-6 text-base font-medium cursor-pointer transition-colors border-0 border-b-2 mb-[-2px] ${activeTab === 'Upcoming' ? 'text-text-primary border-brand-accent' : 'text-text-muted border-transparent hover:text-text-primary'}`}
                      onClick={() => setActiveTab('Upcoming')}
                      role="tab"
                      aria-selected={activeTab === 'Upcoming'}
                    >
                      <div>Upcoming cohort</div>
                    </button>
                  </div>
                  <Link
                    href="/cohorts"
                    className="text-base font-medium text-brand-accent hover:text-brand-accent-highlight transition-colors py-1 px-1 flex items-center gap-1"
                  >
                    View All
                    <span className="text-lg">→</span>
                  </Link>
                </div>

                <div className="mt-8">
                  {activeTab === 'On-going' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative border border-[#f5f7ff]/10">
                      {ongoing.map((program, index) => (
                        <div key={index} className="w-full relative h-full">
                          <div className="grid gap-6 p-6 bg-white/80 border-2 border-black/12 rounded-2xl transition-all duration-200 hover:-translate-y-1 relative z-0 h-full content-between">
                            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#f5f7ff]/5">
                              <Image
                                src={program.image}
                                alt={program.alt}
                                width={800}
                                height={600}
                                className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
                                unoptimized
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                              <div className="grid gap-2 flex-1 w-full">
                                <h3 className="text-[1.8rem] leading-[1.2] font-normal m-0 text-text-primary font-serif">{program.title}</h3>
                                <p className="text-[0.95rem] leading-[1.5] text-text-secondary m-0">{program.description}</p>
                              </div>
                              <div className="shrink-0 w-full md:w-auto">
                                <Link href={program.link} className="inline-flex items-center justify-center w-full md:w-auto p-[0.85rem_1.75rem] rounded-full font-semibold text-base no-underline transition-all duration-200 border-none cursor-pointer bg-gradient-to-br from-brand-accent to-brand-accent-highlight text-white shadow-none hover:-translate-y-0.5">
                                  View programs
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'Upcoming' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative border border-[#f5f7ff]/10">
                      {upcoming.map((program, index) => (
                        <div key={index} className="w-full relative h-full">
                          <div className="grid gap-6 p-6 bg-white/80 border-2 border-black/12 rounded-2xl transition-all duration-200 hover:-translate-y-1 relative z-0 h-full content-between">
                            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#f5f7ff]/5">
                              <Image
                                src={program.image}
                                alt={program.alt}
                                width={800}
                                height={600}
                                className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
                                unoptimized
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                              <div className="grid gap-2 flex-1 w-full">
                                <h3 className="text-[1.8rem] leading-[1.2] font-normal m-0 text-text-primary font-serif">{program.title}</h3>
                                <p className="text-[0.95rem] leading-[1.5] text-text-secondary m-0">{program.description}</p>
                              </div>
                              <div className="shrink-0 w-full md:w-auto">
                                <Link
                                  href={program.link}
                                  className="inline-flex items-center justify-center w-full md:w-auto p-[0.85rem_1.75rem] rounded-full font-semibold text-base no-underline transition-all duration-200 border-none cursor-pointer bg-gradient-to-br from-[#59279D] to-[#7c4fd6] text-white shadow-none hover:-translate-y-0.5"
                          
                      
                                >
                                  View programs
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
