const path = require("path");

const productsController = {
    cart: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/products/productCart.html"));
    },
    detail: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/products/productDetail.html"));
    }
};

module.exports = productsController;