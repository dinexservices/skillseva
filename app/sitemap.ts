import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://skillseva.com'

    // Static routes
    const routes = [
        '',
        '/cohorts',
        '/events',
        '/media',
        '/jobs',
        '/contact',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Cohorts (Hardcoded for now as data source is in page file)
    // Ideally this should come from a shared data source
    const cohorts = [
        'skillseva-mern-stack-cohort',
        'skillseva-ui-ux-design-cohort',
    ].map((slug) => ({
        url: `${baseUrl}/cohorts/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...cohorts]
}
