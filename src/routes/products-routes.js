const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller.js");
router.get("/productCart", productsController.cart);
router.get("/productDetail", productsController.detail);

module.exports = router;