import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Job Board | SkillSeva',
    description: 'The SkillSeva Job Board is coming soon. Stay tuned for exclusive opportunities from top operators.',
}

export default function JobsPage() {
    return (
        <>
       
            <main style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 20px 80px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px' }}>
                    <span className="section__eyebrow" style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.25rem',
                        border: '1px solid rgba(89, 39, 157, 0.2)',
                        borderRadius: '999px',
                        background: 'rgba(89, 39, 157, 0.04)',
                        color: 'var(--brand-accent)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem'
                    }}>
                        Exclusive Opportunities
                    </span>

                    <h1 style={{
                        fontWeight: 500,
                        fontSize: 'clamp(3rem, 6vw + 1rem, 5rem)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                        margin: 0,
                        color: 'var(--text-primary)'
                    }}>
                        <span className="brand-purple-highlight italic-emphasis">SkillSeva</span> Job Board
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        marginTop: '1.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        We are building a dedicated platform to connect our top 1% community with roles at India's fastest-growing companies.
                    </p>

                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        borderRadius: '24px',
                        background: 'rgba(89, 39, 157, 0.03)',
                        border: '1px dashed rgba(89, 39, 157, 0.2)',
                        display: 'inline-block'
                    }}>
                        <h2 style={{
                            fontFamily: '"Instrument Serif", serif',
                            fontSize: '2rem',
                            fontWeight: 400,
                            margin: 0,
                            color: 'var(--brand-accent)'
                        }}>
                            Coming Soon
                        </h2>
                        <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>
                            Launching Q1 2026. Stay tuned.
                        </p>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <a href="/" className="site-header__cta" style={{ textDecoration: 'none' }}>
                            Back to Home
                        </a>
                    </div>
                </div>
            </main>
  
        </>
    )
}
