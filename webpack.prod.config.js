var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vuxLoader=require('vux-loader');

var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// 保留webpack.config.js中的插件列表
//webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: './dist/',
        // 将入口文件重命名为带有 20 位 hash 值的唯一文件
        filename: '[name].[hash].js'
        
    },
   
    plugins: [
    	
    	//new UglifyJsPlugin(),
        
    	new ExtractTextPlugin({
    		 filename: '[name].[hash].css',
			 //disable: false,
			allChunks: true
		}),
    	
       // new ExtractTextPlugin({
        	
        	
            // 提取 css，并重命名为带有 20 位 hash 值的唯一文件
           // filename: '[name].[hash].css',
            //filename: 'dist.css',
            //allChunks: true
           
        //}),
        // 定义当前 node 环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩 js
        //new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        // 提取模板，并保存入口 html 文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false,
            assetsPublicPath:'./'
        }),
        new CleanWebpackPlugin({
        		
            cleanAfterEveryBuildPatterns: ['dist/*']
          }
        )
        
    ]
});
//module.exports=vuxLoader.merge(webpackBaseConfig,{
///	  plugins: [{
 //   name: 'vux-ui'
  //}]
//});
