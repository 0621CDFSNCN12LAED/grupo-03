const { Product } = require("../database/models");

const productsService = {

    getById: async (id) => {

        return await Product.findByPk(id);

    },

    findAll: async () => {

        return await Product.findAll();

    },

    findRandom: async () => {

        let indexProducts = [];
        const filteredProducts = await Product.findAll();
        const maxProducts = 8;
        for (let i = 0; i < maxProducts; i++){
            const randomIndex = Math.floor(Math.random() * (filteredProducts.length));
            indexProducts.push(filteredProducts[randomIndex])
        };
        return indexProducts;

    },

    filterByCategory: async (category) => {

        return await Product.findAll({
            include: [{where: {productCategory : category}}]
        });

    },

    create: async (payload, img) => {

        await Product.create({
            ...payload,
            password: bcrypt.hashSync(payload.password, 12),
            image: img ? "/images/products/" + image.filename : "logo_fondo_verde.jpg"
        });

    },

    edit: async (id, payload, img) => {

        await Product.update(
            {
                ...payload, 
                image: img ? img.filename : img,
            },
            {
                where: {id: id,},
            }
        );

    },

    delete: async (id) => {

        await Movie.destroy({
            where: {
                id: id,
            },
        });

    }

};

module.exports = productsService;
/*
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsJsonService = {
    
    findAll() {

        const filteredProducts = products.filter((prod) => {
            return !prod.deleted;
        });
        return filteredProducts;

    },

    findRandom() {

        let indexProducts = [];
        const filteredProducts = this.findAll();
        const maxProducts = 8;
        for (let i = 0; i < maxProducts; i++){
            const randomIndex = Math.floor(Math.random() * (filteredProducts.length));
            indexProducts.push(filteredProducts[randomIndex])
        };
        return indexProducts;

    },

    filterByCategory(category) {

        return this.findAll().filter((prod) => {
            return prod.category.toLowerCase() == category;
        });

    },

    findOneById(id) {

        const product = products.find((prod) => {
            return prod.id == id;
        });
        return product;

    },

    createOne(payload, image) {

        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...payload,
            weight: Number(payload.weight),
            price: Number(payload.price),
            image: image ? "/images/products/" + image.filename : "logo_fondo_verde.jpg"
        };
        products.push(product);
        this.save();

    },

    editOne(id, payload, image) {

        const product = this.findOneById(id);
        product.name = payload.name;
        product.description = payload.description;
        product.category = payload.category;
        product.weight = Number(payload.weight);
        product.price = Number(payload.price);
        product.image = image ? image.filename : product.image;
        this.save();

    },

    destroyOne(id) {

        const product = this.findOneById(id);
        product.deleted = true;
        this.save();

    },

    save() {

        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);

    }

};
*/