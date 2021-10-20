const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersServices = {

    findAll: () => {        
        return users;
    },

    findByPk: (id) => {
        return users.find((user) => {
            return user.id == id
        });
    },

    getByEmail: (email) => {

        return users.find((user) => {
            return user.email == email
        });
        
    },

    findByField: (field, text) => {
        const userFound = users.find((user) => {
            return user[field] === text
        });
        return userFound
    },

    createOne: (payload, image) => {
        const lastUser = users[users.length - 1];
        const biggestUserId = users.length > 0 ? lastUser.id : 1;
        delete payload.password2;
        const user = {
            id: biggestUserId + 1,
            name: payload.username,
            email: payload.email,
            constraseña: bcrypt.hashSync(payload.password, 12),
            image: image ? "/images/user-images/" + image.filename : "/images/user-images/default.jpg"
        };
        users.push(user);
        const jsonString = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, jsonString);
    },

    editOne: (id, payload, image) => {
        const user = this.findByPk(id);
        user.first_name = payload.first_name;
        user.last_name = payload.last_name;
        user.image = image ? image.filename : user.image;
        user.address = payload.address;
        this.save();
    },
    
    save() {
        const jsonString = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, jsonString);
    }

}


module.exports = usersServices;