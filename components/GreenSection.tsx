'use client'

import Image from 'next/image'

const brands = [
  { name: 'Brand 1', logo: '/companies/3f6266e4e1a5090594f64dd305265cee84a33af8.png' },
  { name: 'Brand 2', logo: '/companies/6b99b5103b5b51aa6f3d3693cdfa5d1e18e3a963.png' },
  { name: 'Brand 3', logo: '/companies/6c6c9c5d3cc5c1c446ffcb50841f12486d6c357e.png' },
  {
    name: 'Brand 4',
    logo: '/companies/2988602e9b010b7ab07768471683cf613a41e74d.png',
    customStyle: {
      wrapper: { padding: '0px' },
      image: { maxHeight: '90px', width: 'auto', height: 'auto', maxWidth: '160px' }
    }
  },
  { name: 'Brand 5', logo: '/companies/a2dfa3df02de5ccf098cc6d37b841b0281df7c19.png' },
  { name: 'Brand 6', logo: '/companies/a7682efeddf0c7dd35eaaba0e922b8d1ef908e62.png' },
]

export default function GreenSection() {
  return (
    <section className="section-brands">
      <div className="brands-wrapper">
        <div className="brands-content">
          <div className="brands-text" id="mentors-text-section">
            <h2 className="brands-heading" id="mentors-heading">
              Learn from experts working across <span className="brands-highlight italic-emphasis">50+ brands</span>
            </h2>
            <p className="brands-description">
              Our mentors come from top startups, enterprises, and fast-growing companies, bringing real-world experience, not text book theory
            </p>
          </div>
          <div className="brands-marquee">
            <div className="brands-marquee-wrapper">
              <div className="brands-logo-collection">
                <div className="brands-logo-list">
                  {brands.map((brand: any, index) => (
                    <div key={index} className="brand-item">
                      <div className="brand-logo-wrapper" style={brand.customStyle?.wrapper}>
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={180}
                          height={90}
                          className="brand-logo"
                          unoptimized
                          style={brand.customStyle?.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="brands-logo-list" aria-hidden="true">
                  {brands.map((brand: any, index) => (
                    <div key={`duplicate-${index}`} className="brand-item">
                      <div className="brand-logo-wrapper" style={brand.customStyle?.wrapper}>
                        <Image
                          src={brand.logo}
                          alt=""
                          width={180}
                          height={90}
                          className="brand-logo"
                          unoptimized
                          style={brand.customStyle?.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

