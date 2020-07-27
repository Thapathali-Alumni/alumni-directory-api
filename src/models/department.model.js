const Sequelize = require("sequelize");

class Department extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            nameNepali: DataTypes.STRING,
            description: DataTypes.TEXT
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Program)
    }
}

module.exports = Department