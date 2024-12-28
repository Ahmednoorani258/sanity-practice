import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",

      }, // Sanity.io images

    ]
  }
};

export default nextConfig;
