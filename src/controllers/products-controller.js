const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...req.body,
            weight: Number(req.body.weight),
            price: Number(req.body.price)
        }
        products.push(product)
        res.redirect("/products")
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