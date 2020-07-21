const express = require('express');
const AccountController = require('../controllers/account.controller')
const unauth = express.Router()

unauth
    .get('/account/register', AccountController.register)
    .get('/account/login', AccountController.getAll)

module.exports = unauth