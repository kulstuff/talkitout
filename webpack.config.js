const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build/"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true // webpack@2.x and newer
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          require.resolve("sass-loader")
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.scss/],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
