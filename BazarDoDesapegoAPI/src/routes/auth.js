
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
//router.get('/me', require('../middleware/auth'), authController.getMe);
router.get('/all', require('../middleware/auth'), authController.getAllUsers);
//router.get('/all', authController.getAllUsers);


module.exports = router;