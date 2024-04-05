/** @type {import('next').NextConfig} */
 
const nextConfig = {
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: false,  
};
 
module.exports = nextConfig;