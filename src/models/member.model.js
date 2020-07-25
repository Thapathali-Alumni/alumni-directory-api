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
            batchId: DataTypes.INTEGER,
            departmentId: DataTypes.INTEGER,
            programId: DataTypes.INTEGER,
            startDate: DataTypes.DATEONLY,
            endDate: DataTypes.DATEONLY,
            photoUrl: DataTypes.STRING,
            description: DataTypes.TEXT
        }, {
            sequelize
        });
    }

    // static associate(models) {
    //     this.myAssociation = this.belongsTo(models.OtherModel);
    //     // or
    //     this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
    //   }
}

module.exports = Member