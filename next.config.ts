import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "fjkks9rr-3666.uks1.devtunnels.ms",
        "nomination-site.vercel.app",
      ],
    },
  },
};

export default nextConfig;
