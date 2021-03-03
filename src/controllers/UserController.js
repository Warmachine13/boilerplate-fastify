// const User = require("models/UserModel");

// const user = new User();

module.exports = class User {
  async index(req, res) {
    // let users = await user.get();
    return [];
  }
  async store(req, res) {
    return [{ user: "aaa22" }];
  }
  async show(req, res) {
    return req.params.id;
  }
  async update(req, res) {
    return [{ user: "aaa22" }];
  }
};
