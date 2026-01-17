'use client'

export default function EventRegistration() {
    return (
        <section className="section section--event-registration" style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '4rem 1.5rem',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span className="section__eyebrow" style={{
                    color: '#FFD700',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em'
                }}>
                    Special Opportunity
                </span>

                <h2 style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontWeight: 500,
                    fontSize: 'clamp(2rem, 3vw + 1rem, 3.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    marginBottom: '1.5rem',
                    color: '#fff'
                }}>
                    We’re bringing you an <span className="italic-emphasis" style={{ color: '#FFD700' }}>exciting opportunity</span> you won’t want to miss!
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '2rem'
                }}>
                    If you’re interested in learning, networking, and being part of something exciting, please fill out this short form.
                </p>

                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    marginBottom: '2.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <p style={{
                        marginTop: 0,
                        marginBottom: '1rem',
                        fontSize: '1.1rem'
                    }}>
                        📍 We’re planning an <strong style={{ color: '#FFD700' }}>offline meetup in Delhi NCR</strong>, along with interactive sessions, community networking, and an experience full of surprises.
                    </p>
                    <p style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                        Limited slots available - fill the form to stay updated and get priority access!
                    </p>
                </div>

                <a
                    href="https://forms.gle/nKVoZbJp5pzpRqwo8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-header__cta"
                    style={{
                        display: 'inline-block',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '1rem 2rem',
                        backgroundColor: '#FFD700',
                        color: '#000',
                        fontWeight: 600,
                        borderRadius: '100px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                    }}
                >
                    Register Now
                </a>

                <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    Let’s learn, connect, and grow together with SkillSeva!
                </p>
            </div>
        </section>
    )
}
