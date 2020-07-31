const httpStatus = require('http-status');
const db = require('../database/sequelize');
const baseService = require('../services/base.service');
const APIError = require('../helpers/APIError');
const Department = db.Department;


class DepartmentController {

    async create(req, res) {
        try {
            const dept = await new baseService(db.Department).create(req.body);
            res.json(dept);

        } catch (exception) {
            throw exception
        }
    }

    async list(req, res) {

        const page = req.query.page;
        const pageSize = req.query.pageSize;


        const depts = await new baseService(db.Department).list(page, pageSize);
        res.json(depts)
    }


}

module.exports = new DepartmentController()