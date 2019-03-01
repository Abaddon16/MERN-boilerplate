const mongoose = require('mongoose');
const config = require('../config/config');//loads configs from file, currently contains only DB information

const mernboiler = mongoose.createConnection(config.mernboiler);
const larunaCM = mongoose.createConnection(config.larunaCM);

module.exports = {
	mernboiler: mernboiler,
	larunaCM: larunaCM
}