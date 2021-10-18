const { body } = require("express-validator");

module.exports = [
  body("username").notEmpty().withMessage("Campo no puede estar vacio"),
  body("email")
    .notEmpty()
    .withMessage("Campo no puede estar vacio")
    .bail()
    .isEmail()
    .withMessage("Campo debe ser un email"),
  body("password")
    .notEmpty()
    .withMessage("Campo no puede estar vacio")
    .bail()
    .custom((value, { req }) => {
        return value == req.body.password2
    })
    .withMessage("La contraseña debe coincidir"),
];
