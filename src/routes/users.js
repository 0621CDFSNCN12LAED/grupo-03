const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const usersController = require("../controllers/users-controller");

const loginValidation = require("../validations/login-validation");

const registerValidation = require("../validations/register-validations");
const assertValidations = require("../validations/assert-validations");

// carga de imagenes con multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/user-images"),
    filename: (req, file, cb) => {
        cb(null, 'usr-img-' + Date.now() + path.extname(file.originalname));
    }
});

const uploader = multer({ storage });
//

const authLoggedMiddleware = require("../middlewares/auth-logged-middleware");
const authGuestMiddleware = require("../middlewares/auth-guest-middleware");

// rutas de login
router.get("/login", authGuestMiddleware, usersController.login);
router.post(
  "/login",
  loginValidation,
  assertValidations,
  usersController.processLogin
);

// rutas de registro
router.get("/register", authGuestMiddleware, usersController.register);
router.post(
  "/register",
  uploader.single("image"),
  registerValidation,
  assertValidations,
  usersController.processRegister
);

router.get("/profile", authLoggedMiddleware, usersController.profile);

module.exports = router;
