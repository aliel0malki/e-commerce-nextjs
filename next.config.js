/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.pexels.com", "example.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
