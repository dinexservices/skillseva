'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Programs() {
  const [activeTab, setActiveTab] = useState('Cohorts')

  const cohorts = [
    {
      title: 'Consultancy Program',
      description: 'Gain expert guidance to solve real-world business challenges',
      image: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68a6b05d8c34c7b23f05d467_Himanshu%20Dubey.webp',
      link: '/our-cohort/metvy-consultancy-program',
      alt: 'Consultancy Program'
    },
    {
      title: 'Entrepreneurship Program',
      description: 'Build, launch, and grow your own innovative ventures',
      image: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68a6b0747f375c3f3c51ac5c_Sanskar%20Sinha.webp',
      link: '/our-cohort/metvy-entrepreneurship-program',
      alt: 'Entrepreneurship Program'
    },
    {
      title: 'Data Analytics Program',
      description: 'Master data tools to drive smarter decisions',
      image: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/68a6b738b7f5b9bcb24c1839_Ankit.webp',
      link: '/our-cohort/metvy-data-analytics-program',
      alt: 'Data Analytics Program'
    },
    {
      title: 'Financial Analyst Program',
      description: 'Build strong financial foundations for lasting business success',
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/68d16008ed4628b79eef66b1_mfap.webp',
      link: '/financial-analyst-program',
      alt: 'Metvy Financial Analyst Fellowship'
    }
  ]

  const fellowships = [
    {
      title: 'The VC Fellowship',
      description: 'Get insider experience in venture capital',
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/689cd65276dd6f7e6ec3935e_HVC.webp',
      link: 'https://www.hirevc.com/',
      alt: 'The VC Fellowship | HireVC',
      external: true
    },
    {
      title: 'VC Analyst Fellowship',
      description: 'Develop analytical skills for startup investments',
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/689cd652b5bf200810b5765d_VCA.webp',
      link: 'https://www.hirevc.com/vc-analyst-program',
      alt: 'VC Analyst Fellowship',
      external: true
    },
    {
      title: 'CMO Fellowship',
      description: 'Lead impactful marketing strategies and campaigns',
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/689cd652c0190fd6ba92b3b7_CMO.webp',
      link: 'https://www.cmofellowship.com/',
      alt: 'CMO Fellowship',
      external: true
    },
    {
      title: 'FOF Fellowship',
      description: 'Explore fund-of-funds investment strategies',
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/689cd652da8403c00218d8cf_FOF.webp',
      link: 'https://www.foundersofficefellowship.com/',
      alt: 'Founders Office Fellowship',
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
                Your Industry, Your Path
              </h2>
              <div className="h_program_paragraph-wrapper">
                <p className="v3_paragraph_medium">
                  Explore our live and exclusive community-based learning programs, expertly designed to empower you at every pivotal stage of your professional journey
                </p>
              </div>
            </div>
            
            <div className="h_program_tab-wrapper">
              <div className="h_program_tabs">
                <div className="h_program_tabs_menu" role="tablist">
                  <button
                    className={`h_program_tabs_link ${activeTab === 'Cohorts' ? 'w--current' : ''}`}
                    onClick={() => setActiveTab('Cohorts')}
                    role="tab"
                    aria-selected={activeTab === 'Cohorts'}
                  >
                    <div>Cohorts</div>
                  </button>
                  <button
                    className={`h_program_tabs_link ${activeTab === 'Fellowship' ? 'w--current' : ''}`}
                    onClick={() => setActiveTab('Fellowship')}
                    role="tab"
                    aria-selected={activeTab === 'Fellowship'}
                  >
                    <div>Fellowship</div>
                  </button>
                </div>
                
                <div className="h_program_tabs_content">
                  {activeTab === 'Cohorts' && (
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
                  
                  {activeTab === 'Fellowship' && (
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
            
            <div className="h_quiz-wrapper">
              <div className="h_quiz_text-wrapper">
                <h2 className="v3_heading_h2 center-align">Not sure what you are interested in ?</h2>
                <p className="v3_paragraph_medium center-align">
                  Discover the perfect program for your goals. Whether you're exploring new skills or refining existing ones, we'll help you choose a path that aligns with your ambitions and sets you up for success
                </p>
              </div>
              <Link
                href="https://form.typeform.com/to/LeUdy7sm"
                target="_blank"
                rel="noopener noreferrer"
                className="v3_btn main w-button"
              >
                Take a quiz
              </Link>
              <Image
                src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/6895ca1cde02cdd46bb7b433_lines.svg"
                alt=""
                width={200}
                height={200}
                className="h_quiz_bg-image"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
