const mongoose=require('mongoose');
const config=require('../config/config');//loads configs from file, currently contains only DB information

const mernboiler=mongoose.createConnection(config.mernboiler);

module.exports={
	mernboiler: mernboiler
}