'use client'

import EventCard from './EventCard'

const events = [
    {
        category: 'MEETUP',
        title: 'SkillSeva Offline Meetup: Delhi',
        date: '31 jan, 2026',
        location: 'goSTOPS Delhi, Delhi Gate, Daryaganj,  Delhi, 110002',
        image: '/events/meetup-1.png',
        type: 'In-person',
        link: 'https://forms.gle/nKVoZbJp5pzpRqwo8',
        embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdGoAQs6ihLfBtfwc8RQOJDuB8ejQFbD4QmKyGbsJEFAiE_0w/viewform?embedded=true',
        description: "We're planning an offline meetup in Delhi NCR, along with interactive sessions, community networking, and an experience full of surprises. Limited slots available - fill the form to stay updated and get priority access!"
    },
      {
        category: 'WORKSHOP',
        title: 'Podcast Editing Workshop (3 Hours)',
        date: '01 Feb, 2026',
        location: 'Online',
        image: '/events/podcast-workshop.png',
        type: 'Online',
        description: `Podcast Editing Workshop (3 Hours)
Learn to Edit Podcasts Efficiently — Even If You’re a Beginner

Editing is where a podcast truly comes to life.
This 3-hour intensive podcast editing workshop is designed specifically for beginners who want to learn how to edit podcasts quickly, cleanly, and professionally—without feeling overwhelmed.

By the end of this workshop, you’ll understand the complete podcast editing workflow and be able to edit episodes confidently on your own.

No prior editing experience required.

What We’ll Cover in This 3-Hour Workshop

🎧 Podcast Editing Basics
• What podcast editing really involves
• Understanding raw audio and common issues
• Editing mindset: speed vs quality

🛠️ Tools & Software (Beginner-Friendly)
• Overview of simple, free & paid editing tools
• Setting up your editing workspace correctly
• Keyboard shortcuts & workflow hacks for faster editing

✂️ Step-by-Step Editing Workflow
• Removing mistakes, silences, and filler words
• Cleaning background noise and improving voice clarity
• Balancing audio levels for a professional sound

🎵 Enhancing Your Podcast
• Adding intro, outro, and background music
• Smooth cuts and transitions
• Maintaining natural flow while editing

⚡ Editing Efficiently (Speed Matters!)
• How to edit faster without compromising quality
• Common beginner mistakes that waste time
• Proven techniques to cut editing time by hours

📦 Final Export & Best Practices
• Exporting settings for podcast platforms
• File formats, loudness basics, and quality checks
• Ready-to-publish checklist

Why This Workshop?
• 100% beginner-friendly
• Practical, hands-on learning
• Clear, step-by-step editing system
• Learn everything in just 3 hours
• Perfect for students, creators, and aspiring podcast editors

Who Should Attend?
• Beginners who want to learn podcast editing
• Students exploring content creation
• Creators who want to save editing time
• Anyone interested in becoming a podcast editor or freelancer`,
        paymentLink: 'https://rzp.io/rzp/rmMu5kg' // Placeholder for payment link
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

export default function EventsGrid() {
    return (
        <section className="w-full py-12">
            <div className="max-w-content mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>

                {events.length === 0 && (
                    <div className="text-center py-20 bg-bg-secondary/30 rounded-2xl border border-black/5">
                        <p className="text-text-secondary text-lg">No upcoming events scheduled at the moment.</p>
                        <p className="text-text-muted mt-2">Check back soon for updates!</p>
                    </div>
                )}
            </div>
        </section>
    )
}
