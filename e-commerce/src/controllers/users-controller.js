const usersService = require("../services/users-service");
const bcrypt = require("bcryptjs");

const usersController = {

    profile: function (req, res) {
        res.render("users/profile", {title: "Morfi-Perfil"});
    },

    login: function (req, res) {
        res.render("users/login", {title: "Morfi-Login"});
    },

    processLogin: async (req, res) => {
        const user = await usersService.getByEmail(req.body.email);

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
    },

    register: function (req, res) {
        res.render("users/register", {title: "Morfi-Registro"});
    },

    processRegister: async (req, res) => {
        await usersService.createOne(req.body, req.file);
        res.redirect("/users/login");
    },

    edit: (req, res) => {
        res.render("users/userEdit");
    },

    update: async (req, res) => {
        await usersService.edit(req.user.id, req.body, req.file);
        res.redirect("/users/profile");
    }

};

module.exports = usersController;