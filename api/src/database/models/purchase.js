const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 

    const purchase = sequelize.define(
        "Purchase",
        {
            date: DataTypes.DATE,
            totalPrice: DataTypes.DECIMAL,
            totalQuantity: DataTypes.DECIMAL,
            userId: DataTypes.INTEGER
        },
        {
            tableName: "purchases",
            underscored: true,
            paranoid: true
        }
    );
    
    purchase.associate = function (models) {

        purchase.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "userId"
        });

        purchase.belongsToMany(models.Product, {
            as: "productos", 
            through: "purchase_product",
            foreignKey: "purchaseId",
            otherKey: "productId",
            timestamps: true
        });

    }
    
    return purchase;

};