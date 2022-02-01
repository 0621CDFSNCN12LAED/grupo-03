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
      offset: page * pageSize,
      include: {association: "productos"}
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
    const soldProducts= await PurchaseProduct.findAll({
      order: [
        ["productId", "DESC"]
      ],
      include: [{association: "productos"}, {association: "compras"}]
    });
    
    let mostSold = [];

    for (let i = 0; i < soldProducts.length; i++) {
      if (soldProducts[i++].productId == soldProducts[i].productId) {
        mostSold.push(soldProducts[i]);
      }
    }

    return mostSold;
  }
};