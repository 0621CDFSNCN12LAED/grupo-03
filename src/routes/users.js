const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");

const loginValidation = require("../validations/login-validation");

const loginMiddleware = require("../middlewares/login-middleware");

router.get("/login", usersController.login);
router.post("/login", loginValidation, loginMiddleware, usersController.processLogin);

router.get("/register", usersController.register);

module.exports = router;