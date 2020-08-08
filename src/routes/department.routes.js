const express = require('express');
const deptCtrl = require('../controllers/department.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(deptCtrl.list)
    /** POST /api/departments Create new department */
    .post(authorize(Role.Admin), deptCtrl.create);

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

/**
 * @swagger
 * path:
 *  /department/{id}:
 *    get:
 *      summary: Gets a department by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Department]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of department"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Department'
 */


/**
 * @swagger
 * path:
 *  /department/{id}:
 *    put:
 *      summary: Updates the department
 *      tags: [Department]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of department"
 *            required: true
 *            type: "integer"
 *            format: "int64"          
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

/**
 * @swagger
 * path:
 *  /department/{id}:
 *    delete:
 *      summary: Deletes a department by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Department]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of department"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Department'
 */


router.route('/:id')
    .get(deptCtrl.get)
    /** PUT /api/users/:userId - Update user */
    .put(authorize(Role.Admin), deptCtrl.update)
    /** DELETE /api/users/:userId - Delete user */
    .delete(authorize(Role.Admin), deptCtrl.remove);





module.exports = router;