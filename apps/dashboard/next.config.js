/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lmnvbystndytcohipoeq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
