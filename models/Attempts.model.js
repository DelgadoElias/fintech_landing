/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const {Schema, model} = mongoose;


/**
 * Mount schema
 */
const Sch_Attempts = new Schema({
    ip: String,
    numberOfAttempts: Number,
    consecutiveAttempts: Number,
});


/**
 * Mount models
 */
const M_Attempts = model('attempts', Sch_Attempts);

/**
 * Exports
 */
module.exports = M_Attempts;