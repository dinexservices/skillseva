'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/686f3983a161407a651fa4d3_Harshil-video-frame.webp',
      videoUrl: 'https://player.vimeo.com/video/1100187944?badge=0',
      alt: 'Harshil MCP Testimonial Video',
      name: 'Harshil',
      program: 'Consulting Program'
    },
    {
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/686f398392099160ad7bb1b8_Shreya-video-frame.webp',
      videoUrl: 'https://player.vimeo.com/video/1100188152?badge=0',
      alt: 'Shreya Shinde MEP Testimonial Video',
      name: 'Shreya Shinde',
      program: 'Entrepreneurship Program'
    },
    {
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/686f3983f31b166633b61169_Chirag-video-frame.webp',
      videoUrl: 'https://player.vimeo.com/video/1100187555?badge=0',
      alt: 'Chirag MDAP Testimonial Video',
      name: 'Chirag',
      program: 'Data Analytics'
    },
    {
      image: 'https://cdn.prod.website-files.com/63b304c11504f900a6192a63/686f30f0b9b6299e39d4ee1c_video-frame-1.webp',
      videoUrl: 'https://player.vimeo.com/video/1100187577?badge=0',
      alt: 'Dhwani MFP Testimonial Video',
      name: 'Dhwani',
      program: 'Financial Program'
    }
  ]

  return (
    <section className="section bg-color-light-green h_testimonial-full-width">
      <div className="v3_padding-global padding-top">
        <div className="v3_container">
          <div className="h_testimonial-wrapper">
            <div className="h_testimonial_text-wrapper">
              <h2 className="v3_heading_h2">Our Student testimonial</h2>
              <p className="v3_paragraph_medium">Hear from learners who transformed their careers through our immersive cohorts</p>
            </div>
            <div className="h_testimonial_grid">
              {testimonials.map((testimonial, index) => (
                <Link
                  key={index}
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h_testimonial_lightbox"
                  aria-label={`open ${testimonial.alt}`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    width={560}
                    height={560}
                    className="h_testimonial-video_cover"
                    unoptimized
                  />
                  <div className="h_testimonial_overlay">
                    <button className="h_testimonial_btn" type="button">
                      <Image
                        src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/687a765f5909137f52edf8b0_view.svg"
                        alt="Play"
                        width={20}
                        height={20}
                        className="play-icon-image"
                        unoptimized
                      />
                      View Testimonial
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

