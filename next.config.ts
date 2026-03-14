import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
