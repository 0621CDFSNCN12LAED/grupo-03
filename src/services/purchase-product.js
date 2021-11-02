const { PurchaseProduct } = require("../database/models");

module.exports = {

    getById: async (id) => {
  
      return await PurchaseProduct.findByPk(id, {
        include: [{association: "compras"}]
      });
  
    },

    getAll: async () => {
  
        return await PurchaseProduct.findAll();
    
    }

};