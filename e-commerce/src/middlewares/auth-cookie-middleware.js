const usersService = require("../services/users-service");

module.exports = (req, res, next) => {

    if (req.cookies.rememberUserId != undefined && req.session.loggedUserId == undefined) {
        
        const id = req.cookies.rememberUserId;

        const user = usersService.findByPk(id);
        
        req.session.loggedUserId = user.id;

    }

    next();

}