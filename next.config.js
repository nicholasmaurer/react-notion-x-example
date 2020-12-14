'use strict'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      // redirect the index page to our notion test suite
      {
        source: '/',
        destination: '/397721efc3cd4f138fe0910d8d27c6e6',
        permanent: true
      }
    ]
  }
})
