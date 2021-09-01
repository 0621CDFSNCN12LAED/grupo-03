const path = require("path");

const usersController = {
    login: function (req, res) {
        res.render("users/login", {title: "Morfi-Login"});
    },
    register: function (req, res) {
        res.render("users/register", {title: "Morfi-Registro"});
    }
};

module.exports = usersController;