/**
 * Module dependencies
 */
const bcrypt = require('bcrypt');

/**
 * Exports
 * TODO: Make promises here
 */
module.exports = {
    /**
     * Require a text and returns a encoded text with bcryptjs library
     * @param {*} text - The text to encode with the library
     * @return {Promise} 
     * - Resolves with the encoded text
     * - Rejects with an error message
     */
    encrypt: function (text) {
        return new Promise(function (resolve, reject) {
            bcrypt.hash(text, 10).then((result) => {
                return resolve(result);
            })
            .catch((err) => reject(err));
        })
    },
    /**
     * Compares two strings and returns if they match with the bcrypt metho
     * @param {*} plainText - Normal string
     * @param {*} hashText - Encoded string (ussually a password)
     * @return {boolean} - True if they match. False otherwise
     */
    compare: function (plainText, hashText) {
        return bcrypt.compareSync(plainText, hashText)
    }
}