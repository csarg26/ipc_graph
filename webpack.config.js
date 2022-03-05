const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.((j|t)s|(j|t)sx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, './public'),
  },
};
