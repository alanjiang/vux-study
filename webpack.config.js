var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vuxLoader=require('vux-loader');
var webpack = require("webpack");
//const options = loaderUtils.getOptions(this);;
process.noDeprecation = true
var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js' //开发用的JS
    },
    module: {
        rules: [
            
        	 {
                test: /\.vue$/,
                
                loader:'vux-loader'
                
                
                /*options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                        	//use: ['css-loader', 'sass-loader','less-loader','vux-loader','stylus-loader'],
                        	use:'css-loader',
                            //fallback: 'vue-style-loader'
                        	fallback:'style-loader'
                           })
                    }
                }*/
            },
            
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            
            {
            	  test: /\.css$/,
            	  loader: 'style-loader!css-loader'
            },
             
            
            
            
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
              test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        
        
        new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery"
        })
        
        
    ],
    
    resolve: {
    	  extensions: [ '.js', '.vue', '.json']
    	}
};





//module.exports = config;
module.exports=vuxLoader.merge(config,{
	  plugins: [{
	    name: 'vux-ui'
	  }]
});