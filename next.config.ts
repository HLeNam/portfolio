import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "drive.google.com",
      "res.cloudinary.com",
      "githubusercontent.com",
    ],
  },
};

export default nextConfig;
