/*
 * Doctored by: Abaddon16
 * Document Function: Import all api files via `require(x)` one-by-one
 */
const fs=require('fs');

module.exports=(app) => {
	fs.readdirSync(__dirname+'/api/').forEach((file) => {
		require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);// API routes
	});
};
