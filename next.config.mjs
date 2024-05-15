/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add file-loader for mp4 files
        config.module.rules.push({
          test: /\.(mp4)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              outputPath: 'static/videos',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        });
    
        return config;
      },
};


export default {
    images: {
      domains: ['images.unsplash.com'],
    },
  };


