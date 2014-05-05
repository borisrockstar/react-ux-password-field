var config = {
	target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        main: "./source/main"
    },
    output: {
        path: "./build",
        filename: "[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader" },
	        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
			{ test: /\.js$/, loader: "jsx-loader" },
            { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
            { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
            { test: /\.jpg/, loader: "file-loader" },
            { test: /\.js$/, loader: 'sweetjs?modules[]=../macros.sjs'}
        ]
    }
};

module.exports = config;
