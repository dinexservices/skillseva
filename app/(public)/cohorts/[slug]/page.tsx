'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ModuleItem } from '@/components/ModuleItem'

interface Module {
    title: string
    content: string
}

interface Mentor {
    name: string
    role: string
    company: string
    image: string
}

interface CohortData {
    _id: string
    title: string
    subtitle: string
    description: string
    duration: string
    format: string
    price: string
    button: string
    link: string
    image: string
    modules: Module[]
    features: string[]
    mentors: Mentor[]
}

export default function CohortDetailPage() {
    const params = useParams()
    const id = params.slug as string
    
    const [cohort, setCohort] = useState<CohortData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (id) {
            fetchCohort()
        }
    }, [id])

    const fetchCohort = async () => {
        try {
            const response = await fetch(`/api/admin/cohorts/${id}`)
            const data = await response.json()

            if (data.success) {
                setCohort(data.data)
            } else {
                setError(true)
            }
            setLoading(false)
        } catch (err) {
            console.error('Failed to fetch cohort:', err)
            setError(true)
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading cohort details...</p>
                </div>
            </div>
        )
    }

    if (error || !cohort) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Cohort Not Found</h1>
                    <p className="text-gray-600 mb-8">The cohort you're looking for doesn't exist.</p>
                    <Link
                        href="/cohorts"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base bg-gradient-to-br from-brand-accent to-brand-accent-highlight text-white hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Back to Cohorts
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-12 items-start">

                {/* Left Column: Content */}
                <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-bold uppercase tracking-wider">
                            {cohort.duration}
                            {cohort.format.includes('Live') && (
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                </span>
                            )}  {cohort.format}
                        </span>
                        <h1 className="text-[clamp(2.5rem,4vw+1rem,3.5rem)] leading-[1.1] font-medium text-text-primary">
                            {cohort.title}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            {cohort.subtitle}
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {cohort.description}
                        </p>
                    </div>

                    {/* Curriculum */}
                    {cohort.modules && cohort.modules.length > 0 && (
                        <div className="rounded-3xl p-0 bg-transparent">
                            <h2 className="text-2xl font-semibold mb-8">Program Curriculum</h2>
                            <div className="space-y-4">
                                {cohort.modules.map((module, idx) => (
                                    <ModuleItem key={idx} module={module} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mentors */}
                    {cohort.mentors && cohort.mentors.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-8">Meet Your Mentors</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {cohort.mentors.map((mentor, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
                                        <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden shrink-0">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
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
                    )}
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:sticky lg:top-32 space-y-6">
                    <div className="p-8 rounded-3xl bg-white border border-black/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-accent to-brand-accent-highlight" />

                        <div className="mb-8">
                            <span className="text-sm text-text-muted font-medium uppercase tracking-wider">Total Program Fee</span>
                            <div className="text-4xl font-bold text-text-primary mt-2">
                                {cohort.price}
                                <span className="text-base font-normal text-text-muted ml-2">/ student</span>
                            </div>
                        </div>

                        {cohort.features && cohort.features.length > 0 && (
                            <div className="space-y-4 mb-8">
                                {cohort.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-brand-accent text-lg mt-0.5">✓</span>
                                        <span className="text-text-secondary">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <Link href={cohort.link} className="block w-full py-4 rounded-full bg-brand-accent text-white font-semibold text-center hover:bg-brand-accent-highlight transition-all shadow-brand hover:shadow-lg hover:-translate-y-0.5">
                            {cohort.button}
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
                        <a href="https://calendly.com/skillsevaofficial/30min" className="text-sm font-semibold text-brand-accent hover:underline">
                            Schedule a Call →
                        </a>
                    </div>
                </div>

            </div>
        </main>
    )
}
