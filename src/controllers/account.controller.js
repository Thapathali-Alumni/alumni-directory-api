const AccountStore = require('../stores/account.store');

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
}

module.exports = new AccountController();