const webpack = require('webpack');

module.exports = {
  entry: './app/app.ts',
  node: {
    __dirname: true
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'app.js'
  },
  resolveLoader: {
    moduleDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    root: __dirname
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'ts-loader',
        include: [
          `${__dirname}/app`
        ]
      },
      {
        test: /\.html$/,
        loader: 'ng-cache-loader?',
        include: [
          `${__dirname}/app`
        ]
      },
      {
        test: /\.scss/,
        loaders: ['style-loader', 'css-loader?minimize', 'sass-loader'],
        include: [
          `${__dirname}/app`
        ]
      }
    ]
  }
};
