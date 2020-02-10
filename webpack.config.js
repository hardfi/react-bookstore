const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_DIST = path.join(__dirname, './dist');

module.exports = (env) => {
  const environment = env ? env.NODE_ENV : 'production';
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        environment: path.join(__dirname, 'src', 'environments', environment),
      },
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
        template: './public/index.html',
        favicon: './favicon.ico',
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
