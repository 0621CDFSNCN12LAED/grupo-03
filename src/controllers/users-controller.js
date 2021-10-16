const usersService = require("../services/users-service");
const { validationResult } = require('express-validator');


const usersController = {
    user: function (req, res) {
        res.render("users/profile", {title: "Morfi-Perfil"});
    },
    login: function (req, res) {
        res.render("users/login", {title: "Morfi-Login"});
    },
    register: function (req, res) {
        res.render("users/register", {title: "Morfi-Registro"});
    },
    create: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let newUser = {
                image: req.file.filename,
                ...req.body
            }
            usersService.createOne(newUser, req.file);
            res.redirect("/users");
        } else {
            res.redirect("users/register", );
        }
    }
};

module.exports = usersController;