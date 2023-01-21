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
router.get('/login', login.getIndex);
router.post('/login', login.postLogin);

// register
router.get('/register', register.getIndex);
router.post('/register', register.postIndex);


/**
 * Exports
 */
module.exports = router;
