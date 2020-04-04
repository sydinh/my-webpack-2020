const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = function ({ env, addon }) {
    const envConfig = require(`./webpack.${env}.js`);

    return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};

function getAddons(addonsArgs) {
    const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

    return addons
        .filter(Boolean)
        .map((name) => require(`./addons/webpack.${name}.js`));
}
