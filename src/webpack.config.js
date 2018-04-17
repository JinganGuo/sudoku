const path = require('path');

module.exports = {
    entry: {
        index: "./js/index"
    },
    output: {
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            },
            exclude: [
                path.resolve(__dirname, "node_modules")
            ]
        }]
    }
}