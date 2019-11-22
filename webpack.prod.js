const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: 'babel-loader'
};

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [babel]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  node: { fs: 'empty' }
};

module.exports = config;
