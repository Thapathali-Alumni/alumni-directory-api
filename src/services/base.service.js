const db = require('../database/sequelize');
const APIError = require('../helpers/APIError');

const {
    paginate
} = require('../helpers/dbUtils');



class BaseService {

    constructor(dbModel) {
        this.model = dbModel;
    }

    async list(page, pageSize, include = []) {
        const obj = await this.model.findAll({
            include: include,
            ...paginate({
                page,
                pageSize
            })
        });

        return obj;
    }

    async count() {
        return await this.dbModel.count();
    }

    async getOne(id, include = []) {
        const obj = await this.model.findByPk(id, {
            include: include
        });
        return obj;
    }

    async create(params) {
        const mObj = await this.model.create(params);
        return mObj;
    }

    async update(id, params) {
        const mObj = await this.model.update(params, {
            returning: true,
            where: {
                id: id
            }
        });

        return mObj;
    }


    async delete(id) {
        const mObj = await this.model.findByPk(id);
        await mObj.destroy();
    }



}

module.exports = BaseService;