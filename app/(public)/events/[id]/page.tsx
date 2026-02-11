'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface EventData {
    _id: string
    category: string
    title: string
    date: string
    location: string
    image: string
    type: 'In-person' | 'Online'
    description: string
    link?: string
    embedUrl?: string
    paymentLink?: string
}

export default function EventDetailPage() {
    const params = useParams()
    const id = params.id as string
    
    const [event, setEvent] = useState<EventData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (id) {
            fetchEvent()
        }
    }, [id])

    const fetchEvent = async () => {
        try {
            const response = await fetch(`/api/admin/events/${id}`)
            const data = await response.json()

            if (data.success) {
                setEvent(data.data)
            } else {
                setError(true)
            }
            setLoading(false)
        } catch (err) {
            console.error('Failed to fetch event:', err)
            setError(true)
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-brand-accent border-t-transparent animate-spin" />
                    <span className="text-text-secondary font-medium">Loading event details...</span>
                </div>
            </div>
        )
    }

    if (error || !event) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Not Found</h1>
                    <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
                    <Link
                        href="/events"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base bg-gradient-to-br from-brand-accent to-brand-accent-highlight text-white hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Back to Events
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Event Header */}
                <div className="relative overflow-hidden rounded-3xl bg-secondary/30 border border-brand-accent/10 p-8 md:p-12 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                            {event.category}
                        </span>
                        <h1 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.15] font-medium tracking-tight text-text-primary mb-4">
                            {event.title}
                        </h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-text-secondary text-base">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">🗓️</span>
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg">📍</span>
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Description Section */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/5 p-6 md:p-8 border-l-4 border-l-brand-accent">
                    <h2 className="text-xl font-semibold text-text-primary mb-3">
                        About This Event
                    </h2>
                    <p className="text-base leading-relaxed text-text-secondary whitespace-pre-wrap">
                        {event.description}
                    </p>
                </div>

                {/* Registration Form */}
                {event.embedUrl ? (
                    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
                        <div className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight p-5 md:p-6 text-white">
                            <h2 className="text-xl font-semibold m-0">
                                Registration Form
                            </h2>
                        </div>
                        <div className="p-1 bg-white">
                            <iframe
                                src={event.embedUrl}
                                className="w-full min-h-[1200px] border-none block"
                                title="Registration Form"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ) : event.paymentLink ? (
                    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm p-8 md:p-12 text-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-text-primary mb-2">Ready to Join?</h2>
                            <p className="text-text-secondary">Secure your spot for this event now.</p>
                        </div>

                        <Link
                            href={event.paymentLink}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-medium text-lg hover:bg-brand-accent/90 transition-all duration-200 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-1"
                        >
                            Register & Pay Now
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                ) : event.link ? (
                    <div className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm p-8 md:p-12 text-center">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-text-primary mb-2">Register for This Event</h2>
                            <p className="text-text-secondary">Click below to register</p>
                        </div>

                        <Link
                            href={event.link}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-medium text-lg hover:bg-brand-accent/90 transition-all duration-200 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-1"
                        >
                            Register Now
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
