const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
		inline: true,
		port: 8080
	},
  module: {
    rules: [
      {
      	test: /\.(js)$/,
      	use: { loader: 'babel-loader' },
      	exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[hash:base64:5]',
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    	template: 'src/index.html',
    	filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
