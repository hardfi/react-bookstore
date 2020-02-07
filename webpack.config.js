const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: PATH_DIST,
    filename: 'js/[name].[hash].js',
  },
  devServer: {
    contentBase: PATH_DIST,
    host: 'localhost',
    port: 3010,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
};
