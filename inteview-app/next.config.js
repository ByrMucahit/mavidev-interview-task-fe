/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST: `http://localhost:8080`,
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
