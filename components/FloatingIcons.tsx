'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const figmaIcon = '/icons/figma.png'
const reactIcon = '/icons/react.webp'
const nodeIcon = '/icons/node.png'
const aiIcon = '/icons/ai.png'
const videoIcon = '/icons/video.webp'
const jsIcon = '/icons/js.webp'
const photoshopIcon = '/icons/photo.png'
const uxIcon = '/icons/ux.webp'

const icons = [
    {
        name: 'JavaScript',
        src: jsIcon,
        top: '15%',
        left: '25%',
        delay: '0s',
        size: 90,
    },
    {
        name: 'Node.js',
        src: nodeIcon,
        top: '85%',
        left: '90%',
        delay: '2s',
        size: 100,
    },
    {
        name: 'Figma',
        src: figmaIcon,
        top: '55%',
        left: '22%',
        delay: '1s',
        size: 120,
    },
    {
        name: 'Video',
        src: videoIcon,
        top: '65%',
        left: '75%',
        delay: '3s',
        size: 95,
    },
    {
        name: 'React',
        src: reactIcon,
        top: '10%',
        left: '60%',
        delay: '4s',
        size: 110,
    },
    {
        name: 'Photoshop',
        src: photoshopIcon,
        top: '85%',
        left: '5%',
        delay: '1.5s',
        size: 90,
    },
    {
        name: 'UI/UX',
        src: uxIcon,
        top: '40%',
        left: '88%',
        delay: '2.5s',
        size: 105,
    },
    {
        name: 'AI',
        src: aiIcon,
        top: '38%',
        left: '0%',
        delay: '0.5s',
        size: 95,
    },
]

export default function FloatingIcons() {
    const [mounted, setMounted] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        handleResize()

        window.addEventListener('resize', handleResize)

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {icons.map((icon, index) => {
                const depth = (index % 3) + 1 // varied depth for parallax
                const scale = isMobile ? 0.6 : 1
                const currentSize = icon.size * scale

                return (
                    <div
                        key={index}
                        className="absolute animate-float"
                        style={{
                            top: icon.top,
                            left: icon.left,
                            width: currentSize,
                            height: currentSize,
                            animationDelay: icon.delay,
                            transform: `translate(${mousePos.x * 20 * depth}px, ${mousePos.y * 20 * depth}px)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    >
                        <Image
                            src={icon.src}
                            alt={icon.name}
                            width={icon.size}
                            height={icon.size}
                            className="w-full h-full object-contain opacity-60"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                )
            })}
        </div>
    )
}
