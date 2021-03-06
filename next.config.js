/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  

  // your other plugins here

], {
  images: {
    loader: 'custom',
    disableStaticImages: true,
  },
  assetPrefix: './',
});