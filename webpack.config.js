const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ReactRefreshTypeScript = require("react-refresh-typescript");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * Returns the configuration that Webpack should use.
 *
 * @param {object} env
 * @param {boolean} env.production Indicates whether this is a production build or not.
 * @param {boolean} env.analyze Indicates whether the bundle analyzer should be run for this build or not.
 */
module.exports = (env) => {
    // For the fast refresh plugin we need to know if we're creating a development build or not.
    const isDevelopment = env.production ? false : true;

    // Set the node env so that tailwind purges unused styles correctly on production.
    process.env.NODE_ENV = env.production ? "production" : "development";

    return {
        // Where the application starts and where Webpack should begin bundling files.
        entry: "./src/index.tsx",
        // Indicates the environment we are in. This is used by Webpack to determine what built-in optimizations are used.
        mode: env.production ? "production" : "development",
        // The module object defines how our exported JavaScript modules are transformed according to the rules.
        module: {
            rules: [
                // Tell Webpack to transform our ES6 and JSX with babel/env.
                // In the exclude, we're letting Webpack know to ignore the node_modules directory.
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] },
                },
                // Transforms our CSS.
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                // Tell webpack to transform our TSX with ts-loader.
                // Same as with the JSX, we let Webpack know to ignore the node_modules directory.
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: require.resolve("ts-loader"),
                            options: {
                                getCustomTransformers: () => ({
                                    before: isDevelopment
                                        ? [ReactRefreshTypeScript()]
                                        : [],
                                }),
                                // ts-loader does not work with hot module replacement unless the `transpileOnly` property is used.
                                // If you need type checking, `ForkTsCheckerWebpackPlugin` is an alternative.
                                transpileOnly: isDevelopment,
                            },
                        },
                    ],
                },
            ],
        },
        // Specifies the extensions that Webpack should resolve.
        // This allows us to import modules without needing to add their extensions.
        resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
        // Tells Webpack where to put the bundled code.
        // Here we tell Webpack to place it in the dist directory at the root of the project.
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "/dist/",
            filename: "bundle.js",
        },
        // The options for the Webpack dev server.
        // This tells Webpack to serve everything from our public directory to localhost:3000.
        devServer: {
            port: 3000,
            historyApiFallback: true,
        },
        plugins: [
            // The plugins needed to perform "Fast Refresh" which allows us to update components and see the results without refreshing.
            // https://github.com/pmmmwh/react-refresh-webpack-plugin
            isDevelopment && new webpack.HotModuleReplacementPlugin(),
            isDevelopment && new ReactRefreshWebpackPlugin(),
            // The plugin needed to run the Webpack build analyzer to analyze bundle sizes.
            env.analyze && new BundleAnalyzerPlugin(),
        ].filter(Boolean),
    };
};
