const express = require('express');
const UserController = require('../Controller/UserController');

const router = express.Router();

router.post('/registerUser', UserController.registerUser);
router.post('/loginUser', UserController.loginUser);

module.exports=router;
