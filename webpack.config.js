
const path = require('path');

module.exports={
    //entry: './index.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    mode: 'development',
    watch: true,
}