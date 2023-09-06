/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: "res.cloudinary.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/google",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
