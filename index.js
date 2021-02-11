import fastify from "fastify";
import routes from "./src/routes/index.js";
import connection from "./src/connection/database.js";
import { config } from "dotenv";

// const fastify = require("fastify")({
//   logger: true,
// });

const start = async () => {
  try {
    config();

    const fast = fastify({ logger: true });
    routes(fast);
    connection(fast);
    await fast.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    console.log(err);
    // fastify.log.error(err);
    process.exit(1);
  }
};
start();
