/**
 * Module dependencies
 */


/**
 * Exports
 */
module.exports = {
    getIndex: function(req, res, next) {
        res.render('get-started', { user: undefined});
    }
};