const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: "babel-loader"
};


const config = {
  mode: "production",
  entry: {
    home: "./src/index.js"
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.join(__dirname, "dist/js/"),
    publicPath: "/dist/js/",
  },
  module: {
    rules: [babel]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "../../index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  node: {fs: "empty"}
};

module.exports = config;
