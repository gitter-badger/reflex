const { resolve } = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: resolve(__dirname, '../'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../scripts/postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },
}
