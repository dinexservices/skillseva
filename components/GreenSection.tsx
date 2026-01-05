'use client'

import Image from 'next/image'

const brands = [
  { name: 'Poonji Mitra', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f62f362e3e076232c3cee_Poonji%20Mitra.svg' },
  { name: 'Adya Care', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f62e386bc2c52d34f0af1_adya%20care.svg' },
  { name: 'Nab', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f61d9f6e060eeba0b6797_nab.svg' },
  { name: 'RPSG Capital Venures', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f61c863771d2505bbfc2b_RPSG.svg' },
  { name: 'Oracle', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f618a00f75ac7c1e520a5_oracle.svg' },
  { name: 'SBI Card', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f61739d73b4c99368cf2a_SBI%20card.svg' },
  { name: 'Viacom18', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f615f8747c3b116a8413e_viacom18.svg' },
  { name: 'IBM', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f614d63771d2505bba695_IBM.svg' },
  { name: 'Ajio', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5fdb272ed3616cc8730e_Ajio.svg' },
  { name: 'Kearney', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5f8163075e17518a66d5_Kearney.svg' },
  { name: 'Apple', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5f2873d01e75b13ddf5e_apple.svg' },
  { name: 'KPMG', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5f1723b54536ec8a6067_kpmg.svg' },
  { name: 'Bain & Company', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5f030361efda0bc09197_Bain.svg' },
  { name: 'Deloitte', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5ee562e3e07623298fd7_Deloitte.svg' },
  { name: 'PwC', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5eca913a8db647cc5473_pwc.svg' },
  { name: 'Zomato', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5eb7ccee2cd06a1875d9_Zomato.svg' },
  { name: 'EY', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5ea64d456c17e3f1671e_EY.svg' },
  { name: 'Google', logo: 'https://cdn.prod.website-files.com/63b53c964a870814042dfc9f/686f5e95e16504ee711b01d8_google.svg' },
]

export default function GreenSection() {
  return (
    <section className="section-brands">
      <div className="brands-wrapper">
        <div className="brands-content">
          <div className="brands-text" id="mentors-text-section">
            <h2 className="brands-heading" id="mentors-heading">
              Mentors from more than <span className="brands-highlight italic-emphasis">200+ brands</span>
            </h2>
            <p className="brands-description">
              Learn from leaders shaping industries, bringing you insider insights and proven strategies to accelerate your journey
            </p>
          </div>
          <div className="brands-marquee">
            <div className="brands-marquee-wrapper">
              <div className="brands-logo-collection">
                <div className="brands-logo-list">
                  {brands.map((brand, index) => (
                    <div key={index} className="brand-item">
                      <div className="brand-logo-wrapper">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={120}
                          height={60}
                          className="brand-logo"
                          unoptimized
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="brands-logo-list" aria-hidden="true">
                  {brands.map((brand, index) => (
                    <div key={`duplicate-${index}`} className="brand-item">
                      <div className="brand-logo-wrapper">
                        <Image
                          src={brand.logo}
                          alt=""
                          width={120}
                          height={60}
                          className="brand-logo"
                          unoptimized
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

