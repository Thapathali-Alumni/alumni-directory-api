const Sequelize = require("sequelize");

class Program extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            nameNepali: {
                type: DataTypes.STRING,
                field: 'name_nepali',
                allowNull: false
            },
            startDate: {
                type: DataTypes.DATE,
                field: 'start_date'
            },
            endDate: {
                type: DataTypes.DATE,
                field: 'end_date'
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
        this.belongsTo(models.Department);
        this.hasMany(models.Batch);
    }
}

module.exports = Program