const express = require("express");
const router = express.Router();

//API
const apiRouter = require("./api/index");
router.use("/api", apiRouter);

//Express
const loginMiddleware = require("../middlewares/login-middleware");
const mainController = require("../controllers/main-controller.js");

router.use(loginMiddleware);

router.get("/", mainController.home);

const usersRouter = require("./users.js");
router.use("/users", usersRouter);

const productsRouter = require("./products.js");
router.use("/products", productsRouter);

module.exports = router;