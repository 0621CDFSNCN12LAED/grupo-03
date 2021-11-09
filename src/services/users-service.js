const { User } = require("../database/models");
const bcrypt = require("bcryptjs");

const usersServices = {

  findAll: async () => {

    return await User.findAll();  

  },

  findByPk: async (id) => {

    return await User.findByPk(id);

  },

  getByEmail: async (email) => {

    return await User.findOne({ where: { email: email } });

  },

  getByCategory: async (category) => {

    return await User.findAll({ where: {userCategory : category } });

  },
  
  createOne: async (payload, img) => {

    await User.create({
      ...payload,
      password: bcrypt.hashSync(payload.password, 12),
      image: img ? "/images/users/" + img.filename : "/images/users/default-user.jpg",
    });
    
  },

  edit: async (id, payload, img) => {

    const user = await User.findByPk(id);
    
    await User.update({
        ...payload,
        password: bcrypt.hashSync(payload.password, 12),
        image: img ? "/images/users/" + img.filename : user.image,
      },
      {
        where: {id: id,},
      }
    );

  }

};

module.exports = usersServices;

/*
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersJsonServices = {

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
  
  createOne: function (payload) {

    const lastUser = users[users.length - 1];
    const biggestUserId = users.length > 0 ? lastUser.id : 1;

    const user = {
      id: biggestUserId + 1,
      username: payload.username,
      email: payload.email,
      password: bcrypt.hashSync(payload.password, 12),
      image: image ? "/images/users/" + image.filename : "/images/users/default-user.jpg"
    };

    users.push(user);
    this.save();
    
  },

  editOne: function (id, payload) {
    
    const user = this.findByPk(id);

    user.first_name = payload.first_name;
    user.last_name = payload.last_name;
    user.image = image ? image.filename : user.image;
    user.address = payload.address;
    this.save();
    
  },
  
  save () {

    const jsonString = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, jsonString);

  }
  
};
*/