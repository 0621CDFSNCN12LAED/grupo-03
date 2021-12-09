const productsService = require("../../services/products-service");
const productCategoryService = require("../../services/product-category-service");

const productsApiController = {

    create: async (req, res) => {
        const product = await productsService.create(req.body);
 
        res.json({
            meta: {
                status: 200,
                url: "api/products"
            },
            data: product
        });
    },

    list: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const {count, rows} = await productsService.findAndCountAll(pageSize, page);

        const nextPage = offset + pageSize < count ? `/api/products?page=${page + 1}` : null;
        const prevPage = page > 0 ? `/api/products?page=${page - 1}` : null;

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
                detail: `/api/products/${product.id}`
            }))
        });
    },
    
    detail: async (req, res) => {
        const product = await productsService.getById(req.params.id);
        const category = await productCategoryService.getByPk(product.productCategoryId);

        if(product) {
            res.json({
                meta: {
                    status: 200,
                    url: "api/products/" + req.params.id
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
                url: "api/products/" + req.params.id
            },
            data: "No existe el producto con id: " + req.params.id
        });
    },

    search: async (req, res) => {
        const products = await productsService.findByTitle(req.query.name);

        if (products.length > 0) {
            res.json({
                meta: {
                    status: 200,
                    count: products.length,
                    url: "api/products/search?name=" + req.query.name
                },
                data: products
            });
        }

        res.json("No existen los productos que estas buscando");
    },

    update: async (req, res) => {
        await productsService.edit(req.params.id, req.body);

        const products = await productsService.findAll();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "api/products"
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
                url: "api/products"
            },
            data: products
        });
    },
    /*
    byCategory: async (req, res) => {

        const promiseProductsByCategory = await productsService.filterByCategory(req.params.id);
        const promiseCategories = await productCategoryService.getAll();

        const promiseArray = [promiseProductsByCategory, promiseCategories];
        const [products, categories] = await Promise.all(promiseArray);

         

    }
    */
};

module.exports = productsApiController;