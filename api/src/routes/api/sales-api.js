const express = require('express');
const router = express.Router();
const salesAPIController = require('../../controllers/api/sales-api-controller');

router.get('/', salesAPIController.list);
router.get("/products", salesAPIController.soldProducts);
router.get('/:id', salesAPIController.detail);

module.exports = router;