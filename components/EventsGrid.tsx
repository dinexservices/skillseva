'use client'

import { useEffect, useState } from 'react'
import EventCard from './EventCard'

interface Event {
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

export default function EventsGrid() {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/admin/events')
            const data = await response.json()
            
            if (data.success) {
                setEvents(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch events:', error)
            setLoading(false)
        }
    }

    return (
        <section className="w-full py-12">
            <div className="max-w-content mx-auto px-4">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
                    </div>
                ) : events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <EventCard key={event._id} {...event} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-bg-secondary/30 rounded-2xl border border-black/5">
                        <p className="text-text-secondary text-lg">No upcoming events scheduled at the moment.</p>
                        <p className="text-text-muted mt-2">Check back soon for updates!</p>
                    </div>
                )}
            </div>
        </section>
    )
}
