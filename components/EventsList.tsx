'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Event {
    category: string
    title: string
    date: string
    location: string
    image: string
    type: string
    link?: string
    embedUrl?: string
    description?: string
}

const events: Event[] = [
    {
        category: 'MEETUP',
        title: 'SkillSeva Offline Meetup: Delhi NCR',
        date: 'Coming Soon',
        location: 'Delhi NCR',
        image: '/events/meetup-1.png',
        type: 'In-person',
        link: 'https://forms.gle/nKVoZbJp5pzpRqwo8',
        embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdGoAQs6ihLfBtfwc8RQOJDuB8ejQFbD4QmKyGbsJEFAiE_0w/viewform?embedded=true',
        description: "We're planning an offline meetup in Delhi NCR, along with interactive sessions, community networking, and an experience full of surprises. Limited slots available - fill the form to stay updated and get priority access!"
    },
    {
        category: 'MEETUP',
        title: 'SkillSeva Offline Meetup: Gurgaon',
        date: 'February 2026',
        location: 'Gurgaon',
        image: '/events/meetup-2.png',
        type: 'In-person',
        description: "Join us for an exclusive offline meetup in Gurgaon. Network with top operators, share insights, and build meaningful connections in the heart of the corporate hub."
    }
]

export default function EventsList() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    const openModal = (event: Event) => {
        setSelectedEvent(event)
    }

    const closeModal = () => {
        setSelectedEvent(null)
    }

    return (
        <>
            {/* Modal */}
            {selectedEvent && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0, 0, 0, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10
                            }}
                        >
                            ×
                        </button>

                        {/* Event Details */}
                        <div style={{ padding: '2rem' }}>
                            <span className="h_blog_card_category" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>
                                {selectedEvent.category}
                            </span>
                            <h2 style={{
                                fontSize: '2rem',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                fontFamily: '"Instrument Serif", serif'
                            }}>
                                {selectedEvent.title}
                            </h2>

                            <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📅</span> {selectedEvent.date}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📍</span> {selectedEvent.location}
                                </div>
                            </div>

                            {selectedEvent.description && (
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    marginBottom: '2rem',
                                    color: '#333'
                                }}>
                                    {selectedEvent.description}
                                </p>
                            )}

                            {/* Embedded Google Form */}
                            {selectedEvent.embedUrl && (
                                <div style={{ marginTop: '2rem' }}>
                                    <iframe
                                        src={selectedEvent.embedUrl}
                                        width="100%"
                                        height="800"
                                        frameBorder="0"
                                        marginHeight={0}
                                        marginWidth={0}
                                        style={{ border: 'none', borderRadius: '10px' }}
                                    >
                                        Loading…
                                    </iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <section className="section section--events" style={{ justifyItems: 'center' }}>
                <div className="v3_padding-global">
                    <div className="v3_container">
                        <div className="section__heading" style={{ textAlign: 'center', margin: '0 auto' }}>
                            <span className="section__eyebrow" style={{ display: 'block', textAlign: 'center' }}>Upcoming Events</span>
                            <h2 style={{
                                fontWeight: 500,
                                fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.01em',
                                margin: 0,
                                textAlign: 'center'
                            }}>
                                Meetups, Classes & <span className="brand-purple-highlight italic-emphasis">Workshops</span>
                            </h2>
                            <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-secondary)', textAlign: 'center' }}>Join our exclusive community events designed for high-trust networking and skill growth.</p>
                        </div>

                        <div className="h_blog_list" style={{
                            marginTop: '3.5rem',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '2.5rem'
                        }}>
                            {events.map((event, index) => (
                                <div key={index} className="h_blog_card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                                    <div className="h_blog_card_image-wrapper" style={{ height: '220px' }}>
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="h_blog_card_image"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="h_blog_card_content" style={{ padding: '1.5rem' }}>
                                        <span className="h_blog_card_category" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>{event.category}</span>
                                        <h3 className="h_blog_card_title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>{event.title}</h3>
                                        <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                                                <span style={{ fontSize: '1rem' }}>📅</span> {event.date}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '1rem' }}>📍</span> {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h_blog_card_footer" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '1.25rem 1.5rem' }}>
                                        {event.embedUrl ? (
                                            <a
                                                href={`/events/register?title=${encodeURIComponent(event.title)}&date=${encodeURIComponent(event.date)}&location=${encodeURIComponent(event.location)}&description=${encodeURIComponent(event.description || '')}&embedUrl=${encodeURIComponent(event.embedUrl)}&category=${encodeURIComponent(event.category)}`}
                                                className="site-header__cta"
                                                style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '0.9rem',
                                                    padding: '0.75rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                <span style={{ fontSize: '1.2rem' }}>ℹ️</span>
                                                View Details & Register
                                            </a>
                                        ) : event.link ? (
                                            <a
                                                href={event.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="site-header__cta"
                                                style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '0.9rem',
                                                    padding: '0.75rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                Register Now
                                            </a>
                                        ) : (
                                            <button
                                                className="site-header__cta"
                                                disabled
                                                style={{
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '0.9rem',
                                                    padding: '0.75rem',
                                                    opacity: 0.6,
                                                    cursor: 'not-allowed',
                                                    background: '#ccc',
                                                    borderColor: '#ccc',
                                                    color: '#666'
                                                }}
                                            >
                                                Form Coming Soon
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="section__heading" style={{ marginTop: '8rem', textAlign: 'center', margin: '8rem auto 0' }}>
                            <span className="section__eyebrow" style={{ display: 'block', textAlign: 'center' }}>Moments</span>
                            <h2 style={{
                                fontWeight: 500,
                                fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.01em',
                                margin: 0,
                                textAlign: 'center'
                            }}>
                                Life at <span className="brand-purple-highlight italic-emphasis">SkillSeva</span>
                            </h2>
                            <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-secondary)', textAlign: 'center' }}>Glimpses into our vibrant community of operators, mentors, and learners.</p>
                        </div>

                        <div className="gallery-grid" style={{
                            marginTop: '3.5rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5rem'
                        }}>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/meetup-1.png" alt="Gallery 1" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/meetup-2.png" alt="Gallery 2" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/online-1.png" alt="Gallery 3" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/online-2.png" alt="Gallery 4" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/meetup-1.png" alt="Gallery 5" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="gallery-item" style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
                                <Image src="/events/meetup-2.png" alt="Gallery 6" fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
