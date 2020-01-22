const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

const files = {
  test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
  use: {
    loader: 'file-loader',
    options: {
      outputPath: 'img/'
    }
  }
};

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:9000/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000,
    hot: true,
    open: true
  },
  module: {
    rules: [babel, files]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
