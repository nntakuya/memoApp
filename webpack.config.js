const path = require('path');

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
                        presets: [
                            ['@babel/env',{modules:false}],
                            '@babel/react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};
