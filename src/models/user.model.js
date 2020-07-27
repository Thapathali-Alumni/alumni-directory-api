const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            memberId: {
                type: DataTypes.INTEGER,
            },
            role: DataTypes.STRING,
            verificationToken: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.RefreshToken);
        // or
        // this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
    }
}

module.exports = User



/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - role
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          role:
 *            type: string
 *            description: Role of the user - admin, member, external
 *        example:
 *           username: Bijay 
 *           email: fake@email.com
 *           role: 'admin'
 */