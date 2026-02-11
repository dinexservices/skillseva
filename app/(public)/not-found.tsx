'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            background: 'linear-gradient(115deg, #59279D, #7c4fd6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            404
          </h1>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            margin: '0 0 1rem 0',
            color: '#111827'
          }}>
            Page Not Found
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#4b5563',
            margin: '0 0 2rem 0',
            lineHeight: '1.6'
          }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderRadius: '999px',
              padding: '0.85rem 1.75rem',
              fontWeight: 600,
              fontSize: '1rem',
              background: 'linear-gradient(115deg, #59279D, #7c4fd6)',
              color: '#ffffff',
              boxShadow: '0 18px 45px rgba(89, 39, 157, 0.2)',
              textDecoration: 'none',
              transition: 'transform 200ms ease, box-shadow 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(89, 39, 157, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(89, 39, 157, 0.2)'
            }}
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}



