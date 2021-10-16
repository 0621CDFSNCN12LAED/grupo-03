const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersServices = {

    findAll: () => {        
        return users;
    },

    findByPk: (id) => {
        const userFound = users.find((user) => {
            return user.id === id
        });
        return userFound;
    },

    findByField: (field, text) => {
        const userFound = users.find((user) => {
            return user[field] === text
        });
        return userFound
    },

    createOne(payload, image) {
        const lastUser = users[users.length - 1];
        const biggestUserId = users.length > 0 ? lastUser.id : 1;
        const user = {
            id: biggestUserId + 1,
            name: payload.first_name,
            ...payload,
            image: image ? "/images/user-images/" + image.filename : "/images/user-images/default.jpg"
        };
        users.push(user);
        this.save();
    },

    editOne(id, payload, image) {
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