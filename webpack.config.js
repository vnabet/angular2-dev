const webpack = require('webpack');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;


module.exports = {
    entry: {
      polyfills: './test/polyfills.ts',
      vendor: './test/vendor.ts',
      app: './test/bootstrap.ts'
    },
    //entry: './test/bootstrap.ts',
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    /*alias: {
      '@angular': './node_modules/@angular'
    },*/
    output: {
        path: __dirname,
        filename: '[name].js'
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
    ]
};
