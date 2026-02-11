'use client'

import { useEffect, useState } from 'react'

interface Moment {
    _id: string
    image: string
    alt: string
}

export default function MomentsGrid() {
    const [moments, setMoments] = useState<Moment[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMoments()
    }, [])

    const fetchMoments = async () => {
        try {
            const response = await fetch('/api/admin/moments')
            const data = await response.json()
            
            if (data.success) {
                setMoments(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch moments:', error)
            setLoading(false)
        }
    }

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

                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
                    </div>
                ) : moments.length > 0 ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                        {moments.map((moment) => (
                            <div key={moment._id} className="break-inside-avoid relative w-full rounded-[24px] overflow-hidden group">
                                <img
                                    src={moment.image}
                                    alt={moment.alt}
                                    className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                        <p className="text-gray-500">No moments available yet.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
