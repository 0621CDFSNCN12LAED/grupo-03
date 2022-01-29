const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/products-api-controller');

//Create
//router.post('/create', productsAPIController.create);

//Read
router.get('/', productsAPIController.list);
router.get('/all', productsAPIController.all);
router.get('/detail/:id', productsAPIController.detail);
router.get("/categories", productsAPIController.categories);
router.get("/categories-products", productsAPIController.categoriesProducts);
router.get("/last-product", productsAPIController.lastProduct);
router.get("/search", productsAPIController.search);

//Update
//router.put('/update/:id', productsAPIController.update);

//Delete
//router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;