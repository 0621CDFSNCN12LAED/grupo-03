const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const productCategory = sequelize.define(
        "ProductCategory",
        {
            name: DataTypes.STRING
        },
        {
            tableName: "product_categories",
            underscored: true,
            paranoid: true
        }
    );

    productCategory.associate = function (models) {
        productCategory.hasMany(models.Product, {
            as: "productos",
            foreignKey: "productCategoryId"
        })
    }
    
    return productCategory;
    
};