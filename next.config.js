const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: { styledComponents: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverComponentsExternalPackages: ['knex'],
  },
}

module.exports = nextConfig
