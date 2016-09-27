module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: './bundle.js'
    },
    resolve: ['', '.js', '.jsx'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test : /\.css$/,
                loader : "style-loader!css-loader!postcss-loader!"
            },
            {
                test : /\.json$/,
                loader : "json-loader"
            },
            {
                test : /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
                loader : "url-loader"
            }
        ],
    },
    babel: {
       "presets": ['es2015','stage-0','react']
     }
}
