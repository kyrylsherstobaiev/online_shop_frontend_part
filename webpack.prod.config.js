const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name][contenthash:3].js",
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
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
        new MiniCssExtractPlugin({
            filename: "styles/[name][contenthash:3].css",
            chunkFilename: "[id][contenthash:3].css",
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
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {importLoaders: 2, sourceMap: false}},
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline'
            },
        ],
    },
}

