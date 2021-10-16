const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller.js");
router.get("/", mainController.home);

const usersRouter = require("./users.js");
router.use("/users", usersRouter);

const productsRouter = require("./products.js");
router.use("/products", productsRouter);

module.exports = router;