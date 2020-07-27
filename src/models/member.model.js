const Sequelize = require("sequelize");

class Member extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            firstNameNepali: DataTypes.STRING,
            lastNameNepali: DataTypes.STRING,
            dob: DataTypes.DATEONLY,
            startDate: DataTypes.DATEONLY,
            endDate: DataTypes.DATEONLY,
            photoUrl: DataTypes.STRING,
            description: DataTypes.TEXT,
            email: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.Batch);
    }
}

module.exports = Member