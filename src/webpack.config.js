
module.export = {
    entry: {
        index: "./js/index"
     },
     output: {
         filename: "[name].js"
     },
     devtool: "source-map",
     resolve: {
         extenstions: [".js"]
     },
     module: {
         loader: [
             {
                 test: /\.js$/,
                 loader: "babel",
                 exclude: "node_modules",
                 query: {
                     presets: ["es2015"]
                 }
             }
         ]
     }
}