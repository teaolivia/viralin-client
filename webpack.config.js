/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebPackPlugin = require('html-webpack-plugin');

const MODULE_PATHS = ['./node_modules', './src'];
const path = require('path');

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
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 250000, // Convert images < 8kb to base64 strings
                name: 'Image/[hash]-[name].[ext]'
            } 
        }]
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
      },
    ],
  },
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin(
      {
        //   hash: true,
        template: path.resolve('./public/index.html'),
      },
    ),
  ],
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    hot: true,
  },
  stats: { children: false },
  externals: {
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? require('./config.prod.json') : require('./config.dev.json'))
  },
};
