/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  reactStrictMode: true,
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
