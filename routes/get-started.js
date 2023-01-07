/**
 * Module dependencies
 */
const express = require('express');
const { getIndex } = require('../controllers/getstarted.controller');

/**
 * Mount router
 */
const router = express.Router();

/**
 * Mount routes
 */
router.get('/', getIndex);

/**
 * Exports
 */
module.exports = router;
