'use client'

import Image from 'next/image'

const companies = [
    { name: 'Brand 1', logo: '/companies/2988602e9b010b7ab07768471683cf613a41e74d.png' },
    { name: 'Brand 2', logo: '/companies/3f6266e4e1a5090594f64dd305265cee84a33af8.png' },
    { name: 'Brand 3', logo: '/companies/6b99b5103b5b51aa6f3d3693cdfa5d1e18e3a963.png' },
    { name: 'Brand 4', logo: '/companies/6c6c9c5d3cc5c1c446ffcb50841f12486d6c357e.png' },
    { name: 'Brand 5', logo: '/companies/a2dfa3df02de5ccf098cc6d37b841b0281df7c19.png' },
    { name: 'Brand 6', logo: '/companies/a7682efeddf0c7dd35eaaba0e922b8d1ef908e62.png' },
]

// Duplicating for infinite scroll effect
const marqueeCompanies = [...companies, ...companies, ...companies]

export default function BrandMarquee() {
    return (
        <section className="w-full py-32 md:py-40 overflow-hidden bg-bg-secondary/30 border-y border-black/5">
            <div className="max-w-content mx-auto px-4 mb-20 text-center">
                <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1]  text-text-primary mb-6">
                    Learn from experts working <br />
                    across <span className="text-brand-accent italic font-instrument">50+ brands</span>
                </h2>
                <p className="text-[1.35rem] text-text-secondary max-w-[800px] mx-auto leading-relaxed">
                    Our mentors come from top startups, enterprises, and fast-growing companies,
                    bringing real-world experience, not text book theory
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-gradient">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10"></div>

                <div className="flex animate-scroll gap-6 py-4 w-max">
                    {marqueeCompanies.map((company, idx) => (
                        <div
                            key={`${company.name}-${idx}`}
                            className="flex items-center justify-center min-w-[160px] h-[80px] bg-white rounded-[16px] border border-black/5 shadow-sm px-6 hover:scale-105  transition-all duration-300 group"
                        >
                            <div className="relative w-full h-full  transition-all duration-300 flex items-center justify-center">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
