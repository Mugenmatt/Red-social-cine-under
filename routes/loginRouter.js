const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

// GET Login
router.get('/login', loginController.index);

module.exports = router;