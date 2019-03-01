/*
 * Doctored by: Abaddon16
 * Document Function: Import all api files [require(x)] one-by-one
 */
const fs=require('fs');
const path=require('path');

module.exports=(app) => {
	fs.readdirSync(__dirname+'/api/').forEach((file) => {
		require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);// API routes
	});
};
