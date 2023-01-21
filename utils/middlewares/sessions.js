/**
 * Manage the sessions of the application.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function(req, res, next) {
    if(req.session.user !== undefined){
        res.locals.user = req.session.user;
    } 
    next();
}