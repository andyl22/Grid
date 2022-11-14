// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? 'https://andyl22.github.io/Grid/' : undefined
};

export default nextConfig;
