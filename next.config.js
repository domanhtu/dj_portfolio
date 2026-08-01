/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.scdn.co' }],
    qualities: [75, 100],
  },
};

module.exports = nextConfig;
