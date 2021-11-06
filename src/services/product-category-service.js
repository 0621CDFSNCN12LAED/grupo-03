const { ProductCategory } = require("../database/models");

module.exports = {

  getAll: async () => {

    return await ProductCategory.findAll();
  
  }

};