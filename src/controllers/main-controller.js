const path = require("path");

const mainController = {
    home: function (req, res) {
        res.render("index");
    }
};

module.exports = mainController;