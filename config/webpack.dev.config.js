/* eslint import/no-extraneous-dependencies: off */
/* eslint import/no-dynamic-require: off */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')

const rootDirectory = fs.realpathSync(process.cwd())
const outputDir = path.resolve(rootDirectory, 'dist')
const clientDir = path.resolve(rootDirectory, 'src')
const aliases = require(path.resolve(rootDirectory, 'config/aliases'))

const { getModuleRules } = require('./webpack.rules')

const mode = 'development'

module.exports = {
  mode,

  target: 'web',

  // https://webpack.js.org/configuration/devtool/#development
  // devtool: 'eval-cheap-source-map', // fast, transformed code (lines only)
  devtool: 'inline-source-map', // slow, original source

  // entry: path.resolve(clientDir, 'index.js'),
  entry: {
    main: path.resolve(clientDir, 'index.js'),
  },

  context: rootDirectory,

  output: {
    path: outputDir,
    pathinfo: false,
    publicPath: '/',
    filename: '[name].js',
    // https://github.com/webpack/webpack/issues/11660
    // chunkLoading: false,
    wasmLoading: false,
  },

  resolve: {
    alias: {
      ...aliases,
    },
    modules: ['./', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },

  module: getModuleRules(mode),

  // optimization: {
  //   minimize: false,
  //   emitOnErrors: true,
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       // uilib: {
  //       //   test: /[\\/]node_modules[\\/](\@material-ui|date-fns|\@date-io)[\\/]/,
  //       //   name: 'mui',
  //       //   chunks: 'all',
  //       // },
  //       // vendor: {
  //       //   test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //       //   name: 'react',
  //       //   chunks: 'all',
  //       // },
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(rootDirectory, 'public/index.html'),
      filename: 'index.html',
      minify: false,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify(process.env.APP_ENV || 'development'),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new ESLintPlugin({
      fix: true,
      formatter: eslintFormatter,
      eslintPath: 'eslint',
      overrideConfigFile: path.resolve(rootDirectory, 'config/.eslintrc.js'),
    }),
  ],

  // https://webpack.js.org/configuration/stats/
  stats: {
    all: false, // for faster build and rebuild times
  }
  // stats: 'errors-only',
  // stats: {
  //   preset: 'verbose',
  //   assets: false, // true to show images, icons, etc.
  //   assetsSpace: 50,
  //   assetsSort: '!size',
  //   colors: true,
  //   children: false,

  //   chunkModules: false,
  //   chunkOrigins: false,
  //   chunksSort: '!size',

  //   entrypoints: true,
  //   logging: false,
  //   modules: false,
  //   relatedAssets: true,
  //   timings: true,

  //   groupAssetsByInfo: false,
  //   groupAssetsByChunk: false,
  //   groupAssetsByEmitStatus: false,
  // },
}
