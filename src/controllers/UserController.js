export default class User {
  async index(req, res) {
    return [{ user: "aaa22" }];
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
}
