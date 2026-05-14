import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxv.vn",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: [
    "192.168.1.2",
    "localhost",
  ],
};

export default nextConfig;
