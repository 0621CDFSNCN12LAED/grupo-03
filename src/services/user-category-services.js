const { UserCategory } = require("../database/models");

module.exports = {

  getById: async (id) => {

    return await UserCategory.findByPk(id, {
      include: [{association: "usuarios"}]
    });

  },

  getAll: async () => {

    return await UserCategory.findAll();

  }

};