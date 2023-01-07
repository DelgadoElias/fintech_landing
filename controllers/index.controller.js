/**
 * Module dependencies
 */

/**
 * Exports
 */
module.exports = {
    get_index: (req, res, next) => {
        res.render('index', { title: 'Express', user: undefined });
    }
};