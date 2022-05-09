/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN:
      'pk.eyJ1IjoibWF4bmF2ZWlsbGFuIiwiYSI6ImNsMGlpcGg3ODAyejgzcGtjcXE3NW5lMTkifQ.zBrBdAmdc22oepPkr1cdqA',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;