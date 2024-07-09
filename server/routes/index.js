const express = require('express');
const router = express.Router();
const { handleUserController, handleUserLogin } = require('../controller/userController');
const { getDashboardData } = require('../controller/dashboardController');



router.post('/register', handleUserController);
router.post('/login', handleUserLogin);

router.get('/dashboard', getDashboardData);

module.exports = router;
