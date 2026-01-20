'use client'

import Image from 'next/image'

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Build a Career in Data Analytics: A Complete Guide',
      excerpt: 'Discover the essential skills, tools, and strategies needed to launch a successful career in data analytics. Learn from industry experts who have built thriving careers.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'Career Growth',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'SkillSeva Team'
    },
    {
      id: 2,
      title: 'The Future of Entrepreneurship: Trends Shaping 2024',
      excerpt: 'Explore the latest trends in entrepreneurship and how successful founders are navigating the evolving business landscape. Insights from top operators.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Entrepreneurship',
      date: 'March 12, 2024',
      readTime: '7 min read',
      author: 'SkillSeva Team'
    },
    {
      id: 3,
      title: 'Financial Analysis Fundamentals: A Beginner\'s Guide',
      excerpt: 'Master the basics of financial analysis with this comprehensive guide. Perfect for professionals looking to enhance their analytical skills and career prospects.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      category: 'Finance',
      date: 'March 10, 2024',
      readTime: '6 min read',
      author: 'SkillSeva Team'
    }
  ]

  return (
    <section className="w-full relative py-24 bg-bg-secondary">
      <div className="px-4 md:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid gap-12">
            <div className="grid gap-4 max-w-[1200px] text-center mx-auto justify-items-center">
              <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] md:text-[clamp(2rem,3.5vw+1rem,3.5rem)] leading-[1.1] font-normal m-0 text-text-primary">
                Latest Insights & <span className="text-brand-accent italic">Articles</span>
              </h2>
              <p className="text-[1.05rem] leading-[1.6] text-text-secondary max-w-[942px] m-0">
                Stay updated with expert insights, resources, and industry trends from our community of top operators and mentors
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-[24px] border border-black/8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full">
                  <div className="block h-full cursor-pointer decoration-0 text-inherit">
                    <div className="w-full aspect-[4/3] relative overflow-hidden bg-bg-secondary">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="inline-block text-[0.75rem] font-bold tracking-[0.05em] uppercase text-brand-accent bg-brand-accent/5 px-2.5 py-1 rounded-full w-fit">
                        {post.category}
                      </div>
                      <div className="flex items-center gap-2 text-[0.8rem] text-text-muted font-medium">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-[1.2rem] leading-[1.3] font-semibold text-text-primary m-0 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.6] text-text-secondary line-clamp-3 m-0 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
                        <span className="text-[0.85rem] font-semibold text-text-primary">{post.author}</span>
                        <span className="text-brand-accent text-lg transition-transform duration-200 hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

