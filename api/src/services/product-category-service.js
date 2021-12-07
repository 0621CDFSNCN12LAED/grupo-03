const { ProductCategory } = require("../database/models");

module.exports = {

  getAll: async () => {

    return await ProductCategory.findAll();
  
  },

  getByPk: async (id) => {

    return await ProductCategory.findByPk(id);

  }

};