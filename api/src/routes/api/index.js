const express = require("express");
const router = express.Router();

const usersRoutes = require("./users-api");
router.use("/users", usersRoutes);

const productsRoutes = require("./products-api");
router.use("/products", productsRoutes);

module.exports = router;