const {validationResult} = require("express-validator");
const path = require("path");
const fs = require("fs");

function loginMiddleware (req, res, next) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const usersFilePath = path.join(__dirname, '../data/users.json');
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        
        let usuarioALoguearse

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (users[i].contraseña == req.body.password 
                    //bcrypt.compareSync(req.body.password, users[i].password
                    ) {
                    usuarioALoguearse = users[i];
                    break;
                } 
            }
        }

        if (usuarioALoguearse == undefined) {
            return res.render("users/login", {errors: [{msg: "Usuario invalido"}]});
        }

        req.session.usuarioLogueado = usuarioALoguearse;

        req.session.usuarioLogged=usuarioALoguearse.email;

        if (req.body.recordame != undefined) {
            res.cookie("recordame", usuarioALoguearse.email, {maxAge: 60000});
        }

        res.render("index");

    } else {
        next();
    }
}

module.exports = loginMiddleware;