/** @type {import('next').NextConfig} */
const nextConfig = {
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
