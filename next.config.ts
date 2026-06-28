import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/srinivas-portfolio",
  assetPrefix: "/srinivas-portfolio/",
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
