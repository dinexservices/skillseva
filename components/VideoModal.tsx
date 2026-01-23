'use client'

import { useEffect, useState } from 'react'

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoUrl: string
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    const [show, setShow] = useState(false)

    // Handle animation state separately to allow for exit animations if needed,
    // or just to sync with generic isOpen prop.
    useEffect(() => {
        if (isOpen) {
            setShow(true)
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden' // Ensure scroll is disabled on html too
        } else {
            setShow(false)
            document.body.style.overflow = 'unset'
            document.documentElement.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
            document.documentElement.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={handleBackdropClick}
        >
            <div className={`relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 ${show ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                <button
                    className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-md cursor-pointer"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative w-full aspect-video bg-black">
                    <iframe
                  width="100%"
                  height="100%"
                  src={`${videoUrl}?autoplay=1`}
                  title="YouTube video player"
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                    {/* <iframe
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    /> */}
                </div>
            </div>
        </div>
    )
}
