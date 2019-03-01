/*
 * Doctored by: Abaddon16
 * Document Function: To facilitate server hot-restarts & clean shutdowns
 * TODO: Figure out why restarts don't work when I change server code
 */

const nodemon = require('nodemon');//manages auto-restarts of servers
const path = require('path');

nodemon({
	execMap: { js: 'node' },//command to execute
	script: path.join(__dirname, 'server/server'),//script to run on restart
	ignore: [],
	watch: process.env.NODE_ENV !== 'production' ? ['server/*'] : false,//check if production; if yes, don't monitor anything
	ext: 'js'
})
	.on('restart', function () { console.log('Server restarted!'); })
	.once('exit', function () {
		console.log('Shutting down server');
		process.exit();
	});
