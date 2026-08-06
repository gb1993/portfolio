import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lojaespacosmart.vtexassets.com",
      },
    ],
  },
};

export default nextConfig;
