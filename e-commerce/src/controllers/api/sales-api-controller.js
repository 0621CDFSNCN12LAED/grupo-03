const purchaseService = require("../../services/purchase-service");
const purchaseProductService = require("../../services/purchase-product-service");

const salesApiController = {

    list: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const sales = await purchaseService.findAll(pageSize, page);

        const nextPage = offset + pageSize < sales.length ? `/api/sales?page=${parseInt(page) + 1}` : null;
        const prevPage = page > 0 ? `/api/sales?page=${parseInt(page) - 1}` : null;

        res.json({
            meta: {
                status: 200,
                count: sales.length,
                page: page,
                pageSize: pageSize,
                url: `/api/sales?page=${page}`,
                nextUrl: nextPage,
                prevUrl: prevPage
            },
            data: sales.map((sale) => ({
                id: sale.id,
                detail: `/api/sales/${sale.id}`,
                date: sale.date,
                totalPrice: sale.totalPrice,
                totalQuantity: sale.totalQuantity,
                user: {
                    id: sale.usuarios.id,
                    detail: `/api/users/${sale.usuarios.id}`,
                    firstName: sale.usuarios.firstName,
                    lastName: sale.usuarios.lastName,
                    email: sale.usuarios.email
                },
                products: sale.productos
            }))
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
                url: "/api/sales/last-sold-products"
            },
            data: purchasesProducts
        });
    },

    mostSoldProducts: async (req, res) => {
        const products = await purchaseProductService.mostSoldProducts();

        res.json({
            meta: {
                status: 200,
                count: products.length,
                url: "api/sales/most-sold-products"
            },
            data: products
        });
    }

};

module.exports = salesApiController;