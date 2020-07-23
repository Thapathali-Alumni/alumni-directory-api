const AccountStore = require('../stores/account.store');
const account = require('../models/account')

class AccountController {

    async register(req, res) {
        try {
            let payload = await AccountStore.register(req);
            res.send(payload);
        } catch (exception) {
            res.status(500).send(exception)
        }
    }


    async getAll(req, res) {
        try {
            let payload = await AccountStore.register(req);
            res.send(payload);
        } catch (exception) {
            res.status(500).send(exception)
        }
    }


    async login(req, res) {
        try {
            let payload = await AccountStore.register(req);
            payload.jwt = 'RANDOMJWTTOKENWITHNOSENSE';
            payload.user = new account('Name', 'admin', 'email@email.com', 'https://photo.com')
            res.send(payload);
        } catch (exception) {
            res.status(500).send(exception)
        }
    }
}

module.exports = new AccountController();