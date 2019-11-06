const path = require("path");

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: "babel-loader"
};


const config = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.join(__dirname, "dist/js/"),
    publicPath: "/dist/js/",
  },
  module: {
    rules: [babel]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  node: {fs: "empty"}
};

module.exports = config;
