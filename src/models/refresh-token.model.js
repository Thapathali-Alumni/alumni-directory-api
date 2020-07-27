const Sequelize = require("sequelize");
const User = require("./user.model");

class RefreshToken extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            token: DataTypes.STRING,
            expiryDate: DataTypes.DATE,
            createdByIp: DataTypes.STRING,
            revokedDate: DataTypes.DATE,
            revokedByIp: DataTypes.STRING,
            replacedByToken: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.User);
    }

    isExpired() {
        return Date.now() >= this.expiryDate;
    }

    isActive() {
        return !this.revoked && !this.isExpired();
    }
}

module.exports = RefreshToken