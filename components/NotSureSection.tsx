'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotSureSection() {
    return (
        <section className="w-full max-w-content mx-auto px-4 py-20 md:py-32">
            <div className="relative w-full overflow-hidden rounded-[32px] bg-brand-accent/3 border border-brand-accent/10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 max-w-[600px] flex flex-col items-start gap-8 flex-1">
                    <div className="space-y-6">
                        <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] font-instrument text-text-primary">
                            Not sure what you are interested in ?
                        </h2>
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            Discover the perfect program for your goals. Whether you're exploring new skills or refining existing ones, we'll help you choose a path that aligns with your ambitions and sets you up for success
                        </p>
                    </div>

                    <Link
                        href="https://form.typeform.com/to/LeUdy7sm"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-accent text-white font-medium text-lg hover:bg-brand-accent-highlight transition-all hover:scale-105 shadow-md shadow-brand-accent/20"
                    >
                        Take a quiz
                    </Link>
                </div>

                {/* 3D Image */}
                <div className="relative w-[280px] md:w-[450px] aspect-square shrink-0 z-10 mt-8 md:mt-0">
                    <Image
                        src="/3d.webp"
                        alt="3D Illustration"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

          
            </div>
        </section>
    )
}
