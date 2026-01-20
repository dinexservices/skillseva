import EventsGrid from '@/components/EventsGrid'
import MomentsGrid from '@/components/MomentsGrid'

export const metadata = {
    title: 'Events | SkillSeva',
    description: 'Join upcoming meetups, online classes, and workshops with SkillSeva community.',
}

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-bg-primary pt-[100px]">
            {/* Hero Section */}
            <section className="w-full py-20 pb-0 bg-bg-primary relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="max-w-content mx-auto px-4 text-center relative z-10">
                    <span className="text-[#A3A3A3] font-medium tracking-[0.2em] text-sm uppercase mb-6 block">
                        UPCOMING EVENTS
                    </span>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-normal text-text-primary mb-6">
                        Meetups, Classes & <br className="hidden md:block" />
                        <span className="text-brand-accent italic font-instrument">Workshops</span>
                    </h1>
                    <p className="text-lg md:text-[1.1rem] text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                        Join our exclusive community events designed for high-trust networking and skill growth.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <EventsGrid />

            {/* Moments Grid */}
            <MomentsGrid />
        </main>
    )
}
