const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/js')
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [babel]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'En Bici Por Colombia',
      template: path.resolve(__dirname, 'src/template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
