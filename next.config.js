/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["blog.neoway.com.br"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.neoway.com.br',
        port: '**',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
