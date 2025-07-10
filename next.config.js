/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['localhost'],
    domains: ['e2visa.infinitysol.agency', 'localhost'],
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig 