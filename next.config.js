/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/J5_Cwb5ZWttmHHenUCO3ZA/**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'customer-m033z5x00ks6nunl.cloudflarestream.com',
        pathname: '/**',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '3bd3665e92625dc3aaedf9dfdbb291f9.r2.cloudflarestorage.com',
        pathname: '/**',
        port: '',
      },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
