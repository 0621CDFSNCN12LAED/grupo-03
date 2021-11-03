const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty()
        .withMessage('Debes asignarle un Nombre'),
    body('description')
        .notEmpty()
        .withMessage('Debes asignarle una Descripción'),
    body('image')
        .notEmpty()
        .withMessage('Debes asignarle una Imagen'),
    body('productCategoryId')
        .notEmpty()
        .withMessage('Debes asignarle una Categoria'),
    body('weight')
        .notEmpty()
        .withMessage('Debes asignarle un Peso'),
    body('price')
        .notEmpty()
        .withMessage('Debes asignarle un Precio')
];