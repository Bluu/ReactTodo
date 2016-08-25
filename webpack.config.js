const WEBPACK = require('webpack');
const PATH = require('path');
const ENV = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  ENV(`${__dirname}/config/${process.env.NODE_ENV}.env`);
} catch (e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new WEBPACK.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new WEBPACK.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new WEBPACK.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      'application-styles': 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      'configure-store': 'app/store/configure-store'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      PATH.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? null : 'cheap-module-eval-source-map'
};
