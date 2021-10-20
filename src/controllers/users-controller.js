const usersServices = require("../services/users-service");

const usersController = {
    user: function (req, res) {
        res.render("users/profile", {title: "Morfi-Perfil"});
    },
    login: function (req, res) {
        res.render("users/login", {title: "Morfi-Login"});
    },
    processLogin: (req, res) => {
        
        const user = usersServices.getByEmail(req.body.email);

        if (!user) {
            res.render("users/login", {errors: [{msg: "Credenciales invalidas"}]});
            return;
        }

        /*!bcrypt.compareSync(req.body.password, user.contraseña)*/
        if (user.contraseña != req.body.password) {
            res.render("users/login", {errors: [{msg: "Credenciales invalidas"}]});
            return;
        }

        req.session.loggedUserId = user.id;

        if (req.body.rememberUser != undefined) {
            res.cookie("rememberUserId", user.id, {maxAge: 60000});
        }

        res.render("users/profile", {user: user});

    },
    register: function (req, res) {
        res.render("users/register", {title: "Morfi-Registro"});
    },
    processRegister: function (req, res) {
        usersServices.createOne(req.body, req.file);
        res.redirect("login");
    },
    profile: function (req, res) {
        res.render("users/profile");
    }
};

module.exports = usersController;