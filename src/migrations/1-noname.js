'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "departments", deps: []
 * createTable "users", deps: []
 * createTable "programs", deps: [departments]
 * createTable "batches", deps: [programs]
 * createTable "members", deps: [batches]
 * createTable "refresh_tokens", deps: [users]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2020-08-02T07:31:44.409Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "departments",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name",
                        "allowNull": false
                    },
                    "nameNepali": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "name_nepali"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "users",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "username": {
                        "type": Sequelize.STRING,
                        "field": "username",
                        "unique": true,
                        "allowNull": false
                    },
                    "password": {
                        "type": Sequelize.STRING,
                        "field": "password",
                        "allowNull": false
                    },
                    "memberId": {
                        "type": Sequelize.INTEGER,
                        "field": "member_id"
                    },
                    "role": {
                        "type": Sequelize.STRING,
                        "field": "role"
                    },
                    "verificationToken": {
                        "type": Sequelize.STRING,
                        "field": "verification_token"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "programs",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name"
                    },
                    "nameNepali": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "name_nepali"
                    },
                    "startDate": {
                        "type": Sequelize.DATE,
                        "field": "start_date"
                    },
                    "endDate": {
                        "type": Sequelize.DATE,
                        "field": "end_date"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "DepartmentId": {
                        "type": Sequelize.INTEGER,
                        "field": "department_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "departments",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "batches",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name",
                        "allowNull": false
                    },
                    "nameNepali": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "name_nepali"
                    },
                    "startDate": {
                        "type": Sequelize.DATE,
                        "field": "start_date"
                    },
                    "endDate": {
                        "type": Sequelize.DATE,
                        "field": "end_date"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "ProgramId": {
                        "type": Sequelize.INTEGER,
                        "field": "program_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "programs",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "members",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "first_name"
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "allowNull": false,
                        "field": "last_name"
                    },
                    "firstNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "first_name_nepali"
                    },
                    "lastNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "last_name_nepali"
                    },
                    "dob": {
                        "type": Sequelize.DATEONLY,
                        "field": "dob"
                    },
                    "startDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "start_date"
                    },
                    "endDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "end_date"
                    },
                    "photoUrl": {
                        "type": Sequelize.STRING,
                        "field": "photo_url"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "email": {
                        "type": Sequelize.STRING,
                        "field": "email"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "BatchId": {
                        "type": Sequelize.INTEGER,
                        "field": "batch_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "batches",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "refresh_tokens",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "token": {
                        "type": Sequelize.STRING,
                        "field": "token"
                    },
                    "expiryDate": {
                        "type": Sequelize.DATE,
                        "field": "expiry_date"
                    },
                    "createdByIp": {
                        "type": Sequelize.STRING,
                        "field": "created_by_ip"
                    },
                    "revokedDate": {
                        "type": Sequelize.DATE,
                        "field": "revoked_date"
                    },
                    "revokedByIp": {
                        "type": Sequelize.STRING,
                        "field": "revoked_by_ip"
                    },
                    "replacedByToken": {
                        "type": Sequelize.STRING,
                        "field": "replaced_by_token"
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "field": "user_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "users",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["batches", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["departments", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["members", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["programs", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["refresh_tokens", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["users", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
