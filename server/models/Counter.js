/*
 * Doctored by: Abaddon16
 * Document Function: Define the Mongoose schema for Counter
 */
const mongoose=require('mongoose');
const db=require('../db').mernboiler;

const CounterSchema=new mongoose.Schema({
	count: {
		type: Number,
		default: 0
	}
});

module.exports=db.model('Counter', CounterSchema, 'counters');//* db.model(<ModelName>, <Schema>, <collectionName>);
