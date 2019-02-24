/*
 * Doctored by: Abaddon16
 * Document Function: 
 *    To facilitate server hot-restarts & clean shutdowns
 * TODO:
 *    Figure out why restarts don't work when I change server code
 */

const nodemon = require('nodemon');
const path = require('path');

nodemon({
  execMap: { js: 'node'},
  script: path.join(__dirname, 'server/server'),
  ignore: [],
  watch: process.env.NODE_ENV !== 'production' ? ['server/*'] : false,
  ext: 'js'
})
.on('restart', function() { console.log('Server restarted!');})
.once('exit', function () {
  console.log('Shutting down server');
  process.exit();
});
