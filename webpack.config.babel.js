import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const nodeModules = path.resolve(__dirname, 'node_modules');

module.exports = () => {
  const config = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),

    entry: {
      webpack: "./index.js"
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
      sourceMapFilename: "webpack.map"
    },

    devServer: {
      hot: true,
      historyApiFallback: true
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        Promise: 'exports-loader?global.Promise!es6-promise'
      }),
      new CopyWebpackPlugin([
        {
          from: 'fonts/**/*.*',
          to: '.'
        }
      ])
    ],

    module: {
      rules: [
        {test: /\.jsx?$/, exclude: nodeModules, use: ['babel-loader']},
        {test: /\.scss$/, use: [
          "style-loader",
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: {
            sourceMap: true,
            plugins: () => [autoprefixer({browsers:["> 1%", "last 2 versions", "Firefox ESR", "Safari 8"]})]
          }},
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]},
        {test: /\.(gif|png|jpe?g|svg)$/i, use: [
          "file-loader",
          "image-webpack-loader"
        ]}
      ]
    }
  };

  return config;
};
