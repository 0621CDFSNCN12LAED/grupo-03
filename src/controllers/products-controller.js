const productsService = require("../services/products-service");

const productsController = {

    cart: (req, res) => {

        res.render("products/productCart");

    },

    index: (req, res) => {

        const randomProducts = productsService.findRandom();
        res.render("products/productIndex", {products: randomProducts});

    },

    byCategory: async (req, res) => {

        const productsByCategory = await productsService.filterByCategory(req.params.category);
        res.render("products/productIndex", {products: productsByCategory}); 

    },

    create: async (req, res) => {

        res.render("products/productCreate");

    },

    store: async (req, res) => {

        await productsService.create(req.body, req.file);
        res.redirect("/products");

    },

    detail: async (req, res) => {

        const product = await productsService.getById(req.params.id);
        res.render("products/productDetail", {product});

    },

    edit: async (req, res) => {

        const product = await productsService.getById(req.params.id);
        res.render("products/productEdit", {product});

    },

    update: async (req, res) => {

        await productsService.edit(req.params.id, req.body, req.file);
        res.redirect("/products");

    },

    delete: async (req, res) => {

        const product = await productsService.getById(req.params.id);
        res.render("products/productDelete", {product});

    },

    destroy: async (req, res) => {

        await productsService.delete(req.params.id);
        res.redirect("/products");

    }

};

module.exports = productsController;