/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // <-- Yeh line 'out' folder banayegi
  images: {
    unoptimized: true,    // Static export ke liye images unoptimized hona zaroori hai
  },
};

module.exports = nextConfig;
