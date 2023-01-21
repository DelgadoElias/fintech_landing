/**
 * Module dependencies
 */
const M_Users = require("../models/Users.model");
const { compare } = require("../utils/helpers/handleBcrypt");

function User(email, name, password, username, newsletter = false, isAdmin = false) {
  this.email = email;
  this.name = name;
  this.password = password;
  this.username = username;
  this.newsletter = newsletter;
  this.isAdmin = isAdmin;
  this.comments = [];
}

/**
 * Creates a new MongoDB document and save the new user
 * @param {*} newUser - Contains all the properties to verify and register a new user
 */
User.createInDB = function (newUser) {
  const { email, password, username, name } = newUser;
  const userToSendInDb = new User(email, name, password, username);
  return new Promise((resolve, reject) => {
    M_Users.create({
      ...userToSendInDb,
    })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

/**
 * Verify if the id of the user is already in the database
 * @param {*} id 
 * @returns {Promise} - If promise resolved, returns the user object
 */
User.verifyExists = function(id) {
    M_Users.findById(id, function (err, docs) {
        if (err){
            return false;
        }
        else{
            return true;
        }
    });
}

/**
 * Verify if the id of the user is already in the database
 * @param {*} id 
 * @returns {Promise} - If promise resolved, returns the user object
 */
User.verifyPassword = function(id, password) {
    M_Users.findById(id, function (err, docs) {
        if (!err){
            if(docs.password === password || compare(password, docs.password)) return true;
        }
        else{
            return false;
        }
    });
}

User.getById = function(id, callback) {
    M_Users.findById(id, function (err, docs) {
        if (!err){
            return callback(docs);
        }
        else{
            return callback(undefined);
        }
    });
}

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
User.verifyForm = function(email, password) {
    return new Promise(function(resolve, reject) {
        M_Users.findOne({email}).lean().then((data) => {
            if(compare(password, data.password)){
                // Here I will pass the data to other components
                resolve(data);
            } else {
                reject('The password is incorrect');
            }
        })
    })
}

module.exports = User;
