const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const user = sequelize.define(
        "User",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            image: DataTypes.STRING,
            userCategoryId: DataTypes.INTEGER
        },
        {
            tableName: "users",
            underscored: true,
            paranoid: true
        }
    );
    
    user.associate = function (models) {

        user.belongsTo(models.UserCategory, {
            as: "categoriaDeUsuario",
            foreignKey: "userCategoryId"
        });

        user.hasMany(models.Purchase, {
            as: "compras",
            foreignKey: "userId"
        });

    }
    
    return user;

};