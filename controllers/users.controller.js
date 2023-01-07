/**
 * Module dependencies
 */


/**
 * Exports
 */

exports.user = {
    getIndex: function(req, res, next) {
        res.send('respond with a resource');
    }
}


exports.login = {
    getIndex: function(req, res, next) {
        res.status(200).render('login',  {user: undefined})
    }
}

exports.register = {
    getIndex: function(req, res, next) {
        res.status(200).render('register',  {user: undefined})
    }
};