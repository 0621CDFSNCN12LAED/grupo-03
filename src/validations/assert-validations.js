const { validationResult, Result } = require("express-validator")

module.exports = (req, res, next) => {

    const result = validationResult(req);

    if(result.isEmpty()){
        next();
    } else {
        // TODO: enviar los erroes de validacion
        res.redirect("back");
    }

}