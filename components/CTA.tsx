'use client'

export default function CTA() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    console.log('Email submitted:', email)
    // Add your form submission logic here
  }

  return (
    <section className="section section--cta" id="apply">
      <div className="cta-card">
        <h2>Ready to design your next leap?</h2>
        <p>Tell us where you are headed. We'll pair you with the program, mentor, and learning squad that fits your ambition.</p>
        <form className="cta-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="cta-email">Email address</label>
          <input id="cta-email" type="email" name="email" placeholder="you@example.com" required />
          <button type="submit">Join the waitlist</button>
        </form>
        <p className="cta-note">No spam. Just high-signal program drops and community invites.</p>
      </div>
    </section>
  )
}


