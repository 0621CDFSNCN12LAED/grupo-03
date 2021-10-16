const {validationResult} = require("express-validator");

const usersController = {
    user: function (req, res) {
        res.render("users/profile", {title: "Morfi-Perfil"});
    },
    login: function (req, res) {
        res.render("users/login", {title: "Morfi-Login"});
    },
    processLogin: (req, res) => { 
        const errors = validationResult(req);   
        res.render("users/login", {errors: errors.array()});
    },
    register: function (req, res) {
        res.render("users/register", {title: "Morfi-Registro"});
    },
    profile: function (req, res) {
        res.render("users/profile", {user: req.session.usuarioLogueado});
    }
};

module.exports = usersController;