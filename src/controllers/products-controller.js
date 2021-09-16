const productsService = require("../services/products-service");

const productsController = {
    //Ver implementacion del carrito. Necesitamos otra ruta?
    cart: function (req, res) {
        res.render("products/productCart");
    },
    index: function (req, res) {
        const randomProducts = productsService.findRandom();
        res.render("products/productIndex", {products: randomProducts});
    },
    byCategory: function (req, res) {
        const productsByCategory = productsService.filterByCategory(req.params.category);
        res.render("products/productIndex", {products: productsByCategory}); 
    },
    create: function (req, res) {
        res.render("products/productCreate");
    },
    store: function (req, res) {
        productsService.createOne(req.body, req.file);
        res.redirect("/products");
    },
    detail: function (req, res) {
        //Ver ejercicios resueltos de pablo. Hay que agregar un error cuando no se encuentra el producto
        const product = productsService.findOneById(req.params.id);
        res.render("products/productDetail", {product});
    },
    edit: function (req, res) {
        const product = productsService.findOneById(req.params.id);
        res.render("products/productEdit", {product});
    },
    update: function (req, res) {
        productsService.editOne(req.params.id, req.body, req.file);
        res.redirect("/products");
    },
    destroy: function (req, res) {
        productsService.destroyOne(req.params.id);
        res.redirect("/products");
    }
};

module.exports = productsController;