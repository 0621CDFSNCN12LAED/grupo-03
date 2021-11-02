const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => { 

    const userCategory = sequelize.define(
        "UserCategory",
        {
            name: DataTypes.STRING
        },
        {
            tableName: "user_categories",
            timestamps: false,
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