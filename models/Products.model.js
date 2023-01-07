/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const {Schema, model} = mongoose;


/**
 * Mount schema
 */
const Sch_Minimal = new Schema({
    name: String,
    price: Number,
    description: String,
    Billing: {
        type: String,
        enum: ['anually', 'monthly', 'weekly'],
        default: 'monthly',
    },
});


/**
 * Mount models
 */
const M_Products = model('products', Sch_Minimal);

/**
 * Exports
 */
module.exports = M_Products;