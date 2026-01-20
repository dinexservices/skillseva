'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-black/8 py-24 bg-white/85 backdrop-blur-[20px]">
      <div className="px-4 md:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid gap-12">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16 items-start">
              <div className="max-w-[200px]">
                <Link href="/" className="block transition-opacity hover:opacity-80">
                  <Image
                    src="/SkillSeva Logo_3 (1).png"
                    alt="SkillSeva logo"
                    width={500}
                    height={150}
                    className="w-full h-auto object-contain"
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </Link>
              </div>

              <div className="grid gap-4">
                <div className="text-[0.8rem] font-semibold text-text-muted uppercase tracking-[0.05em] mb-2">Get In Touch</div>
                <a href="tel:+919821964864" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>
                    <span className="font-medium text-text-primary mr-1">Phone:</span> +91-9821964864
                  </div>
                </a>
                <a href="mailto:contact@skillseva.com" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>
                    <span className="font-medium text-text-primary mr-1">Email:</span> contact@skillseva.com
                  </div>
                </a>
              </div>

              <div className="grid gap-3">
                <Link href="/" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>Home</div>
                </Link>
                <Link href="/#programs" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>Programs</div>
                </Link>
                <Link href="/events" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>Events</div>
                </Link>
                <Link href="/jobs" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>Job Board</div>
                </Link>
                <Link href="/#community" className="text-[0.95rem] text-text-secondary transition-colors hover:text-brand-accent decoration-0">
                  <div>Community</div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/8">
              <div className="text-[0.85rem] text-text-muted text-center md:text-left">
                <div className="footer_copyright-text">
                  <p className="m-0">© 2025 SKILL SEVA. All rights reserved.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 transition-all hover:bg-black/10 hover:-translate-y-0.5"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd4478d32b6ad764df156_twitter%20icon.svg"
                    alt="X / Twitter"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60 transition-opacity hover:opacity-100"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 transition-all hover:bg-black/10 hover:-translate-y-0.5"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd44504be145f4e0065a1_linkedin%20icon.svg"
                    alt="Linkedin"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60 transition-opacity hover:opacity-100"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 transition-all hover:bg-black/10 hover:-translate-y-0.5"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd445ee1b984e7f715e7b_instagram%20icon.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60 transition-opacity hover:opacity-100"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 transition-all hover:bg-black/10 hover:-translate-y-0.5"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd4458f7306afd386b212_facebook%20icon.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60 transition-opacity hover:opacity-100"
                    unoptimized
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
