const purchaseService = require("../../services/purchase-service");
const purchaseProductService = require("../../services/purchase-product-service");

const salesApiController = {

    list: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const {count, rows} = await purchaseService.findAndCountAll(pageSize, page);

        const nextPage = offset + pageSize < count ? `/api/sales?page=${parseInt(page) + 1}` : null;
        const prevPage = page > 0 ? `/api/sales?page=${parseInt(page) - 1}` : null;

        res.json({
            meta: {
                status: 200,
                count: count,
                page: page,
                pageSize: pageSize,
                url: `/api/sales?page=${page}`,
                nextUrl: nextPage,
                prevUrl: prevPage
            },
            data: rows
        });
    },
    
    detail: async (req, res) => {
        const sale = await purchaseService.getById(req.params.id);

        if(sale) {
            res.json({
                meta: {
                    status: 200,
                    url: "api/sales/" + req.params.id
                },
                data: sale
            });
        }
        
        res.json({
            meta: {
                status: 200,
                url: "api/sales/" + req.params.id
            },
            data: "No existe la venta con id: " + req.params.id
        });
    },

    soldProducts: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const {count, rows} = await purchaseProductService.findAndCountAll(pageSize, page);

        const nextPage = offset + pageSize < count ? `/api/sales/products?page=${parseInt(page) + 1}` : null;
        const prevPage = page > 0 ? `/api/sales/products?page=${parseInt(page) - 1}` : null;

        res.json({
            meta: {
                status: 200,
                count: count,
                page: page,
                pageSize: pageSize,
                url: `/api/sales/products?page=${page}`,
                nextUrl: nextPage,
                prevUrl: prevPage
            },
            data: rows
        });
    },

    lastSoldProducts: async (req, res) => {
        const purchasesProducts = await purchaseProductService.lastSoldProducts();
        
        res.json({
            meta: {
                status: 200,
                url: "/api/sales/products/last-sold-products"
            },
            data: purchasesProducts.map((purchaseProduct) => ({
                id: purchaseProduct.id,
                purchasePrice: purchaseProduct.purchasePrice,
                quantity: purchaseProduct.quantity,
                sales: {
                    id: purchaseProduct.compras.id,
                    date: purchaseProduct.compras.date,
                    totalPrice: purchaseProduct.compras.totalPrice,
                    totalQuantity: purchaseProduct.compras.totalQuantity,
                    userId: purchaseProduct.compras.userId
                },
                products: {
                    id: purchaseProduct.productos.id,
                    name: purchaseProduct.productos.name,
                    description: purchaseProduct.productos.description,
                    price: purchaseProduct.productos.price,
                    weight: purchaseProduct.productos.weight,
                    image: purchaseProduct.productos.image,
                    productCategoryId: purchaseProduct.productos.productCategoryId
                }
            }))
        });
    },

    mostSoldProducts: async (req, res) => {
        const products = await purchaseProductService.mostSoldProducts();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "api/sales/products/most-sold-products"
            },
            data: products
        }).catch((error) => {
            res.send(error)
        });
    }

};

module.exports = salesApiController;