/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const {Schema, model} = mongoose;


/**
 * Mount schema
 */
const Sch_Users = new Schema({
    email: String,
    password: String,
    newsletter: Boolean,
    username: String,
    name: String,
    isAdmin: Boolean,
    comments: [String],
});


/**
 * Mount models
 */
const M_Users = model('users', Sch_Users);

/**
 * Exports
 */
module.exports = M_Users;