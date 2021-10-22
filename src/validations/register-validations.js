const { body } = require("express-validator");

module.exports = [
  body("username")
    .notEmpty()
    .withMessage("Debes completar el Nombre"),
  body("email")
    .notEmpty()
    .withMessage("Debes completar el Email")
    .bail()
    .isEmail()
    .withMessage("Email invalido"),
  body("password")
    .notEmpty()
    .withMessage("Debes completar la Contraseña")
    .bail()
    .isLength({min:8})
    .withMessage("La Contraseña debe ser mas larga")
];
