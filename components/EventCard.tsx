'use client'

import Image from 'next/image'
import Link from 'next/link'

interface EventProps {
    title: string
    date: string
    location: string
    category: string
    image: string
    link?: string
    embedUrl?: string
    description?: string
    paymentLink?: string
}

export default function EventCard({ title, date, location, category, image, link, embedUrl, description, paymentLink }: EventProps) {

    return (
        <div className="group relative bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-secondary">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#F3F0FF] text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                        {category}
                    </span>

                    <h3 className="text-[1.75rem] font-instrument text-text-primary leading-[1.1] mb-6 group-hover:text-brand-accent transition-colors">
                        {title}
                    </h3>

                    <div className="grid gap-2 text-[0.95rem] text-text-secondary">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🗓️</span> {date}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xl">📍</span> {location}
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-black/5">
                    {embedUrl || paymentLink ? (
                        <Link
                            href={`/events/register?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&location=${encodeURIComponent(location)}&description=${encodeURIComponent(description || '')}&embedUrl=${encodeURIComponent(embedUrl || '')}&category=${encodeURIComponent(category)}&paymentLink=${encodeURIComponent(paymentLink || '')}`}
                            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#F5F5F5] text-text-primary font-medium hover:bg-brand-accent hover:text-white transition-all duration-200 group/btn"
                        >
                            View Details & Register
                        </Link>
                    ) : link ? (
                        <Link
                            href={link}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#F5F5F5] text-text-primary font-medium hover:bg-brand-accent hover:text-white transition-all duration-200 group/btn"
                        >
                            Register Now
                        </Link>
                    ) : (
                        <button disabled className="w-full py-3.5 rounded-full bg-[#E5E5E5] text-[#999] font-medium cursor-not-allowed">
                            Coming Soon
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
