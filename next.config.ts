import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Think-Beyond-UX',
  assetPrefix: '/Think-Beyond-UX/',
  images: {
    unoptimized: true,
  },
  experimental: {},
  turbopack: {
    rules: {
      'tsx': {
        loaders: ['@locator/webpack-loader'],
        as: 'tsx',
      },
    },
  },
};

export default nextConfig;
