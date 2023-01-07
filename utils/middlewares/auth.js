/**
 * Authentication and Authorization middleware
 * - Used for verify the session
 * @description 
 * - Verify if the request have sessions and cookies attached
 * - If true, we will verify the user and the cookieId to give res.locals.user the current user
 * - Else we will next with res.locals.user = undefined
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = function(req, res, next) {
    // TODO: authentication about all users
    // TODO: Verify the user
    if (req.session.user !== undefined && req.cookies.userId !== undefined) {
        // Verify the user with the cookieId
        res.locals.user = user;
    }else{
        res.locals.user = undefined;
    }
    next();
};

// exports.auth = function(req, res, next) {
//     if(req.cookies.userId !== undefined && req.session.user !== undefined) {
//       let cookieId = req.cookies.userId;
//       let user = userModel.verifyId(cookieId) && userModel.getUserById(cookieId);
//       res.locals.user = user;
//       res.locals.title = "Mi aplicacion";
//     } else {
//       res.locals.user = undefined;
//       res.locals.title = "No esta logeado";
//     }
//     // Debe estar afuera de todo, o debe estar en cada uno
//     next();
//   })