const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {

    let config = {
        mode: 'none',
        entry: {
            viewer: './src/viewer.ts',
            config: './src/config.ts',
            live_config: './src/live_config.ts'
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {}
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [new webpack.HotModuleReplacementPlugin()],
        devtool: "source-map",
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        externals: {
            jquery: 'jQuery',
            twitch: 'window.Twitch.ext'
        }
    }

    if (env.mode === "dev") {
        config.devServer = {
            contentBase: [path.join(__dirname, 'views'), path.join(__dirname, 'dist')],
            watchContentBase: true,
            host: env.devrig ? 'localhost.rig.twitch.tv' : 'localhost',
            https: {
                key: fs.readFileSync(path.resolve(__dirname, 'conf/server.key')),
                cert: fs.readFileSync(path.resolve(__dirname, 'conf/server.crt'))
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            port: 8080
        }
    }

    return config;
}
