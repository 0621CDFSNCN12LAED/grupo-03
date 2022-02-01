const { Purchase } = require("../database/models");

module.exports = {
  getById: async (id) => {
    return await Purchase.findByPk(id, {
      include: [{association: "usuarios"}, {association: "productos"}]
    });
  },

  findAll: async (pageSize, page) => {
    return await Purchase.findAll({
      limit: pageSize,
      offset: page * pageSize,
      include: [{association: "usuarios"}, {association: "productos"}]
    });
  }
};