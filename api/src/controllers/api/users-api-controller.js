const usersService = require("../../services/users-service");

const usersApiController = {

    list: async (req, res) => {
        const users = await usersService.findAll();

        res.json({
            meta: {
                status: 200,
                count: users.length,
                url: "api/users"
            },
            data: users
        });
    },
    
    detail: async (req, res) => {
        const user = await usersService.findByPk(req.params.id);

        if(user) {
            res.json({
                meta: {
                    status: 200,
                    url: "api/users/" + req.params.id
                },
                data: user
            });
        }
        
        res.json({
            meta: {
                status: 200,
                url: "api/users/" + req.params.id
            },
            data: "No existe el usuario con id: " + req.params.id
        });
    },

};

module.exports = usersApiController;