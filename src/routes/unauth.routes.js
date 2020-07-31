const express = require('express');
const validator = require('express-validation');
const Joi = require('joi');

const unauth = express.Router();
const authController = require('../controllers/auth.controller');
// POST /api/auth/login
const loginSchema = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    })
};


/**
 * @swagger
 * path:
 *  /login:
 *    post:
 *      summary: Authenticates and logs in
 *      tags: [Login]
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
unauth.post('/login', validator.validate(loginSchema), authController.login)

module.exports = unauth