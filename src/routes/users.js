const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");

const loginValidation = require("../validations/login-validation");

const loginMiddleware = require("../middlewares/login-middleware");

const authLoggedMiddleware = require("../middlewares/auth-logged-middleware")
router.get("/login", authLoggedMiddleware,usersController.login);
router.post("/login", loginValidation, loginMiddleware, usersController.processLogin);

router.get("/register",authLoggedMiddleware, usersController.register);

module.exports = router;