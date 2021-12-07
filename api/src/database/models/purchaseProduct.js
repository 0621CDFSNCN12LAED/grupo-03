const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const purchaseProduct = sequelize.define(
        "PurchaseProduct",
        {
            purchasePrice: DataTypes.DECIMAL,
            quantity: DataTypes.DECIMAL,
            purchaseId:{
                type: DataTypes.INTEGER, 
                references: {model:'Purchase', key: 'id'}
            },
            productId:{
                type: DataTypes.INTEGER, 
                references: {model:'Product', key: 'id'}
            }
        },
        {
            tableName: "purchase_product",
            underscored: true,
            paranoid: true
        }
    );
    
    purchaseProduct.associate = function (models) {

        purchaseProduct.belongsTo(models.Purchase, {
            as: "compras",
            foreignKey: "purchaseId"
        });

        purchaseProduct.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "productId"
        });

    };
    
    return purchaseProduct;

};