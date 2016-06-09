const webpack = require('webpack');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');


var path = require('path');

module.exports = {
  context: path.resolve('./src'),
    entry: {
      polyfills: './polyfills',
      vendor: './vendor',
      app: './bootstrap'
    },
    //entry: './test/bootstrap.ts',
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    devtool: 'cheap-module-source-map',
    /*alias: {
      '@angular': './node_modules/@angular'
    },*/
    output: {
        path: path.resolve('./built'),
        publicPath:'built/assets/js',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: ['index.html']
        }/*,
        {
          test: /\.css$/,
          loader: 'style!css'
        }*/
      ]
    },
    plugins: [
      new ForkCheckerPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    })
      /*new UglifyJsPlugin({
        // beautify: true, //debug
        // mangle: false, //debug
        // dead_code: false, //debug
        // unused: false, //debug
        // deadCode: false, //debug
        // compress: {
        //   screw_ie8: true,
        //   keep_fnames: true,
        //   drop_debugger: false,
        //   dead_code: false,
        //   unused: false
        // }, // debug
        // comments: true, //debug

        beautify: false, //prod

        mangle: {
          screw_ie8 : true,
          keep_fnames: true
        }, //prod

        compress: {
          screw_ie8: true
        }, //prod

        comments: false //prod
      })*/

    ]
};
