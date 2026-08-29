import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;