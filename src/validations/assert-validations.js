//Sera utilizado cuando sepamos rediregir con los errores sin utilizar el render

const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {

    const errors = validationResult(req);

    if( errors.isEmpty() ) {

        next();

    } else {

        res.redirect("back");

    }

};