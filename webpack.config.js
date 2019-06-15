/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MODULE_PATHS = ['./node_modules', './src'];
var path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        // },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          // modules: true,
          // localIdentName: '[name]',
        },
      }
    ],
  },
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new HtmlWebPackPlugin(
       {
    //   hash: true,
    template:  path.resolve('./public/index.html')
     }
    ),
  ],
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build"
  },
  stats: { children: false }
};