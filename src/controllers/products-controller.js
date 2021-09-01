const path = require("path");

const productsController = {
    cart: function (req, res) {
        res.render("products/productCart", {title: "Morfi-Tu Carrito"});
    },
    detail: function (req, res) {
        res.render("products/productDetail", {title: "Morfi-Detalle del Producto"});
    }
};

module.exports = productsController;