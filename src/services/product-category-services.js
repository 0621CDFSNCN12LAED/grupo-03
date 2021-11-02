const { ProductCategory } = require("../database/models");

module.exports = {

    getById: async (id) => {
  
      return await ProductCategory.findByPk(id, {
        include: [{association: "productos"}]
      });
      
    },

    getAll: async () => {
  
        return await ProductCategory.findAll();
    
    }

};