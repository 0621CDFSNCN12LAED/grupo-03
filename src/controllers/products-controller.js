const path = require("path");

const productsController = {
    cart: function (req, res) {
        res.render("products/productCart")
    },
    index: function (req, res) {
        res.render("products/productIndex")
    },
    create: function (req, res) {
        res.render("products/productCreate")
    },
    store: function (req, res) {
        res.send("Storeee")
    },
    detail: function (req, res) {
        res.render("products/productDetail")
    },
    edit: function (req, res) {
        res.render("products/productEdit")
    },
    update: function (req, res) {
        
    },
    destroy: function (req, res) {
        
    }
};

module.exports = productsController;