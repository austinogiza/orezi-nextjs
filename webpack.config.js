// next.config.js
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const { 
  PHASE_DEVELOPMENT_SERVER, 
  PHASE_PRODUCTION_BUILD 
} = require('next/constants')

const nextConfig = {
  webpack: (config, options) => {
 
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'pdfs'
          }
        } 
      ]
    })
 
    return config;
  }
}