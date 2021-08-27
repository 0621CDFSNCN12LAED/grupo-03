const path = require("path");

const usersController = {
    login: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/users/login.html"));
    },
    register: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/users/register.html"));
    }
};

module.exports = usersController;