const express = require("express");
const router = express.Router();

const usersRoutes = require("./users-api");
router.use("/users", usersRoutes);

const productsRoutes = require("./products-api");
router.use("/products", productsRoutes);

const salesRoutes = require("./sales-api");
router.use("/sales", salesRoutes);

module.exports = router;