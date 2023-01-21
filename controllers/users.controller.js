/**
 * Module dependencies
 */

const User = require("../services/User.service");
const { encrypt } = require("../utils/helpers/handleBcrypt");

/**
 * Exports
 */

exports.user = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  getIndex: function (req, res, next) {
    res.send("respond with a resource");
  },
};

exports.login = {
  /**
   * GET /users/login controller
   * @param {*} req 
   * @param {*} res 
   */
  getIndex: function (req, res) {
    res.status(200).render("login", { user: req.session.user });
  },
  /**
   * POST /users/login controller
   * @param {*} req 
   * @param {*} res 
   */
  postLogin: (req, res) => {
    const { email, password } = req.body;
    const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress)
                  .slice(0,9);

    

    User.verifyForm(email, password)
      .then((user) => {
        res.cookie("userId", user._id, { maxAge: 1000 * 60 * 5 });
        req.session.user = user;
        res.redirect(302, "/");
      })
      .catch((err) => {
        res.render("error", {
          message: err,
          user: undefined,
          error: { status: 403, stack: "Incorrect", path: "/users/login" },
        });
      });
  },
};

exports.register = {
  getIndex: function (req, res, next) {
    res.status(200).render("register", { user: undefined });
  },
  postIndex: function (req, res, next) {
    /**
     * POST /users/register
     * Take the data from the request, encode the password and create the user
     */
    const { name, username, password, email, repeated_password } = req.body;
    if (password === repeated_password) {
      encrypt(password)
        .then((passwordHashed) => {
          return passwordHashed;
        })
        .then((realPassword) => {
          // TODO: Verify if the user already exists
          User.createInDB({
            email,
            name,
            username,
            password: realPassword,
          }).then((user) => {
            // Completed: req.sessions && res.cookies
            res.cookie("userId", user._id.toString(), {
              maxAge: 1000 * 60 * 5,
            });
            req.session.user = user;
            res.redirect(302, "/");
          });
        })
        .catch((error) => next(error));
    } else {
      throw new Error("The password fields doesn't match");
    }
  },
};
