// import fastify from "fastify";

module.exports = (fastify) => {
  fastify.register((fastify, opts, done) => {
    fastify.get("/", () => "is runnign");
    done();
  });
  fastify.register(require("./userRoutes.js"), { prefix: "/user" });
  fastify.register(require("./postRoutes.js"), { prefix: "/post" });
};
