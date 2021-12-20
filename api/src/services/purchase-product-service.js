const { PurchaseProduct } = require("../database/models");

module.exports = {
  getById: async (id) => {
    return await PurchaseProduct.findByPk(id, {
      include: [{association: "compras"}]
    });
  },

  getAll: async () => {
    return await PurchaseProduct.findAll();
  },

  findAndCountAll: async (pageSize, page) => {
    return await PurchaseProduct.findAndCountAll({
      limit: pageSize,
      offset: page * pageSize
    });
  },

  lastSoldProducts: async () => { 
    return await PurchaseProduct.findAll({
      order: [
        ["createdAt", "DESC"]
      ],
      limit: 5,
      include: [{association: "compras"}, {association: "productos"}]
    });
  },

  mostSoldProducts: async () => {
    return await PurchaseProduct.findAll({
      order: [
        sequelize.fn("max", sequelize.col("productId"))
      ]
    });
  }

};