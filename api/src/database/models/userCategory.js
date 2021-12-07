const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const userCategory = sequelize.define(
        "UserCategory",
        {
            name: DataTypes.STRING
        },
        {
            tableName: "user_categories",
            underscored: true,
            paranoid: true
        }
    );

    userCategory.associate = function (models) {
        userCategory.hasMany(models.User, {
            as: "usuarios",
            foreignKey: "userCategoryId"
        })
    }
    
    return userCategory;
    
};