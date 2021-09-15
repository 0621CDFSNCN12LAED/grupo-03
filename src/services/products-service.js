const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsService = {
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
            const randomIndex = Math.floor(Math.random() * (filteredProducts.length + 1));
            indexProducts.push(filteredProducts[randomIndex])
        };
        return indexProducts;
    },

    filterByCategory(category) {
        return this.findAll().filter((prod) => {
            return prod.category == category;
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
            price: Number(payload.price)
        };
        products.push(product);
        this.save();
    },

    editOne(id, payload, image) {
        const product = this.findOneById(id);
        product.name = payload.name;
        product.description = payload.description;
        product.category = payload.category;
        product.price = Number(payload.price);
        product.discount = Number(payload.discount);
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
    },
};

module.exports = productsService;