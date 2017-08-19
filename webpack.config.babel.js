import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const nodeModules = path.resolve(__dirname, 'node_modules');

module.exports = (env) => {
  const config = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),

    entry: {
      webpack: "./index.js"
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js',
      sourceMapFilename: "bundle.map"
    },

    devServer: {
      hot: true,
      historyApiFallback: true
    },

    plugins: [
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
        {test: /\.(gif|png|jpe?g|svg)$/i, use: [
          "file-loader",
          "image-webpack-loader"
        ]}
      ]
    }
  };

  const styleConfig = [
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'postcss-loader', options: {
      sourceMap: true,
      plugins: () => [autoprefixer({browsers:["> 1%", "last 2 versions", "Firefox ESR", "Safari 8"]})]
    }},
    { loader: 'sass-loader', options: { sourceMap: true } }
  ];

  if (env === 'dev') {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.HotModuleReplacementPlugin()
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {test: /\.scss$/, use: [
            "style-loader",
            ...styleConfig
          ]}
        ]
      }
    };
  } else { // env === 'prod'
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin('omni-styles.css')
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: styleConfig })
          }
        ]
      }
    };
  }
};
