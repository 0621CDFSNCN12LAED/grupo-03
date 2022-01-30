const express = require('express');
const router = express.Router();
const salesAPIController = require('../../controllers/api/sales-api-controller');

router.get('/', salesAPIController.list);
router.get("/products", salesAPIController.soldProducts);
router.get("/products/last-sold-products", salesAPIController.lastSoldProducts);
router.get("/products/most-sold-products", salesAPIController.mostSoldProducts);
router.get('/:id', salesAPIController.detail);

module.exports = router;