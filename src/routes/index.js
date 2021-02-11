// import fastify from "fastify";

export default (fastify) => {
  fastify.register((fastify, opts, done) => {
    fastify.get("/", () => "is runnign");
    done();
  });
  fastify.register(import("./userRoutes.js"), { prefix: "/user" });
  fastify.register(import("./postRoutes.js"), { prefix: "/post" });

  // fastify.get("/", () => "pong");
  // done();
};
