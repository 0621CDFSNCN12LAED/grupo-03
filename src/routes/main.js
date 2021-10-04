const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller.js");
router.get("/", mainController.home);

const usersRouter = require("./users-routes.js");
router.use("/users", usersRouter);

const productsRouter = require("./products-routes.js");
router.use("/products", productsRouter);

module.exports = router;