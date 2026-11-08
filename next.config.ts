import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Name-variant URLs people (and AI assistants) may guess -> one canonical profile
  async redirects() {
    return [
      { source: '/jalaluddin-master', destination: '/ammar-master', permanent: true },
      { source: '/mohammad-jalaluddin-master', destination: '/ammar-master', permanent: true },
      { source: '/md-jalaluddin-master', destination: '/ammar-master', permanent: true },
      { source: '/ammarmaster', destination: '/ammar-master', permanent: true },
      { source: '/prodevopz-ai', destination: '/prodevopz', permanent: true },
    ];
  },
};

export default nextConfig;
