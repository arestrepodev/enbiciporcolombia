const path = require("path");

const babel = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

const config = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/js")
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: {
      index: "index.html"
    },
    port: 9000
  },
  module: {
    rules: [babel]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }
};

module.exports = config;
