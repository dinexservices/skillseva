'use client';

import { useState } from 'react';
import WhatsAppModal from './WhatsAppModal';

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section section--community" id="community">
      <div className="community__intro">
        <p className="section__eyebrow">Community</p>
        <h2>Learn inside a <span className="brand-purple-highlight italic-emphasis">high-trust operator network</span></h2>
        <p>From curated masterminds to alumni circles across Bengaluru, Mumbai, and Delhi, SkillSeva is where career-long relationships begin.</p>
      </div>
      <div className="community__grid">
        <article className="community-card">
          <h3>1:1 mentorship</h3>
          <p>Pair with mentors who have "done the work" in hypergrowth startups, global enterprises, and VC-backed ventures.</p>
        </article>
        <article className="community-card">
          <h3>Accountability pods</h3>
          <p>Stay on track with small, coach-led pods that turn insights into weekly career sprints.</p>
        </article>
        <article className="community-card">
          <h3>Industry labs</h3>
          <p>Drop into deep dives on AI, fintech, healthtech, and consumer brands with the operators building their future.</p>
        </article>
        <article
          className="community-card community-card--whatsapp"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="whatsapp-card__icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#25D366" />
              <path d="M24 12C17.373 12 12 17.373 12 24C12 26.168 12.535 28.205 13.5 29.978V36L19.523 33C21.295 33.965 23.332 34.5 25.5 34.5C32.127 34.5 37.5 29.127 37.5 22.5C37.5 15.873 32.127 10.5 25.5 10.5H24V12Z" fill="white" />
              <path d="M19.5 28.5L21.375 22.5L16.5 21L31.5 13.5L24 28.5H19.5Z" fill="#25D366" />
            </svg>
          </div>
          <h3>Join WhatsApp Community</h3>
          <p>Connect with peers, get exclusive updates, and accelerate your career growth together.</p>
          <span className="whatsapp-card__cta">Join Now →</span>
        </article>
      </div>

      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}




