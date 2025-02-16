/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imagedelivery.net', 'customer-m033z5x00ks6nunl.cloudflarestream.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
