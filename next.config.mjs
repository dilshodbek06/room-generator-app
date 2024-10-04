/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "neuroapi-store.s3.eu-central-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
