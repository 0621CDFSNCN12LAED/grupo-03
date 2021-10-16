const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

//validaciones
const validateUserForm = [
    body('first_name').notEmpty().withMessage('Nombre no puede estar vacio'),
    body('last_name').notEmpty().withMessage('Apellido no puede estar vacio'),
    body('user-image').notEmpty().withMessage('Debe seleccionar una imagen'),
    body('email').isEmail().withMessage('Debe ingresar un mail valido'),
    body('address').notEmpty().withMessage('Debe ingresar una direccion valida'),
    body('password').notEmpty().withMessage('Ingresar contraseña'),
    body('password2').notEmpty().withMessage('Ingresar misma contraseña')
];

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/user-images"),
    filename: (req, file, cb) => {
        cb(null, 'usr-img-' + Date.now() + path.extname(file.originalname));
    }
});

const uploader = multer({ storage });

const usersController = require("../controllers/users-controller.js");

router.get("/login", usersController.login);

// registro de usuarios
router.get("/register", usersController.register);
router.post("/", validateUserForm, uploader.single("user-image"), usersController.create);

// perfil de usuario
router.get("/", usersController.user);

module.exports = router;