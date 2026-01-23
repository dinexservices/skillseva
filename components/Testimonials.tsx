'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import VideoModal from './VideoModal'

const testimonialImage = "/Testimonial.png"

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  const testimonials = [
    {
      videoUrl: 'https://youtube.com/embed/tLkjJ_tIJQY',
      youtubeId: 'tLkjJ_tIJQY',
      alt: 'Student Testimonial Video 1',

    },
    {
      videoUrl: 'https://youtube.com/embed/r3gYh9T3iP0',
      youtubeId: 'r3gYh9T3iP0',
      // videoUrl: 'https://drive.google.com/file/d/1FKTRv-bhki3spsf5Hu0SZIl2IEmHjxqN/preview',
      alt: 'Student Testimonial Video 2',
      image: testimonialImage,
    },
    {
      videoUrl: 'https://youtube.com/embed/vmPcUlwrPog',
      youtubeId: 'vmPcUlwrPog',
      // videoUrl: 'https://drive.google.com/file/d/1PzsOPGuJ3phNdEN_D6WjI2KHsIFd4exu/preview',
      alt: 'Student Testimonial Video 3',

    },
    {
      videoUrl: 'https://youtube.com/embed/UtDtwdU_h0I',
      youtubeId: 'UtDtwdU_h0I',
      // videoUrl: 'https://drive.google.com/file/d/1GPu0kkkiv4uSk2OXot6f0QdRYP7KgFys/preview',
      alt: 'Student Testimonial Video 4',

    },
    {
      videoUrl: 'https://youtube.com/embed/GxwhzDcHJe0',
      youtubeId: 'GxwhzDcHJe0',
      // videoUrl: 'https://drive.google.com/file/d/1J-ZH2q0lro0lC5WaQxd6VEa1oFdOfeZ0/preview',
      alt: 'Student Testimonial Video 5',

    },
    {
      videoUrl: 'https://youtube.com/embed/c5WAKQBkuL4',
      youtubeId: 'c5WAKQBkuL4',
      // videoUrl: 'https://drive.google.com/file/d/1_4MDPm1j5vBowZAijljZ1BA7PTilvrsj/preview',
      alt: 'Student Testimonial Video 6',

    },
    {
      videoUrl: 'https://youtube.com/embed/54rxe0n6cng',
      youtubeId: '54rxe0n6cng',
      // videoUrl: 'https://drive.google.com/file/d/1Mm23SnnEnSqOm5otROdKWL_nyIl9IoOM/preview',
      alt: 'Student Testimonial Video 7',

    },
    {
      videoUrl: 'https://youtube.com/embed/-18EA__j2wQ',
      youtubeId: '-18EA__j2wQ',
      // videoUrl: 'https://drive.google.com/file/d/1yOtlRmR4S6wbFrUoCdSMysA1EeKRqyAu/preview',
      alt: 'Student Testimonial Video 8',

    }
  ]



  return (
    <>
      <section className="w-full relative py-20 bg-[#F3F5F9]">
        <div className="max-w-content mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] md:text-[3.5rem] leading-[1.1] font-normal m-0 text-text-primary mb-4 text-balance">
              What Our <span className="text-brand-accent italic font-instrument">Students Say</span>
            </h2>
            <p className="text-[1.05rem] leading-[1.6] text-text-secondary max-w-[600px] m-0">
              We'll help you, choose the right path based on your goals, background, and interests.
            </p>
          </div>

          <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-12">
            {/* Left Button - Hidden on mobile, visible on md+ */}
            <button
              onClick={() => scroll('left')}
              className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-100/50 text-brand-accent hover:scale-110 transition-all focus:outline-none cursor-pointer ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Button - Hidden on mobile, visible on md+ */}
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-100/50 text-brand-accent hover:scale-110 transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-8 w-full overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4"
            >
              {testimonials.map((testimonial, index) => {
                const youtubeId = testimonial.youtubeId;
                const thumbnailSrc = youtubeId
                  ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                  : testimonial.image || testimonialImage;

                return (
                  <div
                    key={index}
                    className="relative flex-none w-[280px] aspect-[9/16] snap-center cursor-pointer group transition-transform duration-300 hover:-translate-y-2"
                    onClick={() => setActiveVideo(testimonial.videoUrl)}
                  >
                    {/* Main Card Shape */}
                    <div className="absolute inset-0 bg-[#59279D] rounded-[24px] overflow-hidden">

                      {/* Thumbnail Image */}
                      <img
                        src={thumbnailSrc}
                        alt={testimonial.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay for better text/icon visibility */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                          <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>


                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoUrl={activeVideo || ''}
      />
    </>
  )
}
