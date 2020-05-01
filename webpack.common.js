var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/zodiac',
        to: 'assets',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
