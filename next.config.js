const path = require('path')
const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverComponentsExternalPackages: ['knex', 'oracledb'],
  },
}

module.exports = nextConfig

module.exports = withSvgr({
  webpack(config, options) {
    return config
  },
})
