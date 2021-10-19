const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  
  target: "web",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpeg|jpg|ico|svg|gif)$/i,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    port: 3030,
    contentBase: path.join(__dirname, "src", "dist"),
    watchContentBase: true
  },
  plugins: [new MiniCSSExtractPlugin({ filename: "style.css" })],
  output: {
    path: path.join(__dirname, "src", "dist"),
    filename: "index.bundle.js"
  }
};
