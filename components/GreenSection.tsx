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
    <section className="w-full relative py-24 overflow-hidden bg-bg-primary bg-[linear-gradient(to_right,rgba(89,39,157,0.03)_0%,rgba(89,39,157,0.02)_40%,rgba(89,39,157,0.02)_60%,rgba(89,39,157,0.03)_100%),radial-gradient(140%_140%_at_10%_0%,rgba(89,39,157,0.04)_0%,transparent_48%)]">
      <div className="max-w-content mx-auto px-4">
        <div className="grid gap-12 justify-items-center">
          <div className="grid gap-4 max-w-[1200px] text-center mx-auto justify-items-center">
            <h2 className="text-[clamp(2rem,3.5vw+1rem,3.5rem)] leading-[1.1] font-normal text-text-primary max-w-[819px] w-full m-0">
              Learn from experts working across <span className="text-brand-accent italic">50+ brands</span>
            </h2>
            <p className="text-[1.1rem] leading-[1.6] text-text-secondary max-w-[942px] w-full m-0">
              Our mentors come from top startups, enterprises, and fast-growing companies, bringing real-world experience, not text book theory
            </p>
          </div>
          <div className="w-screen relative -ml-[50vw] left-[50%] right-[50%] mr-[calc(-50vw+50%)]">
            <div className="w-full overflow-hidden relative pr-8 before:absolute before:top-0 before:left-0 before:h-full before:z-10 before:w-[calc((100vw-min(1180px,92vw))/2+2rem)] before:bg-gradient-to-r before:from-bg-primary before:to-transparent after:absolute after:top-0 after:right-0 after:h-full after:z-10 after:w-[100px] after:bg-gradient-to-l after:from-bg-primary after:to-transparent">
              <div className="flex gap-8 animate-marquee pl-[calc((100vw-min(1180px,92vw))/2)]">
                <div className="flex gap-8 shrink-0">
                  {brands.map((brand: any, index) => (
                    <div key={index} className="shrink-0 animate-marquee-reset">
                      <div className="flex items-center justify-center h-[100px] bg-white rounded-[12px] p-6 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.05)] w-[180px] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]" style={brand.customStyle?.wrapper}>
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={180}
                          height={90}
                          className="max-w-full max-h-[60px] w-auto h-auto object-contain"
                          unoptimized
                          style={brand.customStyle?.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-8 shrink-0" aria-hidden="true">
                  {brands.map((brand: any, index) => (
                    <div key={`duplicate-${index}`} className="shrink-0 text-red-500">
                      <div className="flex items-center justify-center h-[100px] bg-white rounded-[12px] p-6 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.05)] w-[180px] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]" style={brand.customStyle?.wrapper}>
                        <Image
                          src={brand.logo}
                          alt=""
                          width={180}
                          height={90}
                          className="max-w-full max-h-[60px] w-auto h-auto object-contain"
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

