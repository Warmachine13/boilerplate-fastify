export default (fastify, opts, done) => {
  fastify.get("/index", () => 1);
  fastify.get("/show/:id", () => 1);
  fastify.post("/store", () => 1);
  fastify.put("/update/:id", () => 1);

  done();
};
