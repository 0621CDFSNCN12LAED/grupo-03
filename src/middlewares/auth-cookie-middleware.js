const path = require("path");
const fs = require("fs");

function cookieAuthMiddleware (req, res, next) {
    next();

    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        const usersFilePath = path.join(__dirname, '../data/users.json');
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    
        let usuarioALoguearse

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recordame) {
                usuarioALoguearse = users[i];
                 break; 
            }
        }

        req.session.usuarioLogueado = usuarioALoguearse;
    }
}

module.exports = cookieAuthMiddleware;