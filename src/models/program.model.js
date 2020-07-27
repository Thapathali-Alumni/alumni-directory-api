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
            nameNepali: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            description: DataTypes.TEXT
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Department);
        this.hasMany(models.Batch);
    }
}

module.exports = Program