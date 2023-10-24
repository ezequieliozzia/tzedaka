/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination:
          process.env.NODE_ENV === "production"
            ? "https://tzedaka-backend.vercel.app/:path*"
            : "http://127.0.0.1:5000/api/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;