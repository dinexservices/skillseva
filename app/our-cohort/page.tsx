'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function OurCohortPage() {
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
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-content mx-auto px-4 md:px-8">
                <div className="grid gap-16">
                    {/* Header Section */}
                    <div className="grid gap-6 max-w-[1200px] text-center mx-auto justify-items-center">
                        <h1 className="text-[clamp(2.5rem,4vw+1rem,4rem)] leading-[1.1] font-normal m-0 text-text-primary max-w-[1200px] w-full">
                            Our <span className="text-brand-accent italic">Cohorts</span>
                        </h1>
                        <div className="mt-2 max-w-[748px] w-full">
                            <p className="text-[1.1rem] leading-[1.6] text-text-secondary m-0">
                                Join our expert-led programs designed to accelerate your career and entrepreneurial journey.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="grid gap-8">
                            <div className="flex justify-start gap-8 flex-wrap md:flex-nowrap" role="tablist">
                                <button
                                    className={`bg-transparent border-0 border-b-2 py-3 px-1 text-base font-medium cursor-pointer transition-colors ${activeTab === 'On-going' ? 'text-text-primary border-brand-accent' : 'text-text-muted border-transparent hover:text-text-primary'}`}
                                    onClick={() => setActiveTab('On-going')}
                                    role="tab"
                                    aria-selected={activeTab === 'On-going'}
                                >
                                    <div>Ongoing cohort</div>
                                </button>
                                <button
                                    className={`bg-transparent border-0 border-b-2 py-3 px-1 text-base font-medium cursor-pointer transition-colors ${activeTab === 'Upcoming' ? 'text-text-primary border-brand-accent' : 'text-text-muted border-transparent hover:text-text-primary'}`}
                                    onClick={() => setActiveTab('Upcoming')}
                                    role="tab"
                                    aria-selected={activeTab === 'Upcoming'}
                                >
                                    <div>Upcoming cohort</div>
                                </button>
                            </div>

                            <div className="mt-8">
                                {activeTab === 'On-going' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                        {cohorts.map((program, index) => (
                                            <div key={index} className="w-full relative h-full">
                                                <div className="grid gap-6 p-6 bg-white border border-black/10 rounded-2xl transition-all duration-200 hover:-translate-y-1 relative z-0 h-full content-between shadow-sm">
                                                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#f5f7ff]/5">
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                        {fellowships.map((program, index) => (
                                            <div key={index} className="w-full relative h-full">
                                                <div className="grid gap-6 p-6 bg-white border border-black/10 rounded-2xl transition-all duration-200 hover:-translate-y-1 relative z-0 h-full content-between shadow-sm">
                                                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#f5f7ff]/5">
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
                                                                className="inline-flex items-center justify-center w-full md:w-auto p-[0.85rem_1.75rem] rounded-full font-semibold text-base no-underline transition-all duration-200 border-none cursor-pointer bg-gradient-to-br from-brand-accent to-brand-accent-highlight text-white shadow-none hover:-translate-y-0.5"
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
        </main>
    )
}
