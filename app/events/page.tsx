import Header from '@/components/Header'
import EventsList from '@/components/EventsList'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Events | SkillSeva',
    description: 'Join upcoming meetups, online classes, and workshops with SkillSeva community.',
}

export default function EventsPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px' }}>
                <EventsList />
            </main>
            <Footer />
        </>
    )
}
