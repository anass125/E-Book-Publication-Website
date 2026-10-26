/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // cacheComponents: true,
  // partialPrefetching: true,
  devIndicators: false,
   output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
