/*
 * Doctored by: Abaddon16
 * Document Function:
 *    - Implement server functionality (compile, render, route, auth, deliver)
 *    - Start up the needed scripts
 */

const express = require('express');
//const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');// prevents some issues with people pressing refresh when webpages aren't meant to be directly refreshed
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');// module bundler, bundles files into single `bundle.js`; shrinks code, minification
const webpackDevMiddleware = require('webpack-dev-middleware');// allows on-the-fly recompilation?
const webpackHotMiddleware = require('webpack-hot-middleware');// allows hot reloading of your data on compilation events

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;

// Connect, set up Mongoose
mongoose.connect(isDev?config.db_dev:config.db);
mongoose.Promise = global.Promise;

/** 
 * The Express application; top-level function
 */ 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*
 * Imports the `routes` file, tells Express what to do with
 * items that come through with specific URIs
 */
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);
  app.use(historyApiFallback({verbose: false}));
  /**
   * Enables
   */
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true, hash: false,
      timings: true, chunks: false,
      chunkModules: false, modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '127.0.0.1', (err) => {
  if (err) console.log(err);
  console.info('>>> 🌎   Open http://127.0.0.1:%s/ in your browser.', port);
});

module.exports = app;
