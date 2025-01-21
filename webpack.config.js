const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


// noinspection JSUnusedGlobalSymbols
module.exports = {
    // stats: {
    //     loggingDebug: ["sass-loader"],
    // },
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[hash:3].js",
        assetModuleFilename: pathData => {
            const filepath = path
                .dirname(pathData.filename)
                .split('/')
                .slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'about.html'),
            filename: "about.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'shop-page.html'),
            filename: "shop-page.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 2, sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {
                        loader: 'sass-loader', options: {
                            implementation: require('sass'),
                            sourceMap: true,
                        }
                    },
                ],
            },
            {test: /\.(png|jpg|jpeg|gif|svg)$/i, type: 'asset/resource'},
            {test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/inline'},
        ],
    },
    devServer: {
        static: {directory: path.resolve(__dirname, "dist")},
        watchFiles: ["src/*.html"],
        compress: true,
        hot: true,
        port: 9000,
    }
}

