import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "fjkks9rr-3000.ukst.devtunnels.ms",
        "fjkks9rr-3000.uks1.devtunnels.ms",
        "nomination-site.vercel.app",
        "https://nomination-site.vercel.app",
        "https://nomination-site-4eut5hjjv-abels-projects-46ed9b6e.vercel.app",
        "nomination-site-4eut5hjjv-abels-projects-46ed9b6e.vercel.app",
      ],
    },
  },
};

export default nextConfig;
