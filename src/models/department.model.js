const Sequelize = require("sequelize");

class Department extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nameNepali: {
                type: DataTypes.STRING,
                field: 'name_nepali',
                allowNull: false
            },
            description: DataTypes.TEXT
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'

        });
    }

    static associate(models) {
        this.hasMany(models.Program)
    }
}

module.exports = Department