// import commonjsVariables from 'commonjs-variables-for-esmodules';
 
// const {
//     __filename,
//     __dirname,
//     require,
//     module 
// } = commonjsVariables(import.meta);

const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve('./scripts/index.js'),
    output: {
        path: path.resolve('dist'),
        clean: true,
        filename: '[name].[contenthash].js'
    }
}