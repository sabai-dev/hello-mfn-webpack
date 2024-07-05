1. install html-webpack-plugin nodemon webpack webpack-cli webpack-dev-server
2. add folder public/index.html src/index.js
    index.html
    <!DOCTYPE html>
    <html>
        <head></head>

        <body></body>
    </html>
    Note: by using htmlWebpackPlugin it will inject index.js into this html

3. add webpack.config.json
Ex. webpack.config.json
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.export = {
        mode: 'development',
        devServer: {
            port: 8080

        },
        plugin: [
            new HtmlWebpackPlugin({
                template: './public/inde.html',
            }),

        ]
    }

4. got package.json at script path, add
    "start": "webpack serve"