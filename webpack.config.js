const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public', 'assets'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|\.test\.js$)/,
          loader: ['babel-loader', 'eslint-loader']
        }
      ]
    },
    plugins: [new DotEnv()],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      publicPath: '/assets/',
      historyApiFallback: true
    }
  };
};
