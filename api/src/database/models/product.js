const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const product = sequelize.define(
        "Product",
        {
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            weight: DataTypes.DECIMAL,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            productCategoryId: DataTypes.INTEGER
        },
        {
            tableName: "products",
            underscored: true,
            paranoid: true
        }
    );
    
    product.associate = (models) => {

        product.belongsTo(models.ProductCategory, {
            as: "categoriaDeProducto",
            foreignKey: "productCategoryId"
        });

        product.belongsToMany(models.Purchase, {
            as: "compras", 
            through: "purchase_product",
            foreignKey: "productId",
            otherKey: "purchaseId",
            timestamps: true
        });

    }
    
    return product;

};