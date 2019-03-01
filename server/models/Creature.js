



const mongoose = require('mongoose');
const db = require('../db').larunaCM;

const Schema = new mongoose.Schema({
	name: {
		type: String
	}
});
Schema.set('versionKey', false);

//! ###############################################
module.exports = db.model('Creature', Schema);//! This string *MUST* be a name of a collection in the `db` database. Must. Must. Must. MUST BE.
//! ###############################################