import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Think-Beyond-UX',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
