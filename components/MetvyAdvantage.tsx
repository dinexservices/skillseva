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
    <section className="section h_blog-section">
      <div className="v3_padding-global">
        <div className="v3_container">
          <div className="h_blog-wrapper">
            <div className="h_blog_text-wrapper">
              <h2 className="v3_heading_h2" style={{ fontFamily: '"Instrument Serif", serif' }}>Latest Insights & Articles</h2>
              <p className="v3_paragraph_medium">
                Stay updated with expert insights, resources, and industry trends from our community of top operators and mentors
              </p>
            </div>

            <div className="h_blog_grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="h_blog_card">
                  <div className="h_blog_card-link" style={{ cursor: 'pointer' }}>
                    <div className="h_blog_card_image-wrapper">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="h_blog_card_image"
                        unoptimized
                      />
                    </div>
                    <div className="h_blog_card_content">
                      <div className="h_blog_card_category">{post.category}</div>
                      <div className="h_blog_card_meta">
                        <span className="h_blog_card_date">{post.date}</span>
                        <span className="h_blog_card_separator">•</span>
                        <span className="h_blog_card_read-time">{post.readTime}</span>
                      </div>
                      <h3 className="h_blog_card_title">{post.title}</h3>
                      <p className="h_blog_card_excerpt">{post.excerpt}</p>
                      <div className="h_blog_card_footer">
                        <span className="h_blog_card_author">{post.author}</span>
                        <span className="h_blog_card_arrow">→</span>
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

