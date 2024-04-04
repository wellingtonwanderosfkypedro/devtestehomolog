const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["blog.neoway.com.br"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.neoway.com.br",
        port: "**",
        pathname: "**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
