
const nextConfig = {

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
