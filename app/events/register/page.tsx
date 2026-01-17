'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function RegisterContent() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title') || 'Event Registration'
    const date = searchParams.get('date') || ''
    const location = searchParams.get('location') || ''
    const description = searchParams.get('description') || ''
    const embedUrl = searchParams.get('embedUrl') || ''
    const category = searchParams.get('category') || ''

    return (
        <>
            <Header />
            <main style={{ paddingTop: '2rem' }}>
                <div className="section" style={{ maxWidth: '1200px' }}>
                    {/* Event Header */}
                    <div style={{
                        padding: '3rem 2rem',
                        borderRadius: 'var(--radius-lg)',
                        background: 'linear-gradient(135deg, rgba(89, 39, 157, 0.08), rgba(255, 255, 255, 0.95))',
                        border: '1px solid rgba(89, 39, 157, 0.15)',
                        backdropFilter: 'blur(18px)'
                    }}>
                        {category && (
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: 'var(--brand-accent)',
                                padding: '0.6rem 1.25rem',
                                border: '1px solid rgba(89, 39, 157, 0.2)',
                                borderRadius: '999px',
                                background: 'rgba(89, 39, 157, 0.04)',
                                marginBottom: '1.5rem'
                            }}>
                                {category}
                            </span>
                        )}
                        <h1 style={{
                            fontSize: 'clamp(2rem, 3.8vw + 1rem, 3.2rem)',
                            lineHeight: '1.1',
                            fontWeight: '500',
                            letterSpacing: '-0.02em',
                            margin: '0 0 1.5rem 0',
                            color: 'var(--text-primary)'
                        }}>
                            {title}
                        </h1>
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            flexWrap: 'wrap',
                            fontSize: '1.05rem',
                            color: 'var(--text-secondary)'
                        }}>
                            {date && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>📅</span>
                                    <span>{date}</span>
                                </div>
                            )}
                            {location && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>📍</span>
                                    <span>{location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Description Section */}
                    {description && (
                        <div style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            background: 'rgba(255, 255, 255, 0.82)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            backdropFilter: 'blur(18px)',
                            borderLeft: '4px solid var(--brand-accent)'
                        }}>
                            <h2 style={{
                                fontSize: '1.35rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                margin: '0 0 1rem 0'
                            }}>
                                About This Event
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.6',
                                color: 'var(--text-secondary)',
                                margin: 0
                            }}>
                                {description}
                            </p>
                        </div>
                    )}

                    {/* Registration Form */}
                    {embedUrl ? (
                        <div style={{
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(18px)'
                        }}>
                            <div style={{
                                padding: '1.5rem 2rem',
                                background: 'linear-gradient(115deg, #59279D, #7c4fd6)',
                                color: 'white'
                            }}>
                                <h2 style={{
                                    fontSize: '1.6rem',
                                    fontWeight: '600',
                                    margin: 0
                                }}>
                                    Registration Form
                                </h2>
                            </div>
                            <div style={{ padding: '0.5rem' }}>
                                <iframe
                                    src={embedUrl}
                                    width="100%"
                                    height="1200"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    style={{ border: 'none', display: 'block' }}
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            color: 'var(--text-muted)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            background: 'rgba(255, 255, 255, 0.82)'
                        }}>
                            <p style={{ margin: 0, fontSize: '1.05rem' }}>No registration form available for this event.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    fontWeight: '500'
                }}>
                    Loading...
                </div>
            </div>
        }>
            <RegisterContent />
        </Suspense>
    )
}
