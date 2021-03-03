const User = require("../controllers/UserController.js");

module.exports = (fastify, opts, done) => {
  const UserController = new User();

  fastify.get("/index", UserController.index);
  fastify.post("/store", UserController.store);
  fastify.get("/show/:id", UserController.show);
  fastify.put("/update/:id", UserController.update);

  done();
};
