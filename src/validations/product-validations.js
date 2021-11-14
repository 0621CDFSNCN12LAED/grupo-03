const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty()
        .withMessage('Debes asignarle un Nombre')
        .bail()
        .isLength({min:5})
        .withMessage("El Nombre debe ser mas largo"),
    body('description')
        .notEmpty()
        .withMessage('Debes asignarle una Descripción')
        .bail()
        .isLength({min:20})
        .withMessage("La Descripción debe ser mas larga"),
    body('productCategoryId')
        .notEmpty()
        .withMessage('Debes asignarle una Categoria'),
    body('weight')
        .notEmpty()
        .withMessage('Debes asignarle un Peso')
        .bail()
        .isDecimal()
        .withMessage('El Peso debe ser un numero decimal'),
    body('price')
        .notEmpty()
        .withMessage('Debes asignarle un Precio')
        .bail()
        .isDecimal()
        .withMessage('El Precio debe ser un numero decimal')
];