'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Quiz() {
    return (
        <section className="max-w-content mx-auto px-4 py-24">
            <div className="px-4 md:px-8">
                <div className="max-w-content mx-auto">
                    <div className="p-12 rounded-[28px] bg-brand-accent/[0.03] border border-brand-accent/10 text-left flex flex-col items-start relative overflow-hidden">
                        <div className="grid gap-4 mb-4 relative z-10">
                            <h2 className="text-[clamp(2rem,3.5vw+1rem,3.5rem)] leading-[1.1] font-normal m-0 text-text-primary font-serif">Not sure what you are interested in ?</h2>
                            <p className="text-[1.05rem] leading-[1.6] text-text-secondary m-0 text-left">
                                Discover the perfect program for your goals. Whether you're exploring new skills or refining existing ones, we'll help you choose a path that aligns with your ambitions and sets you up for success
                            </p>
                        </div>
                        <Link
                            href="https://form.typeform.com/to/LeUdy7sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-[0.85rem_1.75rem] rounded-full font-semibold text-base no-underline transition-all duration-200 border-none cursor-pointer bg-gradient-to-br from-[#59279D] to-[#7c4fd6] text-white shadow-none hover:-translate-y-0.5 z-10"
                        >
                            Take a quiz
                        </Link>
                        <Image
                            src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/6895ca1cde02cdd46bb7b433_lines.svg"
                            alt=""
                            width={200}
                            height={200}
                            className="absolute bottom-0 right-0 opacity-10 pointer-events-none z-0"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
