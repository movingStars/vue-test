const path = require('path');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        app:'./src/main.js'
    },
    output:{
        filename:'[name].[chunkhash].bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    plugin:{
        
    }

}