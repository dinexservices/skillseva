'use client'

import Image from 'next/image'

const events = [
    {
        category: 'MEETUP',
        title: 'Founders Networking Dinner: Mumbai Chapter',
        date: 'Jan 28, 2026 • 7:00 PM',
        location: 'Lower Parel, Mumbai',
        image: '/events/meetup-1.png',
        type: 'In-person'
    },
    {
        category: 'MASTERCLASS',
        title: 'High-Growth Product Management Masterclass',
        date: 'Feb 05, 2026 • 11:00 AM',
        location: 'Online Zoom',
        image: '/events/online-1.png',
        type: 'Online'
    },
    {
        category: 'COMMUNITY',
        title: 'Operator Mixers: Networking for the Top 1%',
        date: 'Feb 12, 2026 • 6:30 PM',
        location: 'Indiranagar, Bangalore',
        image: '/events/meetup-2.png',
        type: 'In-person'
    },
    {
        category: 'WEBINAR',
        title: 'Interactive Group Coaching with Industry Leaders',
        date: 'Feb 20, 2026 • 8:00 PM',
        location: 'Online Zoom',
        image: '/events/online-2.png',
        type: 'Online'
    }
]

export default function EventsList() {
    return (
        <section className="section section--events">
            <div className="section__heading">
                <span className="section__eyebrow">Upcoming Events</span>
                <h2 style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontWeight: 500,
                    fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    margin: 0
                }}>
                    Meetups, Classes & <span className="brand-purple-highlight italic-emphasis">Workshops</span>
                </h2>
                <p>Join our exclusive community events designed for high-trust networking and skill growth.</p>
            </div>

            <div className="h_blog_list" style={{
                marginTop: '3.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
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
                            <button
                                className="site-header__cta"
                                style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', padding: '0.75rem' }}
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section__heading" style={{ marginTop: '8rem' }}>
                <span className="section__eyebrow">Moments</span>
                <h2 style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontWeight: 500,
                    fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    margin: 0
                }}>
                    Life at <span className="brand-purple-highlight italic-emphasis">SkillSeva</span>
                </h2>
                <p>Glimpses into our vibrant community of operators, mentors, and learners.</p>
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
        </section>
    )
}
