var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');

module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	watch: true,
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'es2016', 'es2017', 'react']
				}
			},
			{
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
		]
	},
  postcss: function () {
    return [cssnext];
  }
}
