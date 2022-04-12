/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.gravatar.com'],
  },
  env: {
    WEATHER_API: process.env.WEATHER_API,
  },
};

module.exports = nextConfig;
