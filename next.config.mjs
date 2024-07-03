/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next', // Add this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn1.ayyam.net'
      }
    ]
  }
};

export default nextConfig;
