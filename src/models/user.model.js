// /**
//  * User Schema
//  */
// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         memberId: {
//             type: DataTypes.INTEGER,
//         }
//     });

//     return User;
// };

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
            }
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

module.exports = User