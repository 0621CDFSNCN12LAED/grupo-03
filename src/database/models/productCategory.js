const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => { 

    const productCategory = sequelize.define(
        "ProductCategory",
        {
            name: DataTypes.STRING
        },
        {
            tableName: "product_categories",
            timestamps: false,
            underscored: true
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