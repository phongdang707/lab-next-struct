/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  env: {
    LINK: process.env.LINK,
  },
};

module.exports = nextConfig;
