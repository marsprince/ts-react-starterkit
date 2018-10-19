const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 加载器
    entry: resolve('src/main.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders:[
                  "babel-loader",
                  "ts-loader"
                ],
                exclude: /node_modules/,
            },
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss/,
                use: [
                    process.env.NODE_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            limit: 8192,
                            name: '[name].[hash:20].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({ /*configFile: "../tsconfig.json" */ })
        ]
    },
    // 是否提示size优化
    performance : {
        hints : false
    },
    // 展示哪些东西
    stats: {
        // One of the two if I remember right
        entrypoints: false,
        children: false
    }
};
