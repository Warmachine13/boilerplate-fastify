import User from "../controllers/UserController.js";
export default (fastify, opts, done) => {
  const UserController = new User();
  fastify.get("/index", UserController.index);
  fastify.post("/store", UserController.store);
  fastify.get("/show/:id", UserController.show);
  fastify.put("/update/:id", UserController.update);

  done();
};
