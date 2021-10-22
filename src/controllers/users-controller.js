const usersServices = require("../services/users-service");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersController = {

    user: function (req, res) {

        res.render("users/profile", {title: "Morfi-Perfil"});

    },

    login: function (req, res) {

        res.render("users/login", {title: "Morfi-Login"});

    },

    processLogin: (req, res) => {

        const errors = validationResult(req);
        
        if ( errors.isEmpty() ) {
        
            const user = usersServices.getByEmail(req.body.email);

            if (!user) {
                res.render("users/login", {errors: [{msg: "Credenciales invalidas"}]});
                return;
            }

            if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.render("users/login", {errors: [{msg: "Credenciales invalidas"}]});
                return;
            }

            req.session.loggedUserId = user.id;

            if (req.body.rememberUser != undefined) {
                res.cookie("rememberUserId", user.id, {maxAge: 60000});
            }

            res.render("users/profile", {user: user});

        } else {

            res.render("users/login", {errors: errors.array()})

        }

    },

    register: function (req, res) {

        res.render("users/register", {title: "Morfi-Registro"});

    },

    processRegister: function (req, res) {

        const errors = validationResult(req);

        if( errors.isEmpty() ) {

            usersServices.createOne(req.body, req.file);
            res.redirect("login");

        } else {

            res.render("users/register", {errors: errors.array()});

        }

    }

};

module.exports = usersController;