const express = require('express');

const router = express.Router();

const registerController = require('../controllers/registerController');

// GET Register
router.get('/register', registerController.index);

module.exports = router;