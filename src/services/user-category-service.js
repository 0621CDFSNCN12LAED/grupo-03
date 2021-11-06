const { UserCategory } = require("../database/models");

module.exports = {

  getByPk: async (req, res) => {

    return await UserCategory.findByPk(id);

  }

};