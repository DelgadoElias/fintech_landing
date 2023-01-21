/**
 * Module dependencies
 */

const M_Attempts = require("../models/Attempts.model");

function Attempts(ip, numberOfAttempts) {
  this.ip = ip;
  this.numberOfAttempts = numberOfAttempts;
}

/**
 * Increments the numberOfAttemps and  the number of consecutive attempts to login in the database.
 * with the current ip
 * @param {*} ip - The IP address to review 
 * @returns - JSON Object of the MongoDb document
 */
Attempts.increment = function (ip) {
  return new Promise(function (resolve, reject) {
    M_Attempts.findOne({ ip })
      .lean()
      .then((objectInDb) => {
        M_Attempts.findOneAndUpdate(
          { ip },
          {
            numberOfAttempts: objectInDb.numberOfAttempts + 1,
            consecutiveAttempts: objectInDb.consecutiveAttempts + 1,
          }
        );
      })
      .lean()
      .then((returnData) => {
        resolve(returnData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

Attempts.setZero = function (ip) {
  return new Promise(function (resolve, reject) {
    M_Attempts.findOne({ ip })
      .lean()
      .then((objectInDb) => {
        M_Attempts.findOneAndUpdate(
          { ip },
          {
            numberOfAttempts: objectInDb.numberOfAttempts + 1,
            consecutiveAttempts: 0,
          }
        )
          .lean()
          .then((data) => {
            resolve(data);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
