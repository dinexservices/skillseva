'use client'

import { useEffect, useState } from 'react'

interface Media {
    _id: string
    title: string
    videoId: string
    description: string
}

interface MediaPageProps {
    setActiveVideo: (url: string | null) => void
}

export default function MediaGrid() {
    const [videos, setVideos] = useState<Media[]>([])
    const [loading, setLoading] = useState(true)
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    useEffect(() => {
        fetchMedia()
    }, [])

    const fetchMedia = async () => {
        try {
            const response = await fetch('/api/admin/media')
            const data = await response.json()
            
            if (data.success) {
                setVideos(data.data)
            }
            setLoading(false)
        } catch (error) {
            console.error('Failed to fetch media:', error)
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
            </div>
        )
    }

    return { videos, activeVideo, setActiveVideo }
}
