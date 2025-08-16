import { BASE_PATH } from '@/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
