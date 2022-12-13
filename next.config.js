
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  trailingSlash: true,
  async redirects() {
    retunr [
      {
        source: '/perguntas',
        destination: '/faq',
        permanet: true,
      }
    ]
  },
}