import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'standalone',
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/health-check',
        destination: 'http://localhost:3000/api/health-check',
        basePath: false,
      },
    ]
  },
}

export default nextConfig
