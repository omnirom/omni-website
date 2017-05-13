import webpack from 'webpack';
import path from 'path';

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
      hot: true
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        Promise: 'exports-loader?global.Promise!es6-promise'
      })
    ],

    module: {
      rules: [
        {test: /\.jsx?$/, exclude: nodeModules, use: ['babel-loader']},
        {test: /\.scss$/, use: [
          "style-loader",
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]},
      ]
    }
  };

  return config;
};
