/*
 * Doctored by: Abaddon16
 * Document Function: Define the mongoose schema for Counter in the MongoDB
 */
const mongoose = require('mongoose');
const db=require('../db').mernboiler;

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

module.exports = db.model('Counter', CounterSchema);
