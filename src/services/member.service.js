const BaseService = require("./base.service");
const db = require('../database/sequelize');

class MemberService extends BaseService {

    constructor() {
        super(db.Member);
    }

    async getOne(id, include = []) {
        const attributeRequired = ['id', 'name', 'nameNepali'];
        const obj = await this.model.findByPk(id, {
            include: [{
                model: db.Batch,
                required: true,
                attributes: attributeRequired,
                include: [{
                    model: db.Program,
                    required: true,
                    attributes: attributeRequired,
                    include: [{
                        model: db.Department,
                        required: true,
                        attributes: attributeRequired
                    }]
                }]
            }]
        });
        return obj;
    }




}

module.exports = new MemberService()