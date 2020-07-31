const express = require('express');
const deptCtrl = require('../controllers/department.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(deptCtrl.list)
    /** POST /api/departments Create new department */
    .post(deptCtrl.create);

/**
 * @swagger
 * path:
 *  /department:
 *    get:
 *      summary: Gets a list of all departments limited by page and pagesize
 *      security:
 *          - BearerAuth: []
 *      tags: [Department]
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            default: 0
 *          description: Page number to start from default is 0
 *        - in: query
 *          name: pageSize
 *          schema:
 *            type: integer
 *            default: 30
 *          description: Limit the number of items in each page. Default is 30
 *      responses:
 *        "200":
 *          description: Got the departments
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/Department'
 */

/**
 * @swagger
 * path:
 *  /department:
 *    post:
 *      summary: Creates Department
 *      tags: [Department]
 *      security:
 *          - BearerAuth: []           
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - name
 *                  - nameNepali
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Department'
 */


module.exports = router;