'use client'

import Link from 'next/link' // Add Link import
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function RegisterContent() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title') || 'Event Registration'
    const date = searchParams.get('date') || ''
    const location = searchParams.get('location') || ''
    const description = searchParams.get('description') || ''
    const embedUrl = searchParams.get('embedUrl') || ''
    const category = searchParams.get('category') || ''
    const paymentLink = searchParams.get('paymentLink') || ''

    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Event Header */}
                <div className="relative overflow-hidden rounded-3xl bg-secondary/30 border border-brand-accent/10 p-8 md:p-12 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        {category && (
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                                {category}
                            </span>
                        )}
                        <h1 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.15] font-medium tracking-tight text-text-primary mb-4">
                            {title}
                        </h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-text-secondary text-base">
                            {date && (
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">🗓️</span>
                                    <span>{date}</span>
                                </div>
                            )}
                            {location && (
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">📍</span>
                                    <span>{location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                {description && (
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 p-6 md:p-8 border-l-4 border-l-brand-accent">
                        <h2 className="text-xl font-semibold text-text-primary mb-3">
                            About This Event
                        </h2>
                        <p className="text-base leading-relaxed text-text-secondary whitespace-pre-wrap">
                            {description}
                        </p>
                    </div>
                )}

                {/* Registration Form */}
                {embedUrl ? (
                    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight p-5 md:p-6 text-white">
                            <h2 className="text-xl font-semibold m-0">
                                Registration Form
                            </h2>
                        </div>
                        <div className="p-1 bg-white">
                            <iframe
                                src={embedUrl}
                                className="w-full min-h-[1200px] border-none block"
                                title="Registration Form"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ) : paymentLink ? (
                    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm p-8 md:p-12 text-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-text-primary mb-2">Ready to Join?</h2>
                            <p className="text-text-secondary">Secure your spot for this workshop now.</p>
                        </div>

                        <Link
                            href={paymentLink}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-medium text-lg hover:bg-brand-accent/90 transition-all duration-200 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-1"
                        >
                            Register & Pay Now
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                ) : (
                    <div className="text-center py-20 px-4 bg-secondary/30 rounded-3xl border border-black/5">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 text-3xl mb-4">
                            📝
                        </div>
                        <p className="text-base text-text-secondary font-medium">No registration form available for this event.</p>
                        <p className="text-text-muted mt-2 text-sm">Please check back later or contact us for more information.</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-brand-accent border-t-transparent animate-spin" />
                    <span className="text-text-secondary font-medium">Loading event details...</span>
                </div>
            </div>
        }>
            <RegisterContent />
        </Suspense>
    )
}
