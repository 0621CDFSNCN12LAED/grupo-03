const express = require("express");
const router = express.Router();

//multer
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage(
  {
    destination: path.join(__dirname, "../../public/images/users"),
    filename: (req, file, cb) => {
        cb(null, 'usr-img-' + Date.now() + path.extname(file.originalname));
    }
  }
);

const uploader = multer({ storage });

//validations
const registerValidation = require("../validations/register-validations");
const loginValidation = require("../validations/login-validation");
const assertValidations = require("../validations/assert-validations");

//middlewares
const authGuestMiddleware = require("../middlewares/auth-guest-middleware");
const authLoggedMiddleware = require("../middlewares/auth-logged-middleware");

//controllers
const usersController = require("../controllers/users-controller");

//Create
router.get("/register", authGuestMiddleware, usersController.register);
router.post(
  "/register",
  uploader.single("image"),
  registerValidation,
  /*assertValidations,*/
  usersController.processRegister
);

//Read
router.get("/login", authGuestMiddleware, usersController.login);
router.post(
  "/login",
  loginValidation,
  /*assertValidations,*/
  usersController.processLogin
);

//Update
router.get("/profile", authLoggedMiddleware, usersController.profile);
router.get("/profile/edit", authLoggedMiddleware, usersController.edit);
router.put(
  "/profile/edit", 
  uploader.single("image"), 
  registerValidation, 
  assertValidations, 
  usersController.update
);

module.exports = router;