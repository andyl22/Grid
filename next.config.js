const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  assetPrefix: ghPages ? 'https://andyl22.github.io/' : nextConfig
};
