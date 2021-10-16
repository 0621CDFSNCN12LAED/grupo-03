const { body } = require('express-validator');

const loginValidation = [
    body('email').notEmpty().withMessage('Email no puede estar vacio').bail()
    .isEmail().withMessage('Email invalido'),
    body('password').notEmpty().withMessage('Contraseña no puede estar vacia')
];

module.exports = loginValidation;