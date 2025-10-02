/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML/CSS/JS export
  trailingSlash: true,  // Ensures correct routing
  images: {
    unoptimized: true,  // Disables image optimization for static export
  },
  // Optional: Add basePath if your repo name differs (e.g., '/cpan144-assignment-1')
  // basePath: '/cpan144-assignment-1',
};

module.exports = nextConfig;