const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const db = require('../database/sequelize');
const Role = require('../models/role');
const APIError = require('../helpers/APIError');


class UserService {
    async authenticate(
        uName,
        password,
        ipAddress
    ) {
        const user = await db.User.findOne({
            where: {
                username: uName
            }
        });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new APIError('Authentication error, Username or password did not match', httpStatus.UNAUTHORIZED, true)
        }

        const token = this.generateToken(user);
        const refreshToken = this.generateRefreshToken(user, ipAddress);

        //Save refresh token
        await refreshToken.save();

        return {
            ...this.basicDetails(user),
            token,
            refreshToken: refreshToken.token
        };
    }


    async register(params, origin) {
        // validate
        if (await db.User.findOne({
                where: {
                    username: params.username
                }
            })) {
            // send already registered error in email to prevent account enumeration
            // return await sendAlreadyRegisteredEmail(params.email, origin);
        }

        // create account object
        const user = db.User.build(params);

        // first registered account is an admin
        const isFirstAccount = (await db.User.count()) === 0;
        user.role = isFirstAccount ? Role.Admin : Role.User;
        user.verificationToken = this.randomTokenString();
        // hash password
        user.password = this.hash(params.password);
        // save account
        await user.save();
        // send email
        // await sendVerificationEmail(account, origin);
    }

    generateToken(user) {
        return jwt.sign({
            id: user.id
        }, config.jwtSecret, {
            expiresIn: '15m'
        });
    }

    generateRefreshToken(user, ipAddress) {
        return db.RefreshToken.build({
            UserId: user.Id,
            token: this.randomTokenString(),
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            createdByIp: ipAddress
        });

    }

    randomTokenString() {
        return crypto.randomBytes(40).toString('hex');
    }

    basicDetails(user) {
        const {
            id,
            username,
            role
        } = user;
        return {
            id,
            username,
            role
        };
    }

    hash(password) {
        return bcrypt.hashSync(password, 10);
    }

}

module.exports = new UserService();