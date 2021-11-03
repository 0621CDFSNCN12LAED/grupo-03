const productsService = require("../services/products-service");
const productCategoryServices = require("../services/product-category-services");

const productsController = {

    cart: (req, res) => {

        res.render("products/productCart");

    },

    index: async (req, res) => {

        const randomProducts = await productsService.findRandom();
        res.render("products/productIndex", {products: randomProducts});

    },
    /*
    byCategory: async (req, res) => {

        res.render("products/productIndex", {products: }); 

    },
    */
    create: async (req, res) => {

        const categories = await productCategoryServices.getAll();
        res.render("products/productCreate", {categories});

    },

    store: async (req, res) => {

        await productsService.create(req.body, req.file);
        res.redirect("products");

    },

    detail: async (req, res) => {

        const product = await productsService.getById(req.params.id);
        res.render("products/productDetail", {product});

    },

    edit: async (req, res) => {

        const id = req.params.id;
        
        const promiseProduct = await productsService.getById(id);
        const promiseCategories = await productCategoryServices.getAll();

        const promiseArray = [promiseProduct, promiseCategories];
        const [product, categories] = await Promise.all(promiseArray);

        res.render("products/productEdit", {product, categories});

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

        res.redirect("products");
        

    }

};

module.exports = productsController;