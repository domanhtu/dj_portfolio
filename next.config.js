/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.scdn.co' }],
    qualities: [75, 100],
  },
  allowedDevOrigins: ['127.0.0.1'],
};

module.exports = nextConfig;
