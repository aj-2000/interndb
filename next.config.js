module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Next.js + Tailwind CSS template',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://algoxprt.vercel.app',
      title: 'Next.js + Tailwind CSS template',
      description: 'Next.js + Tailwind CSS template',
      socialPreview: '/images/preview.png',
    },
  },
  images: {
    domains: ['images.unsplash.com']
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
