'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      videoUrl: 'https://drive.google.com/file/d/1KPdQVDswI7ksnQQvU4cRUzApsDH-ruqR/preview',
      alt: 'Student Testimonial Video 1',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1FKTRv-bhki3spsf5Hu0SZIl2IEmHjxqN/preview',
      alt: 'Student Testimonial Video 2',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1PzsOPGuJ3phNdEN_D6WjI2KHsIFd4exu/preview',
      alt: 'Student Testimonial Video 3',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1GPu0kkkiv4uSk2OXot6f0QdRYP7KgFys/preview',
      alt: 'Student Testimonial Video 4',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1J-ZH2q0lro0lC5WaQxd6VEa1oFdOfeZ0/preview',
      alt: 'Student Testimonial Video 5',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1_4MDPm1j5vBowZAijljZ1BA7PTilvrsj/preview',
      alt: 'Student Testimonial Video 6',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1Mm23SnnEnSqOm5otROdKWL_nyIl9IoOM/preview',
      alt: 'Student Testimonial Video 7',
    },
    {
      videoUrl: 'https://drive.google.com/file/d/1yOtlRmR4S6wbFrUoCdSMysA1EeKRqyAu/preview',
      alt: 'Student Testimonial Video 8',
    }
  ]

  return (
    <section className="section bg-color-light-green h_testimonial-full-width">
      <div className="v3_padding-global padding-top">
        <div className="v3_container">
          <div className="h_testimonial-wrapper">
            <div className="h_testimonial_text-wrapper">
              <h2 className="v3_heading_h2">What Our <span className="brand-purple-highlight italic-emphasis">Students Say</span></h2>
              <p className="v3_paragraph_medium">We'll help you, choose the right path based on your goals, background , and interests.</p>
            </div>
            <div className="h_testimonial_grid">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="h_testimonial_video-wrapper"
                >
                  <iframe
                    src={testimonial.videoUrl}
                    width="100%"
                    height="315"
                    allow="autoplay"
                    allowFullScreen
                    title={testimonial.alt}
                    className="h_testimonial-video_embed"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

