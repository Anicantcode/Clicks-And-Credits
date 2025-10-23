/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during production build
  },
};

export default nextConfig;
