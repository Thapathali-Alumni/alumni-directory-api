const express = require('express');
const AccountController = require('../controllers/account.controller')
const unauth = express.Router()

unauth.get('/account/register', AccountController.register)

/**
 * @swagger
 * path:
 *  /account/login:
 *    post:
 *      summary: Authenticates and logs in
 *      tags: [Account]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - username
 *                  - password
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *      responses:
 *        "200":
 *          description: Jwt and user info if successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Account'
 */
unauth.post('/account/login', AccountController.login)

module.exports = unauth