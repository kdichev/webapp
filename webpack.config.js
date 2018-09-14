const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/[name].bundle.[contenthash].js",
    chunkFilename: "static/js/[contenthash].chunk.js"
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    new WebpackPwaManifest({
      filename: "pwa-manifest.json",
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      start_url: "./index.html",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff",
      icons: [
        {
          src: "public/favicon.ico",
          sizes: [512, 192, 64, 32, 24, 16],
          type: "image/x-icon"
        }
      ]
    })
  ],
  devServer: {
    contentBase: "./build"
  }
};

// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [
//     {
//       "src": "favicon.ico",
//       "sizes": "64x64 32x32 24x24 16x16",
//       "type": "image/x-icon"
//     }
//   ],
//   "start_url": "./index.html",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
