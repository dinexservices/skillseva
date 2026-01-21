'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState } from 'react'

// Dummy Data
const programData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    format: string;
    price: string;
    modules: { title: string; content: string }[];
    features: string[];
    mentors: { name: string; role: string; company: string }[];
}> = {
    'skillseva-consultancy-program': {
        title: 'SkillSeva Consultancy Program',
        subtitle: 'Master the Art of Strategic Problem Solving',
        description: 'A comprehensive 8-week program designed to transform you into a high-impact consultant. Learn frameworks used by MBB (McKinsey, BCG, Bain) and solve real-world business cases.',
        duration: '8 Weeks',
        format: 'Live + Recorded',
        price: '₹24,999',
        modules: [
            { title: 'Module 1: Foundations of Consulting', content: 'Understanding the consulting landscape, key frameworks (MECE, Pyramid Principle), and problem-solving methodologies.' },
            { title: 'Module 2: Data Analysis & Visualization', content: 'Mastering Excel and PowerPoint for Consultants. Storytelling with data and creating high-impact decks.' },
            { title: 'Module 3: Strategic Frameworks', content: 'Deep dive into Porter’s 5 Forces, SWOT, PESTLE, and other strategic tools for market analysis.' },
            { title: 'Module 4: Client Management', content: 'How to manage client expectations, conduct effective meetings, and present recommendations persuasively.' },
            { title: 'Module 5: Capstone Project', content: 'Work on a live business problem with a real client. Apply all your learnings in a high-pressure environment.' },
        ],
        features: [
            'Live Mentorship from Top Consultants',
            'Real-world Capstone Projects',
            '1:1 Career Coaching sessions',
            'Exclusive Community Access',
            'Certification of Completion'
        ],
        mentors: [
            { name: 'Aditya Raj', role: 'Senior Associate', company: 'BCG' },
            { name: 'Sneha Gupta', role: 'Strategy Consultant', company: 'Deloitte' },
        ]
    },
    'skillseva-entrepreneurship-program': {
        title: 'SkillSeva Entrepreneurship Program',
        subtitle: 'Build. Launch. Scale.',
        description: 'An intensive 12-week incubator program for aspiring founders. Take your idea from a napkin sketch to a investable business with guidance from successful entrepreneurs.',
        duration: '12 Weeks',
        format: 'Live Workshops',
        price: '₹34,999',
        modules: [
            { title: 'Phase 1: Ideation & Validation', content: 'Finding problems worth solving. Customer discovery interviews and validating product-market fit.' },
            { title: 'Phase 2: MVP Development', content: 'Building a Minimum Viable Product with no-code tools. Rapid prototyping and user testing.' },
            { title: 'Phase 3: Go-to-Market Strategy', content: 'Acquiring your first 100 customers. Growth hacking, content marketing, and sales funnels.' },
            { title: 'Phase 4: Finance & Legal', content: 'Understanding unit economics, P&L, fundraising basics, and legal structures for startups.' },
            { title: 'Phase 5: Demo Day', content: 'Pitch your startup to a panel of investors and potential co-founders.' },
        ],
        features: [
            'Weekly Office Hours with Founders',
            'Access to No-Code Tool Credits',
            'Pitch Practice Sessions',
            'Networking with VCs',
            'Lifetime Community Membership'
        ],
        mentors: [
            { name: 'Varun Agarwal', role: 'Founder', company: 'TechStart' },
            { name: 'Priya Sharma', role: 'Angel Investor', company: 'VentureCatalysts' },
        ]
    }
}

const ModuleItem = ({ module }: { module: { title: string; content: string } }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-black/10 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-brand-accent/30 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex items-center justify-between bg-white hover:bg-gray-50/50 transition-colors gap-4 cursor-pointer"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-brand-accent">
                    {module.title}
                </h3>
                <span className={`shrink-0 transform transition-transform duration-300 text-brand-accent/80 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                        <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                            {module.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CohortDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const program = programData[slug]

    if (!program) {
        return notFound()
    }

    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-12 items-start">

                {/* Left Column: Content */}
                <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-bold uppercase tracking-wider">
                            {program.duration} • {program.format}
                        </span>
                        <h1 className="text-[clamp(2.5rem,4vw+1rem,3.5rem)] leading-[1.1] font-medium text-text-primary">
                            {program.title}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            {program.subtitle}
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {program.description}
                        </p>
                    </div>

                    {/* Curriculum */}
                    <div className="rounded-3xl p-0 bg-transparent">
                        <h2 className="text-2xl font-semibold mb-8">Program Curriculum</h2>
                        <div className="space-y-4">
                            {program.modules.map((module, idx) => (
                                <ModuleItem key={idx} module={module} />
                            ))}
                        </div>
                    </div>

                    {/* Mentors */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-8">Meet Your Mentors</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {program.mentors.map((mentor, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
                                    <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden shrink-0">
                                        {/* Placeholder for now */}
                                        <div className="w-full h-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xl">
                                            {mentor.name[0]}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-primary">{mentor.name}</h4>
                                        <p className="text-sm text-text-secondary">{mentor.role}</p>
                                        <p className="text-xs text-brand-accent font-medium mt-0.5">{mentor.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:sticky lg:top-32 space-y-6">
                    <div className="p-8 rounded-3xl bg-white border border-black/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-accent to-brand-accent-highlight" />

                        <div className="mb-8">
                            <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Total Program Fee</span>
                            <div className="text-4xl font-bold text-text-primary mt-2">
                                {program.price}
                                <span className="text-base font-normal text-text-muted ml-2">/ student</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {program.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-brand-accent text-lg mt-0.5">✓</span>
                                    <span className="text-text-secondary">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/events/register?title=Cohort%20Application" className="block w-full py-4 rounded-full bg-brand-accent text-white font-semibold text-center hover:bg-brand-accent-highlight transition-all shadow-brand hover:shadow-lg hover:-translate-y-0.5">
                            Apply for Cohort
                        </Link>

                        <p className="text-xs text-center text-text-muted mt-4">
                            Limited seats available for the upcoming batch.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-secondary/50 border border-black/5">
                        <h4 className="font-semibold mb-2">Need help deciding?</h4>
                        <p className="text-sm text-text-secondary mb-4">
                            Book a free 15-minute consultation call with our admission team.
                        </p>
                        <button className="text-sm font-semibold text-brand-accent hover:underline">
                            Schedule a Call →
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}
