'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Programs() {
  const [activeTab, setActiveTab] = useState('On-going')

  const cohorts = [
    {
      title: 'Consultancy Program',
      description: 'Gain expert guidance to solve real-world business challenges',
      image: '/245f22a0a73a11804301eee384478f1aaf0d8407.png',
      link: '/our-cohort/skillseva-consultancy-program',
      alt: 'Consultancy Program'
    },
    {
      title: 'Entrepreneurship Program',
      description: 'Build, launch, and grow your own innovative ventures',
      image: '/245f22a0a73a11804301eee384478f1aaf0d8407.png',
      link: '/our-cohort/skillseva-entrepreneurship-program',
      alt: 'Entrepreneurship Program'
    }
  ]

  const fellowships = [
    {
      title: 'The VC Fellowship',
      description: 'Get insider experience in venture capital',
      image: '/245f22a0a73a11804301eee384478f1aaf0d8407.png',
      link: 'https://www.hirevc.com/',
      alt: 'The VC Fellowship | HireVC',
      external: true
    },
    {
      title: 'VC Analyst Fellowship',
      description: 'Develop analytical skills for startup investments',
      image: '/245f22a0a73a11804301eee384478f1aaf0d8407.png',
      link: 'https://www.hirevc.com/vc-analyst-program',
      alt: 'VC Analyst Fellowship',
      external: true
    }
  ]

  return (
    <section id="programs" className="section section--programs">
      <div className="v3_padding-global">
        <div className="v3_container">
          <div className="h_program-wrapper">
            <div className="h_program_text-wrapper">
              <h2 className="v3_heading_h2" aria-label="Your Industry, Your Path">
                Choose Your Industry <span className="brand-purple-highlight italic-emphasis">Define Your Path</span>
              </h2>
              <div className="h_program_paragraph-wrapper">
                <p className="v3_paragraph_medium">
                  Whether you want a job, freelance clients, or build your own startup, SkillSeva helps you get there.
                </p>
              </div>
            </div>

            <div className="h_program_tab-wrapper">
              <div className="h_program_tabs">
                <div className="h_program_tabs_menu" role="tablist">
                  <button
                    className={`h_program_tabs_link ${activeTab === 'On-going' ? 'w--current' : ''}`}
                    onClick={() => setActiveTab('On-going')}
                    role="tab"
                    aria-selected={activeTab === 'On-going'}
                  >
                    <div>On going cohort</div>
                  </button>
                  <button
                    className={`h_program_tabs_link ${activeTab === 'Upcoming' ? 'w--current' : ''}`}
                    onClick={() => setActiveTab('Upcoming')}
                    role="tab"
                    aria-selected={activeTab === 'Upcoming'}
                  >
                    <div>Upcoming cohort</div>
                  </button>
                </div>

                <div className="h_program_tabs_content">
                  {activeTab === 'On-going' && (
                    <div className="h_program_list">
                      {cohorts.map((program, index) => (
                        <div key={index} className="h_program_item">
                          <div className="h_program_card">
                            <div className="h_program_card_image-wrapper">
                              <Image
                                src={program.image}
                                alt={program.alt}
                                width={800}
                                height={600}
                                className="h_program_card_image"
                                unoptimized
                              />
                            </div>
                            <div className="h_program_card_info">
                              <div className="h_program_card_text-wrapper">
                                <h3 className="v3_heading_h4 color-black">{program.title}</h3>
                                <p className="v3_paragraph_small">{program.description}</p>
                              </div>
                              <div className="h_program_card_btn-wrapper">
                                <Link href={program.link} className="v3_btn main w-button">
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
                    <div className="h_program_list">
                      {fellowships.map((program, index) => (
                        <div key={index} className="h_program_item">
                          <div className="h_program_card">
                            <div className="h_program_card_image-wrapper">
                              <Image
                                src={program.image}
                                alt={program.alt}
                                width={800}
                                height={600}
                                className="h_program_card_image"
                                unoptimized
                              />
                            </div>
                            <div className="h_program_card_info">
                              <div className="h_program_card_text-wrapper">
                                <h3 className="v3_heading_h4 color-black">{program.title}</h3>
                                <p className="v3_paragraph_small">{program.description}</p>
                              </div>
                              <div className="h_program_card_btn-wrapper">
                                <Link
                                  href={program.link}
                                  className="v3_btn main w-button"
                                  target={program.external ? '_blank' : undefined}
                                  rel={program.external ? 'noopener noreferrer' : undefined}
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
