const { body } = require('express-validator');

const loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('Debes completar el Email')
        .bail()
        .isEmail()
        .withMessage('Email invalido'),
    body('password')
        .notEmpty()
        .withMessage('Debes completar la Contraseña')
];

module.exports = loginValidation;