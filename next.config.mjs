// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   // cacheComponents: true,
//   // partialPrefetching: true,
//   devIndicators: false,
  
//    output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;





///////fixed code

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: '/E-Book-Publication-Website',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
