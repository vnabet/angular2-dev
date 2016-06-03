const webpack = require('webpack');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;


module.exports = {
    entry: {
      app: './test/bootstrap.ts',
      //vendor: './test/vendor.ts'
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
