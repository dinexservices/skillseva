import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
    title: 'Job Board | SkillSeva',
    description: 'The SkillSeva Job Board is coming soon. Stay tuned for exclusive opportunities from top operators.',
}

export default function JobsPage() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center py-32 px-5 text-center bg-bg-primary">
            <div className="max-w-[800px] w-full">
                <span className="inline-block px-5 py-2.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent text-sm font-semibold tracking-wider uppercase mb-6">
                    Exclusive Opportunities
                </span>

                <h1 className="text-[clamp(3rem,6vw+1rem,5rem)] leading-[1.05] tracking-tight font-medium text-text-primary m-0">
                    <span className="text-brand-accent font-instrument italic">SkillSeva</span> Job Board
                </h1>

                <p className="text-xl leading-relaxed text-text-secondary mt-6 max-w-[600px] mx-auto">
                    We are building a dedicated platform to connect our top 1% community with roles at India's fastest-growing companies.
                </p>

                <div className="group relative mt-12 p-12 rounded-3xl bg-brand-accent/5 border border-dashed border-brand-accent/20 inline-flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:bg-brand-accent/10 hover:border-brand-accent/30 hover:shadow-lg hover:scale-105 cursor-default">

                    <div className="transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="font-instrument text-[2rem] font-normal text-brand-accent m-0">
                            Coming Soon
                        </h2>
                        <p className="mt-2 text-text-muted">
                            Launching Q1 2026. Stay tuned.
                        </p>
                    </div>

                    {/* Content that is visible by default (to keep height) but fades out */}
                    <div className="opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                        <h2 className="font-instrument text-[2rem] font-normal text-brand-accent m-0">
                            Coming Soon
                        </h2>
                        <p className="mt-2 text-text-muted">
                            Launching Q1 2026. Stay tuned.
                        </p>
                    </div>

                    {/* Button revealed on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link href="/" className="px-8 py-3 rounded-full bg-brand-accent text-white font-semibold hover:bg-brand-accent-highlight transition-colors shadow-brand">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
