var path = require('path');
var webpack = require('webpack');
 
module.exports = {
	entry: [
		// Check: http://gaearon.github.io/react-hot-loader/getstarted/
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/index.js'
	],
	output: { 
		path: path.join(__dirname, 'dist'), 
		publicPath: '/dist', // Where your server will look up
		filename: 'bundle.js' 
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: [
					'react-hot', 
					'babel-loader?presets[]=es2015,presets[]=react',
					'eslint-loader'
				],
				exclude: /node_modules/				
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};