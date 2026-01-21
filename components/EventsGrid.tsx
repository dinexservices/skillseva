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
