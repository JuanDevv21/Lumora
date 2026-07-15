import { siteUrl } from '../lib/site'
import { SERVICES } from '../data/service-pages'

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/servicios`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/nosotros`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contacto`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...SERVICES.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}
