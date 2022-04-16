/* eslint import/no-extraneous-dependencies: off */
/* eslint import/no-dynamic-require: off */
const fs = require('fs')
const path = require('path')

// const eslintFormatter = require('react-dev-utils/eslintFormatter')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rootDirectory = fs.realpathSync(process.cwd())
const clientDir = path.resolve(rootDirectory, 'src')
const stylesDir = path.resolve(rootDirectory, 'src/assets/styles')

const getModuleRules = mode => {
  const isDev = mode === 'development'
  const result = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: isDev ? [
                'lodash',
                require.resolve('react-refresh/babel'),
              ] : ['lodash'],
              // cacheDirectory: true,
              // cacheCompression: false,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          isDev ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
        ],
      },

      {
        test: /\.pcss$/,
        include: stylesDir,
        use: [
          isDev ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-import', {
                    root: rootDirectory,
                    path: stylesDir,
                  }],
                  ['postcss-flexbugs-fixes'],
                  ['autoprefixer'],
                  ['cssnano', { zindex: false }],
                ],
              },
            },
          },
        ],
      },

      // {
      //   test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   use: ['url-loader?limit=5000&name=[name].[hash].[ext]?'],
      // },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        test: /\.(ico|gif|jpg|jpeg|png|svg|woff|woff2|ttf|eot)$/,
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /node_modules/],
        loader: 'file-loader',
        options: {
          outputPath: '',
          context: path.resolve(rootDirectory, 'src/assets/'),
          name: '[path][name].[ext]',
          emitFile: true,
        },
      },
    ],
  }

  // if (isDev) {
  //   result.rules.unshift({
  //     test: /\.(js|jsx)$/,
  //     enforce: 'pre',
  //     include: clientDir,
  //     use: [
  //       {
  //         loader: 'eslint-loader',
  //         options: {
  //           fix: true,
  //           formatter: eslintFormatter,
  //           eslintPath: 'eslint',
  //           configFile: path.resolve(rootDirectory, 'config/.eslintrc.js'),
  //         },
  //       },
  //     ],
  //   })
  // }

  return result
}

module.exports = {
  getModuleRules,
}
