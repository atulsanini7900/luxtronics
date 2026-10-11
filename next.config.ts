import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable linting and typechecking during production build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure image optimization works with remote URLs
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
