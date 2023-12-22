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
            : "http://172.18.0.2:5000/:path*", // Proxy to Backend // docker local network using WSL
            // : "http://127.0.0.1:5000/:path*", // Local development without docker
      },
    ];
  },
};

module.exports = nextConfig;