const productsService = require("../../services/products-service");
const productCategoryService = require("../../services/product-category-service");

const productsApiController = {
    /*
    create: async (req, res) => {
        const product = await productsService.create(req.body);
 
        res.json({
            meta: {
                status: 200,
                url: "/api/products"
            },
            data: product
        });
    },
    */
    list: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const {count, rows} = await productsService.findAndCountAll(pageSize, page);

        const nextPage = offset + pageSize < count ? `/api/products?page=${parseInt(page) + 1}` : null;
        const prevPage = page > 0 ? `/api/products?page=${parseInt(page) - 1}` : null;

        res.json({
            meta: {
                status: 200,
                count: count,
                page: page,
                pageSize: pageSize,
                url: `/api/products?page=${page}`,
                nextUrl: nextPage,
                previousUrl: prevPage
            },
            data: rows.map((product) => ({
                id: product.id,
                name: product.name, 
                description: product.description,
                detail: `/api/products/detail/${product.id}`
            }))
        });
    },

    all: async (req, res) => {
        const products = await productsService.findAll();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "/api/products/all"
            },
            data: products
        });
    },
    
    detail: async (req, res) => {
        const product = await productsService.getById(req.params.id);
        const category = await productCategoryService.getByPk(product.productCategoryId);

        if(product) {
            res.json({
                meta: {
                    status: 200,
                    url: "/api/products/detail/" + req.params.id
                },
                data: {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    weight: product.weight,
                    category: category.name,
                    image: "http://localhost:3000" + product.image
                }
            });
        }
        
        res.json({
            meta: {
                status: 200,
                url: "api/products/detail/" + req.params.id
            },
            data: "No existe el producto con id: " + req.params.id
        });
    },

    categories: async (req, res) => {
        const categories = await productCategoryService.getAll();

        res.json({
            meta: {
                status: 200,
                count: categories.length,
                url: "/api/products/categories"
            },
            data: categories
        });
    },

    categoriesProducts: async (req, res) => {
        const carnes = await productsService.findByCategory(1);
        const pescados = await productsService.findByCategory(2);
        const pollos = await productsService.findByCategory(3);
        const veganos = await productsService.findByCategory(4);

        res.json({
            meta: {
                status: 200,
                carnesCount: carnes.length,
                pescadosCount: pescados.length,
                pollosCount: pollos.length,
                veganosCount: veganos.length,
                url: "/api/products/categories/products"
            },
            data: {
                carnes: carnes,
                pescados: pescados,
                pollos: pollos,
                veganos: veganos
            }
        });
    },
    
    lastProduct: async (req, res) => {
        const product = await productsService.lastProductInDb();
        const category = await productCategoryService.getByPk(product.productCategoryId);

        res.json({
            meta: {
                status: 200,
                url: "/api/products/last-product"
            },
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                weight: product.weight,
                category: category.name,
                image: "http://localhost:3000" + product.image
            }
        });
    },
    
    search: async (req, res) => {
        const products = await productsService.findByName(req.query.name);

        if (products.length > 0) {
            res.json({
                meta: {
                    status: 200,
                    count: products.length,
                    url: "/api/products/search?name=" + req.query.name
                },
                data: products
            });
        }

        res.json("No existen los productos que estas buscando");
    },
    /*
    update: async (req, res) => {
        await productsService.edit(req.params.id, req.body);

        const products = await productsService.findAll();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "/api/products"
            },
            data: products
        });
    },

    destroy: async (req, res) => {
        await productsService.delete(req.params.id);

        const products = productsService.findAll();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "/api/products"
            },
            data: products
        });
    },
    */
};

module.exports = productsApiController;