const { body } = require("express-validator");
const usersService = require("../services/users-service");

module.exports = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("Debes completar tu Nombre")
    .bail()
    .isLength({min:2})
    .withMessage("El Nombre debe ser mas largo"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Debes completar tu Apellido")
    .bail()
    .isLength({min:2})
    .withMessage("La Apellido debe ser mas largo"),
  body("email")
    .notEmpty()
    .withMessage("Debes completar el Email")
    .bail()
    .isEmail()
    .withMessage("Email invalido")
    .bail()
    .custom(async (email) => {
      const user = await usersService.getByEmail(email);
      if (user) {
        throw new Error ("Email ya en uso")
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Debes completar la Contraseña")
    .bail()
    .isStrongPassword()
    .withMessage("Debes completar una Contraseña fuerte"),
  body("image")
    .optional({nullable: true})
    .isIn(["JPG", "JPEG", "PNG", "GIF"])
    .withMessage("Archivo de imagen invalido")
];
