import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io'],
  },
  webpack: (config) => {
    config.resolve.alias['@emotion/core'] = path.resolve(
      './node_modules/@emotion/react'
    );
    return config;
  },
};

export default nextConfig;
