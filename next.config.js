
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
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