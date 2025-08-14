import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/umzuger',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
