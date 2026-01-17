'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="section section_footer">
      <div className="v3_padding-global">
        <div className="v3_container">
          <div className="footer-wrapper">
            <div className="footer_grid">
              <div className="footer-brand">
                <Link href="/" className="footer-brand_link">
                  <Image
                    src="/SkillSeva Logo_3 (1).png"
                    alt="SkillSeva logo"
                    width={500}
                    height={150}
                    className="footer_logo"
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </Link>
              </div>

              <div className="footer_links-wrap">
                <div className="footer_link-header">Get In Touch</div>
                <a href="tel:+919821964864" className="footer_link-text">
                  <div>
                    <span className="footer_medium-weight-span">Phone:</span> +91-9821964864
                  </div>
                </a>
                <a href="mailto:contact@skillseva.com" className="footer_link-text">
                  <div>
                    <span className="footer_medium-weight-span">Email:</span> contact@skillseva.com
                  </div>
                </a>
              </div>

              <div className="footer_links-wrap">
                <Link href="/" className="footer_link-text">
                  <div>Home</div>
                </Link>
                <Link href="/#programs" className="footer_link-text">
                  <div>Programs</div>
                </Link>
                <Link href="/events" className="footer_link-text">
                  <div>Events</div>
                </Link>
                <Link href="/jobs" className="footer_link-text">
                  <div>Job Board</div>
                </Link>
                <Link href="/#community" className="footer_link-text">
                  <div>Community</div>
                </Link>
              </div>


            </div>

            <div className="footer-end-bar">
              <div className="footer_copyright-wrapper">
                <div className="footer_copyright-text">
                  <p>© 2025 SKILL SEVA. All rights reserved.</p>
                </div>
              </div>
              <div className="socials-bar">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd4478d32b6ad764df156_twitter%20icon.svg"
                    alt="X / Twitter"
                    width={24}
                    height={24}
                    className="social_logo"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd44504be145f4e0065a1_linkedin%20icon.svg"
                    alt="Linkedin"
                    width={24}
                    height={24}
                    className="social_logo"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd445ee1b984e7f715e7b_instagram%20icon.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="social_logo"
                    unoptimized
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social-link"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/63b304c11504f900a6192a63/680cd4458f7306afd386b212_facebook%20icon.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="social_logo"
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
