const fastify = require("fastify");
const routes = require("./src/routes/index.js");
// const connection = require("./src/connection/database.js");
const { config } = require("dotenv");
// const db = require("./src/connection/database");
const dd = require("./src/models/UserModel.js");
// const fastify = require("fastify")({
//   logger: true,
// });

const start = async () => {
  try {
    config();

    const fast = fastify({ logger: true });
    // connection(fast);
    // fast.ready();
    routes(fast);
    dd();
    // let User = new dd();
    // for (let index = 0; index < 100000; index++) {
    //   const jane = await User.create({
    //     username: `${(Math.random() * 300) / 5}`,
    //     birthday: new Date(1980, 6, 20),
    //   });
    //   console.log(jane.toJSON());
    // }
    // const result = fast.db;
    // console.log(result);
    //

    await fast.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    console.log(err);
    // fastify.log.error(err);
    process.exit(1);
  }
};
start();
