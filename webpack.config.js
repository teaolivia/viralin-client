const HtmlWebPackPlugin = require('html-webpack-plugin');

const MODULE_PATHS = ['./node_modules', './src'];
const path = require('path');

const webpack = require('webpack');

const configProd = require('./config.prod.json');

const configDev = require('./config.dev.json');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
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
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx'],
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: path.resolve('./public/index.html'),
    }),
    new webpack.ProvidePlugin({
      _map: ['lodash', 'map'],
    }),
    // new webpack.DefinePlugin({
    //   // Dynamically access local environment variables based on the environment
    //   ENV: JSON.stringify(require(path.join(__dirname, "src", "config", env))),
    //   "process.env": {
    //     // defaults the environment to development if not specified
    //     "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    //   }
    // })
  ],
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
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
    config: JSON.stringify(process.env.NODE_ENV === 'production' ? configProd : configDev),
  },
};
