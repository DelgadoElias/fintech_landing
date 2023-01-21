/**
 * Module dependencies
 */
const User = require("../../services/User.service");

/**
 * Authentication and Authorization middleware
 * - Used for verify the session
 * @description 
 * - Verify if the request have sessions and cookies attached
 * - If true, we will verify the user and the cookieId to give res.locals.user the current user
 * - Else If the browser don't have a session or cookies, then just return res.locals.user as it is
 * - In case the user have a session and cookies, we will verify if the info is correct
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function(req, res, next) {
    if (req.session.user !== undefined && req.cookies.userId !== undefined) {
        const cookieId = req.cookies.userId;
        // Compare if the user is the current user via password
        if(User.verifyPassword(cookieId, req.session.user.password)){
            let user = User.verifyExists(cookieId) && User.getById(cookieId);
            res.locals.user = user;
        } else {
            res.locals.user = undefined;
        }
    }else{
        res.locals.user = undefined;
    }
    next();
};