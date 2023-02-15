/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//       domains: [
//           'www.notion.so',
//           'images.unsplash.com',
//           's3.us-west-2.amazonaws.com'
//       ],
//       format: ['image/png', 'image/webp', 'image/jpeg']
//   }
// }

const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default   nextConfig;

// module.exports = nextConfig
