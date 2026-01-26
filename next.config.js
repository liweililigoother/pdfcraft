/** @type {import('next').NextConfig} */
const nextConfig = {
  // 如果你原本有 output: 'export' 或其他配置，请保留在这里
  output: 'export', 
  
  // 这是修复 canvas 报错的关键部分
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias.canvas = false;
    }
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
    };
    return config;
  },
};

export default nextConfig;
