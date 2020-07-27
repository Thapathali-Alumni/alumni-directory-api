"use strict"
const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../config/config');
const userService = require('../services/user.service');

class AuthController {
    async login(req, res, next) {
        const {
            username,
            password
        } = req.body;
        const ipAddress = req.ip || req.headers['x-real-ip'] || req.connection.remoteAddress;

        try {
            const userInfo = await userService.authenticate(username, password, ipAddress);
            res.json(userInfo)
        } catch (exception) {
            return next(exception);
        }

    }
}

module.exports = new AuthController();