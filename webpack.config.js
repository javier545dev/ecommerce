const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),

    new Dotenv({
      path: path.resolve(__dirname, './.env')
    }),
    new webpack.DefinePlugin({
      'process.env.PAYPAL_PAYMENT_CLIENT_ID': JSON.stringify(
        process.env.PAYPAL_PAYMENT_CLIENT_ID
      ),
      'process.env.GOOGLE_MAPS_API': JSON.stringify(process.env.GOOGLE_MAPS_API)
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/')
    },
    compress: true,
    historyApiFallback: true,
    port: 3005
  }
}
