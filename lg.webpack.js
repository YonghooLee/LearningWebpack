const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader']
            }
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: 'css-loader',
            //         }
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader'
            // }
        ]
    }
}