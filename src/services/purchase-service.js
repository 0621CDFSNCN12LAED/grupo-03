const { Purchase } = require("../database/models");

module.exports = {

  getById: async (id) => {

    return await Purchase.findByPk(id, {
      include: [{association: "usuarios"}]
    });

  },

  getAll: async () => {

    return await Purchase.findAll();
  
  }

};