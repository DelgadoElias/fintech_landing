/**
 * Module dependencies
 */

const express = require('express');
const { user, login, register } = require('../controllers/users.controller');


/**
 * Mount router
 */
const router = express.Router();

/**
 * Mount routes
 */
router.get('/', user.getIndex);

// login
router.get('/login', login.getIndex)

// register
router.get('/register', register.getIndex)


/**
 * Exports
 */
module.exports = router;
