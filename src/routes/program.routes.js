const express = require('express');
const ctrl = require('../controllers/program.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(ctrl.list)
    /** POST /api/programs Create new program */
    .post(authorize(Role.Admin), ctrl.create);


router.route('/:id')
    .get(ctrl.get)
    /** PUT /api/users/:userId - Update user */
    .put(authorize(Role.Admin), ctrl.update)
    /** DELETE /api/users/:userId - Delete user */
    .delete(authorize(Role.Admin), ctrl.remove);



/**
 * @swagger
 * path:
 *  /program:
 *    get:
 *      summary: Gets a list of all programs limited by page and pagesize
 *      security:
 *          - BearerAuth: []
 *      tags: [Program]
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
 *          description: Got the programs
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/Program'
 */

/**
 * @swagger
 * path:
 *  /program:
 *    post:
 *      summary: Creates Program
 *      tags: [Program]
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
 *                  - DepartmentId
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *                  DepartmentId:
 *                      type: integer
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Program'
 */

/**
 * @swagger
 * path:
 *  /program/{id}:
 *    get:
 *      summary: Gets a program by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Program]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of program"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Program'
 */


/**
 * @swagger
 * path:
 *  /program/{id}:
 *    put:
 *      summary: Updates the program
 *      tags: [Program]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of program"
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
 *                $ref: '#/components/schemas/Program'
 */

/**
 * @swagger
 * path:
 *  /program/{id}:
 *    delete:
 *      summary: Deletes a program by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Program]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of program"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Program'
 */


module.exports = router;