/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "media.graphassets.com"],
  },
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: ["./src/graphql/generated.ts"],
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
