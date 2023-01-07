/**
 * Module dependencies
 */


/**
 * Exports
 */
module.exports = {
    getIndex: function(req, res, next) {
        res.render('about', { user: undefined});
    }
};