const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

const config = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "../src/main.tsx"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
                privateMethod: false,
                functionBind: false,
                exportDefaultFrom: false,
                exportNamespaceFrom: false,
                decorators: false,
                decoratorsBeforeExport: false,
                topLevelAwait: false,
                importMeta: false,
              },
              transform: null,
              target: "es2016",
              loose: false,
              externalHelpers: false,
              keepClassNames: false,
            },
          },
        },
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.jpg|\.png/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../resources"),
    filename: "app_bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    open: false,
  },
};

module.exports = config;
