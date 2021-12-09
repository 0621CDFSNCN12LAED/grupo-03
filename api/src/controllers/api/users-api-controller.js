const usersService = require("../../services/users-service");

const usersApiController = {

    list: async (req, res) => {
        const pageSize = 10;
        const page = req.query.page || 0;
        const offset = page * pageSize;

        const {count, rows} = await usersService.findAndCountAll(pageSize, page);

        const nextPage = offset + pageSize < count ? `/api/products?page=${page + 1}` : null;
        const prevPage = page > 0 ? `/api/products?page=${page - 1}` : null;

        res.json({
            meta: {
                status: 200,
                count: count,
                page: page,
                pageSize: pageSize,
                url: `/api/products?page=${page}`,
                nextUrl: nextPage,
                prevUrl: prevPage
            },
            data: rows.map((user) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                detail: `/api/users/${user.id}`
            }))
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
                data: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    image: "http://localhost:3000" + user.image
                }
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