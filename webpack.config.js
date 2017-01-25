var webpack = require('webpack');
var path = require('path');

var config = {
    entry: [
        // 入口,定义要打包的文件
        'webpack/hot/dev-server', 
        path.resolve(__dirname, './app/main.js')
    ],
    output: {
        // 出口，定义打包输出的文件；包括路径，文件名，还可能有运行时的访问路径（publicPath）参数
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        // webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
        // test: 检测哪些文件需要此loader，是一个正则表达式
        // exclude: 忽略哪些文件
         loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/, 
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        // 定义能够被打包的文件，文件后缀名
        // extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // 定义一些额外的插件
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;
