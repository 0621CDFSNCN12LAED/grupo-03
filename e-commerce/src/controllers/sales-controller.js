const purchaseService = require("../services/purchase-service");
const purchaseProductService = require("../services/purchase-product-service");

const salesController = {
    create: async (req, res) => {
        res.redirect("/products");
    }
};

module.exports = salesController;