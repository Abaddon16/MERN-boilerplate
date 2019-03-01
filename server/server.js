/*
 * Doctored by: Abaddon16
 * Document Function:
 *    - Coalesce server functionality (compile, render, route, auth, deliver)
 *    - Start up the needed scripts
 */

const express=require('express');//web applicaiton framework
const historyApiFallback=require('connect-history-api-fallback');// prevents issues with refreshing webpages not meant to be directly refreshed
const path=require('path');
const webpack=require('webpack');// module bundler, bundles files into single `*.js`; shrinks code, minification
const webpackDevMiddleware=require('webpack-dev-middleware');// allows on-the-fly recompilation?
const webpackHotMiddleware=require('webpack-hot-middleware');// allows hot reloading of your data on compilation events?
const webpackConfig=require('../webpack.config');//loads webpack.config which checks the environment variable and loads prod vs. dev

require('./db');
const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('./routes')(app);

if (process.env.NODE_ENV!=='production') {
	const compiler=webpack(webpackConfig);
	app.use(historyApiFallback({verbose: false}));
	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		contentBase: path.resolve(__dirname, '../client/public'),
		stats: {colors: true, hash: false, timings: true, chunks: false, chunkModules: false, modules: false}
	}));

	app.use(webpackHotMiddleware(compiler));
	app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
	app.use(express.static(path.resolve(__dirname, '../dist')));
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname, '../dist/index.html'));
		res.end();
	});
}

const port=process.env.PORT||8080;
app.listen(port, '127.0.0.1', (err) => {
	if (err) console.log(err);
	console.info('>>> 🌎   Open http://127.0.0.1:%s/ in your browser.', port);
});

module.exports=app;
