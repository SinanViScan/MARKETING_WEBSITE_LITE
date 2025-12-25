import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '64fe1169028cb9939579f2bd318b3389.r2.cloudflarestorage.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Enable modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Optimize imports for heavy libraries to reduce bundle size
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
