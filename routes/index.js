/**
 * Module dependencies
 */
const express = require('express');
const { get_index } = require('../controllers/index.controller');

/**
 * Mount router
 */
const router = express.Router();

/**
 * Mount routes
 */
router.get('/', get_index);

/**
 * Exports
 */
module.exports = router;
