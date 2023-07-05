/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tzedaka.org.ar',
        port: '',
        pathname: '/wp-content/uploads/2017/12/logo-tzedaka.png'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:5000/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
