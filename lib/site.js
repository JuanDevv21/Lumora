const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (productionUrl ? `https://${productionUrl}` : 'http://localhost:3000')
).replace(/\/$/, '')

export const siteConfig = {
  name: 'Lumora',
  title: 'Software a medida, automatización e IA para empresas | Lumora',
  description:
    'Diseñamos software a medida, automatizaciones e inteligencia artificial aplicada para empresas en Colombia que necesitan simplificar procesos y operar mejor.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'lumoraclientsupport@gmail.com',
  locale: 'es_CO',
  location: {
    city: 'Cali',
    region: 'Valle del Cauca',
    country: 'Colombia',
    countryCode: 'CO',
  },
  market: 'Colombia',
}
