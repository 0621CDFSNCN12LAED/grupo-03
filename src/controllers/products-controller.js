const path = require("path");

const productsController = {
    cart: function (req, res) {
        res.render("products/productCart");
    },
    detail: function (req, res) {
        res.render("products/productDetail");
    }
};

module.exports = productsController;