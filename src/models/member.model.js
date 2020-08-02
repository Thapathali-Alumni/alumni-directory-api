const Sequelize = require("sequelize");

class Member extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                type: DataTypes.STRING,
                field: 'first_name',
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                field: 'last_name',
                allowNull: false
            },
            firstNameNepali: {
                type: DataTypes.STRING,
                field: 'first_name_nepali',
            },
            lastNameNepali: {
                type: DataTypes.STRING,
                field: 'last_name_nepali'
            },
            dob: DataTypes.DATEONLY,
            startDate: {
                type: DataTypes.DATEONLY,
                field: 'start_date'
            },
            endDate: {
                type: DataTypes.DATEONLY,
                field: 'end_date'
            },
            photoUrl: {
                type: DataTypes.STRING,
                field: 'photo_url'
            },
            description: DataTypes.TEXT,
            email: DataTypes.STRING
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.Batch);
    }
}

module.exports = Member