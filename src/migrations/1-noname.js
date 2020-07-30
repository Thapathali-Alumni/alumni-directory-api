'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Departments", deps: []
 * createTable "Users", deps: []
 * createTable "Programs", deps: [Departments]
 * createTable "Batches", deps: [Programs]
 * createTable "Members", deps: [Batches]
 * createTable "RefreshTokens", deps: [Users]
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2020-07-30T04:54:01.576Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Departments",
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
                        "field": "nameNepali"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
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
                "Users",
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
                        "field": "memberId"
                    },
                    "role": {
                        "type": Sequelize.STRING,
                        "field": "role"
                    },
                    "verificationToken": {
                        "type": Sequelize.STRING,
                        "field": "verificationToken"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
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
                "Programs",
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
                        "field": "nameNepali"
                    },
                    "startDate": {
                        "type": Sequelize.DATE,
                        "field": "startDate"
                    },
                    "endDate": {
                        "type": Sequelize.DATE,
                        "field": "endDate"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "DepartmentId": {
                        "type": Sequelize.INTEGER,
                        "field": "DepartmentId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Departments",
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
                "Batches",
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
                        "field": "nameNepali"
                    },
                    "startDate": {
                        "type": Sequelize.DATE,
                        "field": "startDate"
                    },
                    "endDate": {
                        "type": Sequelize.DATE,
                        "field": "endDate"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "ProgramId": {
                        "type": Sequelize.INTEGER,
                        "field": "ProgramId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Programs",
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
                "Members",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "field": "firstName"
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "field": "lastName"
                    },
                    "firstNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "firstNameNepali"
                    },
                    "lastNameNepali": {
                        "type": Sequelize.STRING,
                        "field": "lastNameNepali"
                    },
                    "dob": {
                        "type": Sequelize.DATEONLY,
                        "field": "dob"
                    },
                    "startDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "startDate"
                    },
                    "endDate": {
                        "type": Sequelize.DATEONLY,
                        "field": "endDate"
                    },
                    "photoUrl": {
                        "type": Sequelize.STRING,
                        "field": "photoUrl"
                    },
                    "description": {
                        "type": Sequelize.TEXT,
                        "field": "description"
                    },
                    "email": {
                        "type": Sequelize.STRING,
                        "field": "email"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "BatchId": {
                        "type": Sequelize.INTEGER,
                        "field": "BatchId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Batches",
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
                "RefreshTokens",
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
                        "field": "expiryDate"
                    },
                    "createdByIp": {
                        "type": Sequelize.STRING,
                        "field": "createdByIp"
                    },
                    "revokedDate": {
                        "type": Sequelize.DATE,
                        "field": "revokedDate"
                    },
                    "revokedByIp": {
                        "type": Sequelize.STRING,
                        "field": "revokedByIp"
                    },
                    "replacedByToken": {
                        "type": Sequelize.STRING,
                        "field": "replacedByToken"
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    },
                    "UserId": {
                        "type": Sequelize.INTEGER,
                        "field": "UserId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Users",
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
            params: ["Batches", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Departments", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Members", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Programs", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["RefreshTokens", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Users", {
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
