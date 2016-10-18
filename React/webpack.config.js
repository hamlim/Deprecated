var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');

module.exports = {
	entry: './src.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	watch: true,
	resolve: { modulesDirectories: ['node_modules'], extension: ['', '.js', '.css'] },
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
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
