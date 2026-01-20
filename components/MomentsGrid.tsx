'use client'

import Image from 'next/image'

export default function MomentsGrid() {
    const images = [
        '/events/meetup-1.png',
        '/events/meetup-2.png',
        '/events/online-1.png',
        '/events/online-2.png',
        '/events/meetup-1.png',
        '/events/meetup-2.png'
    ]

    return (
        <section className="w-full py-20 bg-bg-primary">
            <div className="max-w-content mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-brand-accent font-semibold tracking-wider text-xs uppercase mb-4 block">
                        MOMENTS
                    </span>
                    <h2 className="text-[3.5rem] leading-[1.1] font-normal text-text-primary mb-4">
                        Life at <span className="text-brand-accent italic font-instrument">SkillSeva</span>
                    </h2>
                    <p className="text-[1.1rem] leading-[1.6] text-text-secondary max-w-[600px]">
                        Glimpses into our vibrant community of operators, mentors, and learners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden group">
                            <Image
                                src={src}
                                alt={`Life at SkillSeva moment ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
