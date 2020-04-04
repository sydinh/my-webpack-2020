const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',

    devtool: 'eval-source-map',

    plugins: [
        new Dotenv({
            path: './.env.development',
        }),
    ],

    devServer: {
        contentBase: './build',
        open: true,
    },
};
