const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    watch:true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        //babel 7系から"presets"を指定する際は、下記のように"@~~"を指定する
                        presets: [
                            ['@babel/env',{modules:false}],
                            '@babel/react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title: 'Plugin generate page',
            template: 'src/root.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    //webpack-dev-serverの設定
    //portキーで、portを選択することも可能
    devServer:{
        contentBase: path.join(__dirname,'public'),
        port: 9000
    }
};
