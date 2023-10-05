/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.cdninstagram.com']
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
