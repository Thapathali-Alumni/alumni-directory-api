const express = require('express');
const ctrl = require('../controllers/batch.controller');
const authorize = require('../helpers/authorize');
const router = express.Router();
const Role = require('../models/role')


router
    .route('/')
    .get(ctrl.list)
    /** POST /api/batchs Create new batch */
    .post(authorize(Role.Admin), ctrl.create);


router.route('/:id')
    .get(ctrl.get)
    .put(authorize(Role.Admin), ctrl.update)
    .delete(authorize(Role.Admin), ctrl.remove);



/**
 * @swagger
 * path:
 *  /batch:
 *    get:
 *      summary: Gets a list of all batches limited by page and pagesize
 *      tags: [Batch]
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
 *          description: Got the batchs
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '#/components/schemas/Batch'
 */

/**
 * @swagger
 * path:
 *  /batch:
 *    post:
 *      summary: Creates Batch
 *      tags: [Batch]
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
 *                  - ProgramId
 *              properties:
 *                  name:
 *                      type: string
 *                  nameNepali:
 *                      type: string
 *                  description:
 *                      type: string
 *                  startDate:
 *                      type: string
 *                      format: date-time
 *                  endDate:
 *                      type: string
 *                      format: date-time
 *                  ProgramId:
 *                      type: integer
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Batch'
 */

/**
 * @swagger
 * path:
 *  /batch/{id}:
 *    get:
 *      summary: Gets a batch by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Batch]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of batch"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Batch'
 */


/**
 * @swagger
 * path:
 *  /batch/{id}:
 *    put:
 *      summary: Updates the batch
 *      tags: [Batch]
 *      security:
 *          - BearerAuth: []
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of batch"
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
 *                  startDate:
 *                      type: string
 *                      format: date-time
 *                  endDate:
 *                      type: string
 *                      format: date-time
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Batch'
 */

/**
 * @swagger
 * path:
 *  /batch/{id}:
 *    delete:
 *      summary: Deletes a batch by id
 *      security:
 *          - BearerAuth: []
 *      tags: [Batch]
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id of batch"
 *            required: true
 *            type: "integer"
 *            format: "int64"
 *      responses:
 *        "200":
 *          description: successful message is successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Batch'
 */


module.exports = router;