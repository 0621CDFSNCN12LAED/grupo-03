const usersServices = require("../services/users-service");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersController = {

    profile: function (req, res) {

        res.render("users/profile", {title: "Morfi-Perfil"});

    },

    login: function (req, res) {

        res.render("users/login", {title: "Morfi-Login"});

    },

    processLogin: async (req, res) => {

        const errors = validationResult(req);
        
        if ( errors.isEmpty() ) {
        
            const user = await usersServices.getByEmail(req.body.email);

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

            res.redirect("/users/profile");

        } else {

            res.render("users/login", {errors: errors.array()})

        }

    },

    register: function (req, res) {

        res.render("users/register", {title: "Morfi-Registro"});

    },

    processRegister: async (req, res) => {

        const errors = validationResult(req);

        if( errors.isEmpty() ) {

            await usersServices.createOne(req.body, req.file);
            res.redirect("login");

        } else {

            res.render("users/register", {errors: errors.array()});

        }

    },

    edit: (req, res) => {

        res.render("users/editProfile");

    },

    update: async (req, res) => {

        await usersServices.edit(req.params.id, req.body, req.file).then(()=> {
            res.redirect("/users/profile");
        }).catch((e)=> {console.log(e); res.send(e);});
        

    }

};

module.exports = usersController;