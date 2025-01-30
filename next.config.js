/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['runbuild-ai.vercel.app'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
} 