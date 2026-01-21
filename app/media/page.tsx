'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import VideoModal from '@/components/VideoModal'

export default function BlogPage() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    const videos = [
        {
            id: 1,
            title: 'How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month?',
            videoId: 'JmLnowJattQ',
            description: 'In this episode, we talk with Shaily Goel, a skilled UX/UI designer, who shares her journey to earning ₹2 Lakh per month! Tune in for career insights and design inspiration.'
        },
        {
            id: 2,
            title: 'Will AI replace DESIGN JOBS in 2026 ft. Shreshth Kapoor | @osiflow-sessions⁩',
            videoId: '2GmQB8lILFk',
            description: 'How designers actually get hired, the truth about internships vs freelancing, whether AI will replace UI/UX designers, and the skills students must focus on to stand out in interviews and real client work.'
        },
        {
            id: 3,
            title: 'How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month? #6 The Rohit Prashar Show!',
            videoId: 'WBI5atoH4Oo',
            description: 'In this episode, we talk with Shaily Goel, a skilled UX/UI designer, who shares her journey to earning ₹2 Lakh per month! '
        },
        { 
            id: 4,
            title: 'UX/UI Designers Can Earn ₹2 Lakh Per Month With These Proven Secrets',
            videoId: 'htefwB-QVbc',
            description: 'In this episode, we talk with Shaily Goel, a skilled UX/UI designer, who shares her journey to earning ₹2 Lakh per month!'
        }
    ]

    return (
        <>
            <main className="w-full bg-bg-primary pt-24 min-h-screen">
                <section className="w-full py-16 md:py-20 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                    <div className="max-w-content mx-auto px-4 relative z-10">
                        <div className="grid gap-4 max-w-[1200px] text-center mx-auto mb-16">
                            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-normal m-0 text-text-primary text-balance">
                                SkillSeva <span className="text-brand-accent italic">Media</span>
                            </h1>
                            <p className="text-[1.1rem] text-text-secondary max-w-[800px] mx-auto text-balance">
                                Watch expert sessions, tutorials, and career advice directly from our mentors and community.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video) => (
                                <article
                                    key={video.id}
                                    className="bg-white rounded-[24px] border border-black/8 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
                                    onClick={() => setActiveVideo(`https://www.youtube.com/embed/${video.videoId}`)}
                                >
                                    <div className="w-full aspect-video bg-black relative overflow-hidden">
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                            alt={video.title}
                                            fill
                                            className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 transition-transform duration-300 group-hover:scale-110">
                                                <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3 flex-1">
                                        <h3 className="text-[1.25rem] leading-[1.3] font-semibold text-text-primary group-hover:text-brand-accent transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-[0.85rem] text-text-secondary leading-relaxed">
                                            {video.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo || ''}
            />
        </>
    )
}
