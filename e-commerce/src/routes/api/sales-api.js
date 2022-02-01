const express = require('express');
const router = express.Router();
const salesAPIController = require('../../controllers/api/sales-api-controller');

router.get('/', salesAPIController.list);
router.get("/products", salesAPIController.soldProducts);
router.get("/last-sold-products", salesAPIController.lastSoldProducts);
router.get("/most-sold-products", salesAPIController.mostSoldProducts);
router.get('/:id', salesAPIController.detail);

module.exports = router;